// Utilização:
// node teste danfe /caminho/para/arquivo-nfe.xml
// node teste dacce /caminho/para/arquivo-cce.xml

var nfephp = require('./index'),
    fs = require('fs'),
    tipo = process.argv[2],
    caminhoParaXml = process.argv[3],
    xml = fs.readFileSync(caminhoParaXml).toString();

tipo === 'danfe' && nfephp.gerarDanfe(xml, {
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

tipo === 'cce' && nfephp.gerarDacce(xml, {
    creditos: 'Brasil.js e NFePHP',
    razaoSocial: 'Gammasoft',
    logradouro: 'Rua dos Testes',
    numero: '333',
    complemento: 'Torre B',
    bairro: 'Bairro da Integração Contínua',
    cep: '72000000',
    municipio: 'Brasília',
    uf: 'DF',
    telefone: '6111223344',
    email: 'contato@gammasoft.com.br',
    registroNacional: '08942348821'
}, function(err, danfe) {
    if(err) {
        throw err;
    }

    var caminhoParaPdf = caminhoParaXml.replace('.xml', '.pdf');

    fs.writeFileSync(caminhoParaPdf, danfe, {
        encoding: 'binary'
    });
});
