var spawn = require('child_process').spawn;

function gerarDanfe(xml, opcoes, callback) {
    if(typeof opcoes === 'function') {
        callback = opcoes;
        opcoes = {};
    }

    var danfe = spawn('php', [
        'danfe.php',
        opcoes.creditos || ''
    ], {
        cwd: __dirname
    });

    xml = xml.replace(/\n/g, '');
    danfe.stdin.setEncoding = 'utf-8';
    danfe.stdin.write(xml + '\n');

    var pdf = [];
    danfe.stdout.on('data', function(bytes) {
        pdf.push(bytes);
    });

    danfe.on('close', function(code) {
        if(code !== 0) {
            return callback(new Error('Erro gerando DANFE com nfephp: ' + code));
        }

        callback(null, Buffer.concat(pdf));
    });
}

module.exports.gerarDanfe = gerarDanfe;
