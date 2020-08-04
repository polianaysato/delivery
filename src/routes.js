const express = require('express');
const routes = express.Router();
const CoreController = require('../controllers/CoreController');
const UserView = require('../Views/UserView');

//CORE ROUTES
routes.get("/", CoreController.home);

//USER ROUTES
routes.post("/usuario", UserView.get_user);
routes.post("/usuario/cadastrar", UserView.create_user);
routes.post("/usuario/atualizar", UserView.update_user);
routes.post("/usuario/remover", UserView.remove_user);
routes.get("/usuario/produto", UserView.get_purchase_list);
routes.post("/usuario/produto/cadastrar", UserView.create_purchase_list);
routes.post("/usuario/produto/atualizar", UserView.update_purchase_list);
routes.post("/usuario/produto/remover", UserView.remove_purchase_list);


//MARKET ROUTES


module.exports = routes;

