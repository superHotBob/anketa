import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Accounts } from './interface';

@Injectable()
export class AccountService {
    constructor(@InjectModel('Accounts') private readonly AccountsModel: Model<Accounts>) { }
    async findAll(): Promise<Accounts[]> {
        const account = await this.AccountsModel.find().exec();
        return account;
    }
    async addOne(a:string,b:string,c:string,d:string,e:string,f:string,h:string,p:string) {
        let user = {name:a,family:b,phone:c,gender:d,password:e,email:'rrr@tut.by',age:'100',_id: '1455654665'}
        const account = await this.AccountsModel.create(user, function (err, user) {
            if (err) return console.log(err);
            return 'Account created'
        })
        return account;
        
    }
    async findOne(a:string) {
        const account = await this.AccountsModel.findOne({name: a}).exec();
      
        return account ?`
        <!DOCTYPE html>
        <html>
        <head>
        <style>
            span {
            background-color: tomato;
            color: white;
            display: inline-block;
            border: 2px solid black;
            margin: 20px;
            padding: 20px;
            }
        </style>
        </head>
        <body text-align="center">
         <p>
            <span>name:${account.name}</span>
            <span>family:${account.family}</span>
            <span>email:${account.email}</span>
        </p>
        </body>
        </html>
        `
        :
        'Name is none';
    }
}    