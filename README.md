# node-danfe-nfephp
Bindings php para gerar arquivos de DANFE em pdf utilizando a biblioteca nfephp a partir do nodejs.

### Instalação

`npm install node-danfe-nfephp --save`

### Utilização

Para utilizar este módulo você precisa ter o PHP instalado (veja abaixo).

```javascript
var nfephp = require('node-danfe-nfephp'),
    fs = require('fs'),
    xml = fs.readFileSync('arquivoXmlDaNotaFiscl-procNfe.xml').toString();

nfephp.gerarDanfe(xml, function(err, pdf) {
    if(err) {
        throw err;
    }

    fs.writeFileSync('danfe.pdf', pdf, {
        encoding: 'binary'
    });
});
```

### Versão do PHP
Testado com as seguintes versões:
```plain
[ec2-user ~]$ sudo yum list installed | grep "php"
php54.x86_64                          5.4.41-1.69.amzn1            @amzn-updates
php54-cli.x86_64                      5.4.41-1.69.amzn1            @amzn-updates
php54-common.x86_64                   5.4.41-1.69.amzn1            @amzn-updates
php54-process.x86_64                  5.4.41-1.69.amzn1            @amzn-updates
php54-xml.x86_64                      5.4.41-1.69.amzn1            @amzn-updates
```

### Licença

O módulo node.js com os bindings para o nfephp está licenciado sob o termos da licença MIT. A biblioteca nfephp tem suas próprias licenças, que devem ser consultadas no [repósitorio do projeto](https://github.com/nfephp-org/nfephp).
