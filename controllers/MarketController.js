module.exports = {

	async create_market(req, res){
		//TODO
		return res.json({"market_id":1})
	},

	async update_market(req, res){
		//TODO
		return res.json({"market_id":1, "status":"updated"})
	},

	async remove_market(req, res){
		//TODO
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
	},

	async get_product(req, res){
		//TODO
		return res.json({"status":"success"})
	},

	async create_product(req, res){
		//TODO
		return res.json({"status":"success"})
	},

	async update_product(req, res){
		//TODO
		return res.json({"status":"success"})
	},

	async remove_products(req, res){
		//TODO
		return res.json({"status":"success"})
	},
}