import express, { Express, Request, Response, NextFunction} from 'express';
// import sequelize from './models';
 
const app: Express = express();
const port = 5000;
 
app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('Typescript + Node.js + Express Server');
});
 
app.listen(port, async() => {
  console.log(`[server]: Server is running at <https://localhost>:${port}`);
  // await sequelize.authenticate()
  // .then(async () => {
  //   console.log('connection success');
  // })
  // .catch((e: any)=> {
  //   console.log(e);
  // })
});

