import connectDB from "../../utils/connectdDB";
import Users from "../../models/userModel";
// var CryptoJS = require("crypto-js");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

connectDB();

const handler = async (req, res) => {
	const { method } = req;
	const {email, password } = req.body;
	if(!email || !password){
		return res.status(422).json({error:"Fields are required"})
	}

	switch (method) {
		case "POST":
			try {
				let user= await Users.findOne({email});
				if(!user){
					res.status(401).json({errors:[{msg:'Invalid credentials'}]})
				}
				//match password
				const isMatch = await bcrypt.compare(password, user.password);
				if(!isMatch){
					res.status(401).json({errors:[{msg:'Invalid username or password, please try again!...'}]})
				}
				const payload = {
					user:{
						id: user._id
					}
				};

				jwt.sign(
					payload,
					process.env.JWT_SECRET,
					{expiresIn: "1d"},
					(err,token)=>{
						if(err) throw err;
						res.status(200).json({token})
					}
				)
			} catch(error) {
				console.error(error);
				res.status(500).send("server error");
			}
	}
};

export default connectDB(handler);
