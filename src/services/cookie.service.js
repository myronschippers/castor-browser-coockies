// GET a cookie from the browser
const getCookie = (cookieName) => {
  const rawCookie = document.cookie;
  console.log(rawCookie);
  // parses for specific cookie name
  const cookieValue = RegExp(`${cookieName}[^;]+`).exec(rawCookie);
  console.log(cookieValue);
  // gets just the value
  return decodeURIComponent(
    !!cookieValue ? cookieValue.toString().replace(/^[^=]+./, '') : ''
  );
};

// SAVE a cookie to the browser
const setCookie = (cookieName, cookieValue) => {
  console.log('setCookie name: ', cookieName);
  console.log('setCookie value: ', cookieValue);

  document.cookie = `${cookieName}=${cookieValue}`;
};

export { setCookie, getCookie };
