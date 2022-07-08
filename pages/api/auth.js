import connectDB from "../../utils/connectdDB";
import Users from "../../models/userModel";
// var CryptoJS = require("crypto-js");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

connectDB();

const handler = async (req, res) => {
	const { method } = req;
	const { name, email, password } = req.body;
	if(!name || !email || !password){
		return res.status(422).json({error:"Fields are required"})
	}

	switch (method) {
		case "POST":
			let user = await Users.findOne({email})
			try {
				if(user){
					res.status(400).json({errors: [{msg: 'User already exists'}]});
				}
				user = new Users({
					name,
					email,
					password
				})
	
				const salt = await bcrypt.genSalt(10);
				user.password = await bcrypt.hash(password, salt);
				await user.save();
	
				const payload = {
					user:{
						id: user.id
					}
				};
	
				jwt.sign(
					payload,
					process.env.JWT_SECRET,
					{expiresIn : '1d'},
					(err, token)=>{
						if(err) throw err;
						console.log('token', token)
						res.json({token});
					}
				)
			} catch (error) {
				console.error(error);
				res.status(500).send("server error");
			}
			// let user = new Users({
			// 	name,
			// 	email,
			// 	password: CryptoJS.AES.encrypt(
			// 		req.body.password,
			// 		"Secret123"
			// 	).toString(),
			// });
			// try {
			// 	await user.save();
			// 	res.status(200).json({
            //          success: "success",
            //          message:"User Added Successfully" 
            //         });
			// } catch {
			// 	res.status(400).json({ error: "Not Allowed" });
			// }
			break;
	}
};

export default connectDB(handler);
