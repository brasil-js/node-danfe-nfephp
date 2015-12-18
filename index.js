var spawn = require('child_process').spawn;

function executarPhp(arquivo, xml, parametros, callback) {
    if(typeof parametros === 'function') {
        callback = parametros;
        parametros = [];
    }

    var php = spawn('php', [
        arquivo + '.php'
    ].concat(parametros), {
        cwd: __dirname
    });

    xml = xml.replace(/\n/g, '');
    php.stdin.setEncoding = 'utf-8';
    php.stdin.write(xml + '\n');

    var pdf = [];
    php.stdout.on('data', function(bytes) {
        pdf.push(bytes);
    });

    php.on('close', function(code) {
        if(code !== 0) {
            return callback(new Error('Erro ao executar nfephp: ' + code));
        }

        callback(null, Buffer.concat(pdf));
    });
}

function gerarDacce(xml, parametros, callback) {
    executarPhp('dacce', xml, [
        parametros.creditos,
        parametros.razaoSocial || '',
        parametros.logradouro || '',
        parametros.numero || '',
        parametros.complemento || '',
        parametros.bairro || '',
        parametros.cep || '',
        parametros.municipio || '',
        parametros.uf || '',
        parametros.telefone || '',
        parametros.email || '',
        parametros.registroNacional && parametros.registroNacional.length === 11 ? parametros.registroNacional : '',
        parametros.registroNacional && parametros.registroNacional.length === 14 ? parametros.registroNacional : ''
    ], callback);
}

module.exports.gerarDacce = gerarDacce;

function gerarDanfe(xml, parametros, callback) {
    executarPhp('danfe', xml, [
        parametros.creditos
    ], callback);
}

module.exports.gerarDanfe = gerarDanfe;
