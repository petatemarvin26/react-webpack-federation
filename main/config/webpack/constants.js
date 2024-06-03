const path = require("path");

const PORT = 3000;
const HOST = "localhost";

const ROOT_DIR = path.resolve(__dirname, "../..");

const TS_FILE = /\.(ts|tsx)$/;
const JS_FILE = /\.(js|jsx)$/;
const SRC_FILE = [TS_FILE, JS_FILE];

const CSS_FILE = /\.(css)$/;
const SCSS_FILE = /\.(scss)$/;
const STYLE_FILE = [CSS_FILE, SCSS_FILE];

module.exports = {
  PORT,
  HOST,
  ROOT_DIR,
  SRC_FILE,
  STYLE_FILE,
};
