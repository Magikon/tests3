export enum OSTypes {
  ios = 'iOS',
  android = 'Android',
  linux = 'Linux',
  windows = 'Windows',
  other = 'Other'
}

export const detectOS = () => {
  const userAgent = window.navigator.userAgent,
    platform = window.navigator.platform,
    macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
    windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
    iosPlatforms = ['iPhone', 'iPad', 'iPod'];
  let os = OSTypes.other;

  if (macosPlatforms.indexOf(platform) !== -1 || iosPlatforms.indexOf(platform) !== -1) {
    os = OSTypes.ios;
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = OSTypes.windows;
  } else if (/Android/.test(userAgent)) {
    os = OSTypes.android;
  } else if (/Linux/.test(platform)) {
    os = OSTypes.linux;
  }

  return os;
}