const User = require('../models/User')
module.exports = {

	async get_user(id){
		
		return true;
	},

	async create_user(name, email, password){
		//TODO
		User.findOne({email:email}).then(user => {
			if(user){
				return {"status":400, "message":"Este email já está cadastrado."}
			}else{
				const user = User.create({name, email, password})
				return user
			}
		})
	},

	async update_user(id, name, email){
		console.log(name)
		console.log(email)
		console.log(id)
		return true;
	},

	async remove_user(id){
		//TODO
		console.log(id)
		return true;
	}
}