import fs from 'fs';

const validateInputes=(inputPath:string,imgHeightNum:number,imgWidthNum:number) :boolean=>
{
  if(imgHeightNum<1 || imgWidthNum<1 || !fs.existsSync(inputPath))
  {
    return true;
  }
  else if(isNaN (imgHeightNum)  ||isNaN(imgWidthNum))
  {
    return true
  }
  else
  return false;
}
export default validateInputes;