// $ node build.js outdir
"use strict";

/*** setup ***/
require("shelljs/global");

var srcdir = __dirname;
var outdir = process.argv[2];


/*** copy ***/
rm("-rf", outdir);
mkdir("-p", outdir);

cp("-R", srcdir + "/*", outdir);
cd(outdir);


/*** edit ***/
var css = exec("yuicompressor styles/tab.css", { silent: true }).output.replace(/"/g, "\\$&");
sed("-i", /@import.*?;/, css, "scripts/background.js");

exec("cat scripts/tab.js | closure --language_in ECMASCRIPT5 --js_output_file scripts/tab.js");

rm("-rf", ".git", "build.js", "styles/tab.css");


/*** package ***/
exec("find . -path '*/.*' -prune -o -type f -print | zip auburn.zip -@");