import  Express  from "express";
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import mainRoutes from './routes/index';

dotenv.config();

const server = Express();

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

server.use(Express.static(path.join(__dirname, '../public')));

//Rotas
server.use(mainRoutes);
//
server.use((req, res)=>{
  res.render('pages/404');
});

server.listen(process.env.PORT);