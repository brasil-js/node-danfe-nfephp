<?php
date_default_timezone_set('America/Sao_Paulo');

require_once(dirname(__FILE__).'/nfephp/libs/NFe/DacceNFePHP.class.php');

$creditos = $argv[1];
$parametros = array(
    razao => $argv[2],
    logradouro => $argv[3],
    numero => $argv[4],
    complemento => $argv[5],
    bairro => $argv[6],
    CEP => $argv[7],
    municipio => $argv[8],
    UF => $argv[9],
    telefone => $argv[10],
    email => $argv[11],
    CPFDest => $argv[12],
    CNPJDest => $argv[13]
);

$xml = fgets(STDIN);

$danfe = new DacceNFePHP($xml, 'P', 'A4', '', 'I', $parametros, $creditos);
$danfe->monta('P', 'A4', 'C');
$pdf = $danfe->printDACCE();
fwrite(STDOUT, $pdf);
?>
