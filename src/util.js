const { promisify } = require("util");
const crypto = require("crypto");

const randBytes = promisify(crypto.randomBytes);

const FORWARD_SLASH = /\//g;
const UNDERSCORE = "_";
const PLUS = /\+/g;
const HYPHEN = "-";
const EQUALS = /=/g;
const NOTHING = "";

function randomString(size, encoding = "hex") {
  return randBytes(size).then(buf => buf.toString(encoding));
}

function urlSafeRandomString(size) {
  return randomString(size, "base64").then(str => {
    return str
      .replace(FORWARD_SLASH, UNDERSCORE)
      .replace(PLUS, HYPHEN)
      .replace(EQUALS, NOTHING);
  });
}

module.exports = {
  randomString,
  urlSafeRandomString,
  generateExternalId: () => urlSafeRandomString(12)
};
