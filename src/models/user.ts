import mongoose, {Schema, Document, Mongoose} from "mongoose"

export interface Message extends Document{
    content: string,
    createdAt: Date
}


export interface User extends Document{
    username: string,
    email: string,
    password: string,
    verifyCode: string,
    verifyCodeExpiry: Date,
    isVerified: boolean,
    isAcceptingMessage: boolean,
    message: Message[]    

}


const  MessageSchema: Schema<Message> = new Schema({
    content: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date ,
        required: true,
        default: Date.now
    }
}) 


const  UserSchema: Schema<User> = new Schema({
    username: {
        type: String,
        required: [true, "username is required"],
        unique: true,
        trim: true
    },

    email: {
        type: String ,
        required: true,
        unique: true,
        match: [
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            'Please enter a valid email address'
          ],
        password: {
            type: String ,
        required: true,
        },
        verifyCode: {
            type: String ,
            required: true,
        },
        verifyCodeExpiry: {
            type: Date,
            required: true,

        },
        isVerified: {
            type: Boolean,
            default: false,
        },
        isAcceptingMessage: {
            type: String,
            default: true,

        },
        message: [MessageSchema],

    }
}) 

const UserModel = (mongoose.models.User as mongoose.Model<User>) ||  mongoose.model<User>("User", UserSchema);

export default  UserModel;
 
