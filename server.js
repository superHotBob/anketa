const express = require('express');
const app = express();
const {  Client } = require('pg');
const cors = require('cors');
const { ApolloServer, gql} = require('apollo-server-express');
const port = process.env.PORT || 5000;

 const client = new Client ({
   user: "postgres",
   database: "postgres",
   password: "postgres",
   host: "localhost",
   port: "5432"
 });

// const client = new Client ({
//   user: "kwtuuqslgfoqsl",
//   database: "d51td551srl8i0",
//   password: "8b4bfe1710476ba86e04de5813dccd2982845ddc4c5086c9dc688d6e35100f70",
//   host: "ec2-176-34-237-141.eu-west-1.compute.amazonaws.com",
//   port: "5432"
// });
 client.connect(err=>{
   if (err) {
     console.error('connection error', err.stack)
   } else {
     console.log('connected')
   }
 });




//client.query(`CREATE TABLE account(
//  user_id serial PRIMARY KEY,
//  username VARCHAR (50) UNIQUE NOT NULL,
//  password VARCHAR (50) UNIQUE NOT NULL
//  )`,(err,res)=>{
//  console.log('Table account created')
//  client.end()
//});
const text = 'INSERT INTO account(username, password) VALUES ($1, $2)';

async function add_member (a,b) {
  const value = [`${a}`,`${b}`];
   await client.query(text,value);
  
  console.log(`name ${a} add`);
    
}; 

async function read_members(){
 const res = await client.query('SELECT username, password FROM account');
    console.log(res);
  return res.rows;
};


const schema = gql`
  type Query {
    read_name: [Name]
  }
  type Mutation {
    add_name(username: String, password: String): [Name]
  }
  type Name{
    username: String,
    password: String
  }
`;
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true
}

const resolvers = {
    Query: {
      read_name: () => {
         return read_members()
      },
    },
    Mutation: {
      add_name:(_,{ username,password },info) => {
        return add_member(username, password)
      },
    },
};

const server = new ApolloServer({
  typeDefs:schema,  
  resolvers,
  playground: {
    endpoint: '/graphql',
    settings: {
      "editor.theme":"light"
    }
  },
});
app.use(cors());
server.applyMiddleware({ app, path:'/', cors: corsOptions, });

app.listen(port, () => console.log(`Apollo Server on  http://localhost:${port}/graphQL`));