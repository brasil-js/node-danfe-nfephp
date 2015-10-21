<?php
date_default_timezone_set('America/Sao_Paulo');

require_once(dirname(__FILE__).'/nfephp/libs/NFe/DanfeNFePHP.class.php');

$creditos = $argv[1];
$xml = fgets(STDIN);

$danfe = new DanfeNFePHP($xml, 'P', 'A4', '', 'I', '');
$danfe->montaDANFE('', 'A4', 'C', 0, false, '', $creditos);
$pdf = $danfe->printDANFE();
fwrite(STDOUT, $pdf);
?>
