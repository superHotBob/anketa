import * as mongoose from 'mongoose';

export const AccountSchema = new mongoose.Schema({
    name: String,
    family: String,
    email: String,
    phone: String,
    password: String,
    age: String,
    gender: String,
    _id: Number
})