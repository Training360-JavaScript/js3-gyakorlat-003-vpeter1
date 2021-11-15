const setCookie = (string) => {
  const now = new Date();
  now.setTime(now.getTime() + (15 * 60 * 1000));
  const expires = now.toUTCString();
  document.cookie = `token=${string};expires=${expires};path=/;`;
}



const cookieHandler = {
  setCookie(name, value, expirationDays = 365, path = '/') {
    const now = new Date();
    now.setTime(now.getTime() + (expirationDays * 24 * 60 * 60 * 1000));
    const expires = now.toUTCString();
    document.cookie = `${name}=${value};expires=${expires};path=${path};`;
  },
  getCookie(name) {
    const keyValuePairs = document.cookie
      .split('; ')
      .find(cookie => cookie.startsWith(`${name}=`))
    return keyValuePairs ? keyValuePairs.split('=')[1] : '';
  },

  getAll() {
    let cookieString = document.cookie;
    let cookieArray = cookieString.split('; ');
    const cookieObject = {};
    for (let i in cookieArray) {
      const current = cookieArray[i].split('=');
      cookieObject[current[0]] = current[1];
    }
    return cookieObject;
  },

  toSessionStorage() {
    let cookieString = document.cookie;
    let cookieArray = cookieString.split('; ');
    for (let i in cookieArray) {
      const current = cookieArray[i].split('=');
      sessionStorage.setItem(current[0], current[1]);
    }
  },

  checkCookie(name) {
    const exists = cookieHandler.getCookie(name);
    return exists ? true : false;
  },

  deleteCookie(name) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  },

  flush() {
    document.cookie.split(";").forEach(function (c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
  }

}

cookieHandler.setCookie('viewed', '5');
cookieHandler.setCookie('uid', '354774631237');
cookieHandler.setCookie('ssid', 'Bx55OWbHJ0Vt_IGIF');
//cookieHandler.getAll();
//cookieHandler.toSessionStorage();
//cookieHandler.flush();



export { cookieHandler };
