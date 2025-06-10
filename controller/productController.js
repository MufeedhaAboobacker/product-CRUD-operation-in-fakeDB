import products from "../data/fakeDb.js";

// list product
export const listProducts =(req,res) =>{
    res.json(products)
 }

// add product
export const addProduct=(req,res) =>{
    const {name,price}=req.body;
    const len=products[products.length-1]
    const newProduct={
        id:len.id+1,
        name,
        price,
    };
    products.push(newProduct);
    res.status(201).json(newProduct);

}

// get product bu id

export const getProductById=(req,res)=>{
    const product=products.find ((p)=>p.id===parseInt(req.params.id));

    if (!product) {
        return res.status(404).json({message:"product not found"});
    } else {
        res.json(product);
    }
};

// update product
export const updateProduct=(req,res)=>{
    const product = products.find(p=>p.id==req.params.id);

    if(!product) {
        return res.status(404).json({message:"product not found"});
    } else {
        const{name,price}=req.body;
    
        if(name) product.name=name;
        if (price) product.price=price;
    
        res.json(product);
    }
};

// delete product
export const deleteProduct = (req,res)=>{
    const id = parseInt(req.params.id)
    const index = products.findIndex(p=>p.id===id)

    if (index===-1){
        return res.status(404).json({message:"product not found"})
    } else {
        products.splice(index,1);
        res.json({message: "product deleted"})
    }

}