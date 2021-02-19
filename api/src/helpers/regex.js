exports.urlRgx = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/;
// Matches "en-us" or "en-us/"
exports.localeRgx = /\/[a-z][a-z]-[a-z][a-z](|\/)/;
// exports.localeRgx = /[a-z][a-z]-[a-z][a-z]($|\/$)/;
exports.authCreds = /(?:[:\w]+@)/;
