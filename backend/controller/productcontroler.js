// import uploadoncloudinary from "../config/cloudinary.js"
// import ProductModel  from "../models/productmodel.js"


// export const addproduct = async (req,res)=>{
//     try{

// let  {name,description,price,category,subcategory,sizes,bestseller} = req.body


// let image1 = await uploadoncloudinary(req.files.image1[0].path)
// let image2 = await uploadoncloudinary(req.files.image2[0].path)
// let image3 = await uploadoncloudinary(req.files.image3[0].path)
// let image4 = await uploadoncloudinary(req.files.image4[0].path)





// let productdata = {
//     name,
//     description,
//     price:Number(price),
//     category,
//     subcategory,
//     sizes:JSON.parse(sizes),
//     bestseller:bestseller === "true" ? true : false,
// date:Date.now(),
//     image1,
//     image2,
//     image3,
//     image4,
// }

// const product = await ProductModel.create(productdata)
// return res.status(201).json(product)


//     }

// catch(error){
// console.log("add product error")
// return res.status(500).json({message:`Add product error ${error.message}`})
// }


// }
import uploadoncloudinary from "../config/cloudinary.js"
import product from "../models/productmodel.js";
import Product from "../models/productmodel.js"

export const addproduct = async (req, res) => {
    console.log("FILES:", req.files);
    try {
        let { name, description, price, category, subcategory, sizes, bestseller } = req.body

        let image1 = await uploadoncloudinary(req.files.image1[0].path) 
        let image2 = await uploadoncloudinary(req.files.image2[0].path) 
        let image3 = await uploadoncloudinary(req.files.image3[0].path) 
        let image4 = await uploadoncloudinary(req.files.image4[0].path) 

        let productdata = {
            name,
            description,
            price: Number(price),
            category,
            subcategory,
            sizes: JSON.parse(sizes),
            bestseller: bestseller === "true" ? true : false,
            date: Date.now(),
            image1,
            image2,
            image3,
            image4,
        }

        const product = await Product.create(productdata)
        return res.status(201).json(product)

    } catch (error) {
        console.error("add product error:", error.message)
        return res.status(500).json({ message: `Add product error ${error.message}` })
    }
}

export const listproduct = async (req,res)=>{
    try{
        const product = await Product.find({});
        return res.status(200).json(product)
    }
    catch(error){
        console.error("list product error:", error.message)
        return res.status(500).json({ message: `List product error ${error.message}` })
    }
}





export const removeproduct = async (req,res)=>{
    try{
let { id } = req.params
const deleteproduct = await product.findByIdAndDelete(id)
return res.status(200).json({message: "Product removed successfully" })



    }

    catch(error){
        console.error("remove product error:", error.message)
        return res.status(500).json({ message: `Remove product error ${error.message}` })
    }
}