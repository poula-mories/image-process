import { Request, Response } from 'express';

const placeholder = (req: Request, res: Response): void => {
  const Width = req.query.width;
  const Height = req.query.height;
  const BGcolor = req.query.BGcolor;
  res.send(`
      <div style="position:absolute; z-index:1; display:flex; align-items:center; 
      justify-content:center;width: ${Width}px; height: ${Height}px;">
          ${Width} X ${Height}
      </div>
      <svg style="position:relative;" width="${Width}" height="${Height}">
        <rect width="${Width}" height="${Height}" style="fill:${BGcolor};" />
      </svg>`);
};

export default placeholder;
