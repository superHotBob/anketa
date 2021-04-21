import { Controller, Get, Post,Query,HttpStatus, Param, Req } from '@nestjs/common';

import {AccountService} from './account.service'

@Controller()
export class AccountController { 
    constructor(private AccountService: AccountService) { }
    @Get('account')
    async findAll() {
        const customers = await this.AccountService.findAll();
        return customers;
    }
    @Get('accountread/:name')
    async findOne(@Param('name') name ) {
        const customer = await this.AccountService.findOne(name);        return customer;
    }
    // @Post('account/addnew')
    // async addNew(@Req() request: Request) {
    //     console.log(request.body)
    //     // const customer = await this.AccountService.addOne(params.name,params.family,params.phone,
    //     //     params.gender,params.age,params.email,params.password,params.id);
    //     // return customer;
    // }
    @Get('account/add')
    async add() {        
        return `
        <html>
        <body>
        <head>
        <style>
        input{
            width: 100%;
            margin: 10px 0;
            padding: 5px 10px;
            font-size: 20px;
        }
        </style>

        </head>
        <form action="/account/addnew" style="width:30vw;margin:20vh auto" method="POST">
        <p>add customer</p>
            <input type="text" name="name" placeholder="name"/>
            <input type="text" name="family" style="margin:20px 0" placeholder="family"/>
            <input type="text" name="phone" placeholder="phone"/>
            <input type="text" name="gender" placeholder="gender"/>
            <input type="text" name="password" placeholder="password"/>
            <input type="text" name="email" placeholder="email"/>
            <input type="text" name="age" placeholder="age"/>
            <input type="text" name="id" placeholder="_id"/>
            <input type="submit" value="send" style="width:100%;margin:20px 0"/>
        </form>
        </body>
        </html>
        
        `;
    }

}