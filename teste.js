var nfephp = require('./index'),
    fs = require('fs'),
    caminhoParaXml = process.argv[2],
    xml = fs.readFileSync(caminhoParaXml).toString();

nfephp.gerarDanfe(xml, {
    creditos: 'Brasil.js e NFePHP'
}, function(err, danfe) {
    if(err) {
        throw err;
    }

    var caminhoParaPdf = caminhoParaXml.replace('.xml', '.pdf');

    fs.writeFileSync(caminhoParaPdf, danfe, {
        encoding: 'binary'
    });
});
