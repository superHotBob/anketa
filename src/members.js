import React from 'react';

import 'antd/dist/antd.css';
import  gql  from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const GET_MEMBER = gql`
query {
  read_name {
    username
    password
  }
}
`;
export const MembersView = () =>{
    const { loading, error, data } = useQuery(GET_MEMBER);
    if ( loading ) return <p>loading</p>;
    if ( error ) return `<p>${error.message}</p>`;

    return <>
        { data.read_name.map((i,index) => 
        <h3 style={{width:300,margin:"10px auto",border:"1px solid #000",padding: 10}} key={index}>
              <span >name:{i.username},</span>
              <span>password:{i.password}</span>
        </h3>
        )}
        </>
   
};