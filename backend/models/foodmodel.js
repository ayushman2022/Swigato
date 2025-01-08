import mongoose from "mongoose";
import foodRouter from "../routes/foodRoute.js";
import { addFood } from "../controllers/foodController.js";
import multer from "multer";

const foodSchema = new mongoose.Schema({
    name: {type:String,required:true},
    description: {type:String,required:true},
    price: {type:Number,required:true},
    image: {type:String, required:true},
    category: {type:String,required:true}
})

const foodModel = mongoose.models.food || mongoose.model("food",foodSchema)

// Image Storage Engine
// cb - callback
const Storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }

})

const upload = multer({storage:Storage})
// foodRouter.post("/add",upload.single("image"),addFood)



export default foodModel;