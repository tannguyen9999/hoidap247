import React from "react";
const axios = require('axios');

const EXTERNAL_DATA_URL = "https://jsonplaceholder.typicode.com/posts";
const URL = `https://hocgioi.herokuapp.com/api/post/sitemap`;
const createSitemap = (posts) => `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:content="http://www.google.com/schemas/sitemap-content/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
        ${posts
          .map(( page ) => {
            return `
                    <url>
                        <loc>${`/https://hoidap247.vercel.app/cauhoi/${page._id}`}</loc>
                        <lastmod>${page.createdAt}</lastmod>

                    </url>
                `;
          })
          .join("")}
    </urlset>
    `;

class Sitemap extends React.Component {
  static async getInitialProps({ res }) {
    let request;
    try {
      request  = await axios({
       method: 'get',
       url: URL,
     });
   
   } catch (err) {
     throw err;
   }
    const posts = request.data.posts
    res.setHeader("Content-Type", "text/xml");
    res.write(createSitemap(posts));
    res.end();
  }
}

export default Sitemap;
