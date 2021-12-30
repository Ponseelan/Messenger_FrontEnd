export class CookieUtils {
  constructor() {}
  static setCookie(key: any, content: any) {
    let d: Date = new Date();
    d.setTime(d.getTime() + 1 * 24 * 60 * 60 * 1000);
    let expires: string = `expires=${d.toUTCString()}`;
    // let cpath: string = path ? `; path=${path}` : '';
    document.cookie = `${key}=${content}; ${expires}`;
  }
  static getCookie(key: any) {
    let ca: Array<string> = document.cookie.split(';');
    let caLen: number = ca.length;

    let c: string;

    for (let i: number = 0; i < caLen; i += 1) {
      let parsedValue = ca[i].split('=');
      return parsedValue[1];
    }
    return '';
  }
}
