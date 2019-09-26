import React from 'react';

import 'antd/dist/antd.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { MembersView } from './members';
import { MembersADD } from './add_member';
import { Button } from 'antd/lib/radio';

const client = new ApolloClient({
  uri: "http://localhost:5000/",
 
  fetchOptions: {
    mode: 'no-cors',
  },
});

const App = () => {
 const [view, set_view] = React.useState(false);
  return (
    <ApolloProvider client={client}>
      <div style={{textAlign:"center"}}>
      {view ? <MembersView /> : <MembersADD />}<br/>
      <Button onClick={()=>set_view(!view)}>{!view? 'View members':'Add member'}</Button>
      </div>
    </ApolloProvider>
  );
}

export default App;
