import mongoose from "mongoose"


mongoose.connect("mongodb+srv://leonardo:Act2021*@cluster0.zwqjafx.mongodb.net/AluraAPi")

let db = mongoose.connection

export default db