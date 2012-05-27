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

echo "<style>`cat styles/html5-reset.css styles/tab.css | yuicompressor --type css`</style>" > styles/tab.css
sed -i '' -e '/<link/d' -e '/<\/title>/r styles/tab.css' tab.html
rm styles/tab.css

find . -path '*/.*' -prune -o -type f -print | zip $OUTZIP -@