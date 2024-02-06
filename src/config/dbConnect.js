import mongoose from "mongoose";

mongoose.connect("mongodb+srv://miguelp7silva:1234@miguelcluster.eqbhcwe.mongodb.net/mg-node");
let db = mongoose.connection;

export default db;