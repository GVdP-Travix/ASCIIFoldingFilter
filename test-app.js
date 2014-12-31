var aff=require("./ASCIIFoldingFilter.js"),
    fs=require('fs'),
    util=require('util'),
    stream=require('stream');

var rs=fs.createReadStream('./test.txt', {encoding:'utf8'} );
var ws=fs.createWriteStream('./out.txt', {encoding:'utf8'} );
var ts=new aff.ASCIIFoldingFilterStream({encoding:'utf8', decodeStrings: false});

rs.on('error', function(err) {
  console.warn(err);
} );

ws.on('error', function(err) {
  console.warn(err);
} );

ts.on('error', function(err) {
  console.warn(err);
} );

rs.pipe(ts).pipe(ws);
