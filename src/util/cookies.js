import cookie from 'js-cookie';

export const setCookie = (key, value) => {
    if (process.browser) {
      cookie.set(key, value, {
        expires: 365,
        path: '/',
      });
    }
  };
  
  export const removeCookie = (key) => {
    if (process.browser) {
      cookie.remove(key, {
        expires: 1,
      });
    }
  };
export const getCookieFromBrowser = (key) => {
    return cookie.get(key);
  };
  