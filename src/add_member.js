import React from 'react';
import 'antd/dist/antd.css';
import  gql  from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { Form , Input, Button } from 'antd';

const ADD_MEMBER = gql`
 mutation($username: String, $password: String) {
  add_name(username: $username, password: $password) {
    username
    password
  }
}
`;
export const MembersADD = () =>{
    const [username, set_name] = React.useState('');
    const [password, set_password] = React.useState('');
    const [ add_name ] = useMutation(ADD_MEMBER,{
            variables: {username: username, password: password}
    } );
    
        return  <Form style={{display:"inline-block",padding: 10,margin:"100px auto 20px",border:"1px solid #ccc"}}>
           <Input value = {username}
            allowClear
            type="text"
            style={{width:150}}           
            placeholder="My name"
            onChange={(e)=>set_name(e.target.value)}
           />
         
           <Input value = {password}
            allowClear
            type="password"
            style={{width:150,margin:"0 10px"}}               
            placeholder="My password"
            onChange={(e)=>set_password(e.target.value)}
           />
           <Button onClick={()=>add_name()} type="primary" style={{width:150}} >
               add
           </Button>  
         </Form>     
              
   
   
};