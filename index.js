exports.name = 'php';
exports.inputFormats = ['php'];
exports.outputFormat = 'php';
exports.render = function (text='', options={}) {
  let rtext = "";
  if(options.minify){
    rtext = `<?php ${text.replace(/\s+/g, '')} ?>`;
  }else{
    rtext = `\n<?php\n${text}\n?>\n`;
  }
  return rtext;
};
