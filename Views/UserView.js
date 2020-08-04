const UserController = require('../controllers/UserController')

module.exports = {

	async get_user(req, res){
		var {id} = req.body;
		UserController.get_user(id)
		return res.json({"id":id})
	},

	async create_user(req, res){

		var {name, email, password} = req.body;
		UserController.create_user(name, email, password);
		return res.json({"user_id":name, "email":email, "password":password})
	},

	async update_user(req, res){
		var {id, name, email} = req.body;
		UserController.update_user(id, name, email);
		return res.json({"user_id":id, "status":"updated"});
	},

	async remove_user(req, res){
		//TODO
		var {id} = req.body;
		UserController.remove_user(id);
		return res.json({"status":"removed", "status_code":200})
	},



	async get_purchase_list(req, res){
		//TODO
		return res.json({"status":"success"})
	},

	async create_purchase_list(req, res){
		//TODO
		return res.json({"market_id":1})
	},

	async update_purchase_list(req, res){
		//TODO
		return res.json({"market_id":1, "status":"success"})
	},

	async remove_purchase_list(req, res){
		//TODO
		return res.json({"status":"removed", "status_code":200})
	}
}