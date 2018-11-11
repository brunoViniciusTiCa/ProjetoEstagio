const restify = require('restify');
const errs = require('restify-erros');
const server = restify.createServer({
  name: 'myapp',
  version: '1.0.0'
});
var knex = require('knex')({
  client: 'mysql',
  connection: {
    host : '127.0.0.1',
    user : 'root',
    password : '',
    database : 'Serttel'
  }
});
server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

server.listen(8080, function () {
  console.log('%s listening at %s', server.name, server.url);
});



//Rotas  Rest1

server.get('/',  (req, res, next) => {
    
  knex('login').then((dados) =>{

    res.send(dados);

  }, next) 

});

  
  //Rota Rest2
server.post('/create', (req, res, next) => {
    
    knex('login')
    
      .insert(req.body)
      .then((dados) =>{
         
           res.send(dados);

    }, next) 
});












