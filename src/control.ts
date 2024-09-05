import { Request, Response } from 'express';

const helloController = (req: Request, res: Response): void => {
  res.send('grateeeeeeeeeeeeeee');
};

export default helloController;
