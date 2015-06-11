var spawn = require('child_process').spawn;

function gerarDanfe(xml, callback) {
    var danfe = spawn('php', [
        'danfe.php'
    ], {
        cwd: __dirname,
    });

    danfe.stdin.setEncoding = 'utf-8';
    danfe.stdin.write(xml + '\n');

    var pdf = [];
    danfe.stdout.on('data', function(bytes) {
        pdf.push(bytes);
    });

    danfe.on('close', function(exitCode) {
        if(exitCode !== 0) {
            return callback(new Error('Erro gerando DANFE com nfephp'));
        }

        callback(null, Buffer.concat(pdf));
    });
}

module.exports.gerarDanfe = gerarDanfe;
