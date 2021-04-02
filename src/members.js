import React from 'react';
import 'antd/dist/antd.css';
import  gql  from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { Icon } from 'antd';

const GET_MEMBER = gql`
query {
  read_name {
    _id
    username
    password
  }
}
`;
export const MembersView = () =>{
    const { loading, error, data } = useQuery(GET_MEMBER,
      {fetchPolicy : "network-only"}
    );

    if ( loading ) return <Icon type="loading"  style={{margin: "100px auto" }}/>
    if ( error ) return `<p>${error.message}</p>`;

    return <div style={{padding:"200px 300px"}}>
        { data.read_name.map((i,index) => 
        <h3 style={{
          margin:"5px auto",
          border:"1px solid #000",
          padding: 10,
          backgroundColor:"#ddd"
          }}
           key={index}
        >
              <span >name:{i.username};</span>
              <span>password:{i.password}</span>
        </h3>
        )}
        </div>
   
};