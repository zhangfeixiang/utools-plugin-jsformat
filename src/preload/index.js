import path from 'path';
import fs from 'fs';
import * as utils from './utils';

window.fs = fs;
window.utils = utils;
window.path = path;
window.tempPath = path.join(utools.getPath('temp'), 'utools.jsformat');

utools.onPluginEnter(({ code, type, payload }) => {
  fs.existsSync(window.tempPath) || fs.mkdirSync(window.tempPath);
  console.log('用户进入插件', code, type, payload);
  if (type === 'text') {
    window.zfx && window.zfx && window.zfx.setInput('', null, payload);
  }
});
