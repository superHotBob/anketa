import React from 'react';
import 'antd/dist/antd.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { MembersView } from './members';
import { MembersADD } from './add_member';
import { Button } from 'antd';
import { Helmet } from 'react-helmet';


const uri = "https://graphql1909.herokuapp.com/";
//const uri= "http://localhost:5001";
const client = new ApolloClient({
  uri, 
  fetchOptions: {
    mode: 'cors',
  },
});

const App = () => {
 const [view, set_view] = React.useState(false);
  return (
    <ApolloProvider client={client}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My site</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div 
        style={{textAlign:"center", height: 800,
        background:"url(https://localhost:3003/image/one.jpg) center/100% no-repeat"
        }}
      >
      {view ? <MembersView /> : <MembersADD />}<br/>
      <Button onClick={()=>set_view(!view)}  type="primary" style={{width:300}}>
        {!view? 'View members':'Add member'}
      </Button>
      </div>
    </ApolloProvider>
  );
}

export default App;
