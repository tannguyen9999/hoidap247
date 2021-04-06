const fs = require("fs");

const globby = require("globby");
const prettier = require("prettier");
const axios = require('axios');


(async () => {
  const prettierConfig = await prettier.resolveConfig("./.prettierrc.js");
  const URL = `https://hocgioi.herokuapp.com/api/post/sitemap`;
  let data;
  try {
       res  = await axios({
        method: 'get',
        url: URL,
      });
      data = res.data.posts
    
    } catch (err) {
      throw err;
    }
  const pages = await globby([
    "pages/**/*{.js,.mdx}",
    "!pages/_*.js",
    "!pages/api",
  ]);
  const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:content="http://www.google.com/schemas/sitemap-content/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
            ${pages
              .map((page) => {
                const path = page
                  .replace("pages", "")
                  .replace(".js", "")
                  .replace(".mdx", "");
                const route = path === "/index" ? "" : path;

                return `
                        <url>
                            <loc>${`https://yoursitehere.com${route}`}</loc>
                        </url>
                    `;
              })
              .join("")}
              ${data
                .map((page) => {
                  const id = page._id
                  const date = page.createdAt
  
                  return `
                          <url>
                              <loc>${`https://yoursitehere.com/cauhoi/${id}`}</loc>
                              <lastmod>${date}</lastmod>
                          </url>
                      `;
                })
                .join("")}
        </urlset>
    `;

  // If you're not using Prettier, you can remove this.
  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: "html",
  });

  fs.writeFileSync("public/sitemap.xml", formatted);
})();
