#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const dir = process.argv[2];

if (!dir)
  return printError(
    "please enter project name, run: create-p5-boilerplate [project-name]"
  );

if (fs.existsSync(dir))
  return printError("directory exists, please choose another name");

fs.mkdirSync(dir);

fs.copyFile(
  path.join(__dirname, "template/index.html"),
  `${dir}/index.html`,
  (error) => {
    if (error) printError("error copying index.html: " + error);
  }
);
fs.copyFile(
  path.join(__dirname, "template/sketch.js"),
  `${dir}/sketch.js`,
  (error) => {
    if (error) printError("error copying sketch.js: " + error);
  }
);
fs.copyFile(
  path.join(__dirname, "template/style.css"),
  `${dir}/style.css`,
  (error) => {
    if (error) printError("error copying style.css: " + error);
  }
);

const colorError = "\x1b[31m";
const printError = (message) => console.error(colorError, message);
