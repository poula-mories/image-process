import { Request, Response } from 'express';
import fs from 'fs';
import resizing from './imageResize';
import imageSize from 'image-size';
import path from 'path';
import validateInputes from './testInputs';

const port = 3000;

const routes = (req: Request, res: Response): void => {
  const fileName: string = req.query.fname as string;
  const imgWidth = req.query.width as unknown as number;
  const imgHeight = req.query.height as unknown as number;

  const imgHeightNum: number = +imgHeight;
  const imgWidthNum: number = +imgWidth;

  let inputPath = `/images/${fileName}` as string;
  inputPath = path.join(__dirname, '../', inputPath);

  let outPath =
    `/cashe_images/${imgWidthNum}_${imgHeightNum}_${fileName}` as string;
  outPath = path.join(__dirname, '../', outPath);


  

if(validateInputes(inputPath,imgHeightNum,imgWidthNum))
{
  res.send('invalid paramaters');
}

 else if (fs.existsSync(outPath)) {
    try {
      const dimensions = imageSize(outPath);
      if (
        dimensions.height == imgHeightNum &&
        dimensions.width == imgWidthNum
      ) {
        res.send(
          `<img src=http://localhost:${port}/cashe_images/${imgWidthNum}_${imgHeightNum}_${fileName}>`
        );
      }
    } catch (err) {
      console.log(err);
    }
    res.send(
      `<img src=http://localhost:${port}/cashe_images/${imgWidthNum}_${imgHeightNum}_${fileName}>`
    );
  } else if (fs.existsSync(inputPath)) {
    // input stream
  
    // input stream transformer
    // "info" event will be emitted on resize
    // const transform = sharp().resize({
    //   width: imgWidthNum ,
    //   height: imgHeightNum,
    // });

    if(resizing(inputPath,outPath,imgWidthNum,imgHeightNum,fileName))
    {
      setTimeout(function(){
        res.send(
          `<img src=http://localhost:${port}/cashe_images/${imgWidthNum}_${imgHeightNum}_${fileName}>`
        );  
      },1000);
    }
    else
    {
      res.send(
        `something error`
      );
    }





  } else {
    res.send('error not found!!');
  }
};


export default routes;
