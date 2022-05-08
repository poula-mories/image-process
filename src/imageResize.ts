import sharp from "sharp";
import fs from 'fs';
import {  Response } from 'express';

const port =3000;
const resizing=(inputPath:string, outPath:string,imgWidthNum:number,imgHeightNum:number,fileName: string):boolean=>{

    const inStream = fs.createReadStream(inputPath);

// output stream
const outStream = fs.createWriteStream(outPath, { flags: 'w' });

// on success of output file being saved
outStream.on('close', function () {
    return true
});

outStream.on('error', function (err) {
  console.log(err);
  return false
});

const transform= sharp().resize({
    width: imgWidthNum,
    height: imgHeightNum,
  });
  
  inStream.pipe(transform).pipe(outStream);
return true
}

  export default resizing;