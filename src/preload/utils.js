import jsbeautify from 'js-beautify';
import fs from 'fs'
import path from 'path'

let beutifyOptions = { "indent_size": 4, "html": { "end_with_newline": true, "js": { "indent_size": 2 }, "css": { "indent_size": 2 } }, "css": { "indent_size": 1 }, "js": { "preserve-newlines": true } }

export function beatify(documentContent, options = (beutifyOptions || {})) {
  documentContent = documentContent.replace(/^\s+/, '');
  let beatiFunc;

  switch (documentContent.charAt(0)) {
    case '<':
    case '*':
    case '#':
      beatiFunc = jsbeautify.html
      break;
    case '.':
      beatiFunc = jsbeautify.css
      break;
    default:
      beatiFunc = jsbeautify.js
      break;
  }
  if (!beatiFunc) return;
  return beatiFunc(documentContent, options);
}