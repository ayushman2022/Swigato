import userModel from "../models/userModel.js";


// add item to the cart
const addToCart = async (req, res) => {
  try {
    let userData = await userModel.findById(req.body.userId);
    let cartData = await userData.cartData; 
    if (!cartData[req.body.itemId]) {
      cartData[req.body.itemId] = 1; 
    } else {
      cartData[req.body.itemId] += 1; 
    }

    await userModel.findByIdAndUpdate(req.body.userId, {cartData});
    res.json({ success: true, message: "Added to Cart" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error adding to cart" });
  }
};

// remove item from cart
const removeFromCart = async (req, res) => {
  try {
    let userData = await userModel.findById(req.body.userId);
    let cartData = await userData.cartData; 

    if (cartData[req.body.itemId] > 0) {
      cartData[req.body.itemId] -= 1; 
      // if (cartData[req.body.itemId] === 0) {
      //   delete cartData[req.body.itemId]; 
      // }
    }

    await userModel.findByIdAndUpdate(req.body.userId, { cartData});
    res.json({ success: true, message: "Removed from Cart" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error removing from cart" });
  }
};


//fetch data
const getCart = async (req, res) => {
  try {
    let userData = await userModel.findById(req.body.userId);
    let cartData = await userData.cartData; 
    res.json({ success: true, cartData });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error fetching cart data" });
  }
};

export { addToCart, removeFromCart, getCart };