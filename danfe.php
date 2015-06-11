<?php
date_default_timezone_set('America/Sao_Paulo');

require_once(dirname(__FILE__).'/nfephp/libs/DanfeNFePHP.class.php');

$xml = fgets(STDIN);
$danfe = new DanfeNFePHP($xml, 'P', 'A4', '', 'I', '');
$id = $danfe->montaDANFE();
$pdf = $danfe->printDANFE($id.'.pdf', 'I');
fwrite(STDOUT, $pdf);
?>
