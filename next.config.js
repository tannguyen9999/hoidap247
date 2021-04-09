const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
const withImages = require('next-images');
const isProd = process.env.NODE_ENV === 'production'

  
module.exports = withPlugins([
  [
    optimizedImages,
    
    
    {
      /* config for next-optimized-images */
    
      withImages,
      env: {
        api: 'https://hocgioi.herokuapp.com/api',
      },

      
    },
    
  ]

  // your other plugins here
]);
