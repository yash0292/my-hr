import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new Schema({
	name: String,
	email: {
		type: String,
		required: [true, "Enter a valid Email"],
		unique:true
	},
	password: {
		type: String,
		required: [true, "Enter a password"],
	},
	role:{
		type:String,
		required:true,
		default:"employee",
		enum:["employee", "admin"]
	}
},{
	timestamps:true
});

mongoose.models ={} 
export default mongoose.models.Users || mongoose.model('Users', UserSchema);