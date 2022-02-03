function decCookieJson(cookie) {
    return JSON.parse(require("./cryptz.js").baseDATOS.decode(cookie));
}

module.exports = {
    decJson: decCookieJson,
}