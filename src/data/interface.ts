import { Document } from 'mongoose';
export interface Accounts extends Document {
    readonly name: string;
    readonly family: string;
    readonly email: string;
    readonly phone: string;
    readonly password: string;
    readonly age: string;
    readonly gender: string;
    readonly _id: number;
}