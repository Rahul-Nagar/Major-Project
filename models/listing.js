const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema ({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        type: String,
        default: 
        "",
        set: (v) => 
        v === "https://housing.com/news/wp-content/uploads/2023/01/Oak-tree-How-to-grow-and-maintain-Quercus-velutina.jpg" 
        ? "https://housing.com/news/wp-content/uploads/2023/01/Oak-tree-How-to-grow-and-maintain-Quercus-velutina.jpg"
         : v,
    },
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;