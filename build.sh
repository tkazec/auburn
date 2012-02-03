#!/bin/bash
# $ bash build.sh containerdir

SRCDIR="$( cd "$( dirname "$0" )" && pwd )"
OUTDIR="$1/auburn"
OUTZIP="$OUTDIR.zip"

rm -rf $OUTDIR $OUTZIP
cp -R $SRCDIR $OUTDIR
cd $OUTDIR

rm build.sh
rm -rf .git

echo "<style>`cat css/html5-reset.css css/tab.css | yuicompressor --type css`</style>" > css/tab.css
sed -i '' -e '/<link/d' -e '/<\/title>/r css/tab.css' tab.html
rm css/tab.css

find . -path '*/.*' -prune -o -type f -print | zip $OUTZIP -@