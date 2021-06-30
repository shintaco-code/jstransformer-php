exports.name = 'php';
exports.inputFormats = ['php'];
exports.outputFormat = 'php';
exports.render = function (text='', options={}) {
  let rtext = "";
  if(options.minify){
    rtext = `${text.replace(/\/\/ .+/g, '')}`;
    rtext = `${rtext.replace(/\/\/\- .+/g, '')}`;
    rtext = `${rtext.replace(/(\r\n|\n|\r)/g, '')}`;
    rtext = `${rtext.replace(/ +/g, ' ')}`;
    rtext = `${rtext.replace(/(\, | \,)/g, ',')}`;
    rtext = `<?php ${rtext} ?>`;
  }else{
    rtext = `\n<?php\n${text}\n?>\n`;
  }
  return rtext;
};
