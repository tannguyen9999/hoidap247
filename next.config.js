const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
const withImages = require('next-images');
const sitemap = require("./scripts/generate-sitemap");

  
module.exports = withPlugins([
  [
    optimizedImages,
    
    {
      /* config for next-optimized-images */
      sitemap,
      withImages,
      env: {
        api: 'https://hocgioi.herokuapp.com/api',
      },

      
    },
    
  ]

  // your other plugins here
]);
