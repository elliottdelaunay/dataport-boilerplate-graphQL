# Introduction 
Boilderplate using graphql-express-server. 

## GraphQL Overview
* New api standards: more powerful, flexible, used with any language and framework
* Alternative of REST
* Declarative data fetching: No more Over - Underfetching
* GraphQL server expose single end point and responde to query
* Helpful to build Insightful Analytics

## GraphQL Core Concept
* Follow Schema defination language : Simple Relation and mapping between schemas can possible
* Using query to fetch the data from server
* CRUD operation 
* Publisher - Subscriber: Realtime updates possible
* Resolver function: with each data field there is associate one resolver function which is responcible for fetching data from underlying architecture (DB/API etc.)

## Steps to Perform when wrapping a REST API with GraphQL:

1. Analyze the data model of the REST API
2. Derive the GraphQL schema for the API based on the data model (Translate each REST endpoint into a corresponding query)
3. Implement resolver functions for the schema

## Code architecture
In this Boilderplate demo, we have implemented GraphQL Server using graphql-express-server. 
1. server.js: All the server related redirection and configurations e.g. PORT, GraphQL server url etc.
2. schema.js: GraphQL schema
3. resolver.js: GraphQL resolver to resolve query, mutations, subscriptions, custom types etc.
4. REST>server.py: Simple python REST API for demo purpose
    
[Note]: We have used the server.py and database.db files for boilderplate demo purpose only, This may be replace by actule REST API endpoint in the resolver.js

# Getting Started
1. Clone the repo

2.	Installation process
    
    Open teminal and install node dependencies using below command:
    ```bash
    npm install
    ```

    For REST installation:
    ```bash
    cd REST && pip install -r requirement.txt
    ```

# Build and Test
1. To Build and Intialize the Dataport, Run the command from root of repo
    ```bash
    npm start
    ```
    Above command will start the GraphQL server on 4000 PORT

2. To Build and Intialize the REST APIs
    ```bash
    cd REST && python server.py
    ```

    * REST ENDPOINTS exposed by python:

        All the products list: http://localhost:5000/products

        Products by category: http://localhost:5000/categories

        Products by perticular category: http://localhost:5000/category/1


3. To query to another dataport, Open browser and hit below url:
    ```bash
    http://localhost:4000/graphiql/
    ```
# Contribute
