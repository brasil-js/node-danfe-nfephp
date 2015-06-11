#!/bin/sh

set -e;
set -u;
trap "[ -f nfephp.zip ] && rm nfephp.zip;" INT;

[ -f nfephp.zip ] && rm nfephp.zip;
[ -d nfephp ] && sudo rm -r nfephp;
curl -o nfephp.zip https://s3-sa-east-1.amazonaws.com/gammasoft/nfephp-$1.zip;
unzip nfephp.zip -d ./nfephp;
[ -f nfephp.zip ] && rm nfephp.zip;
