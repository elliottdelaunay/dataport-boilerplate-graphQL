const fetch = require('node-fetch');

const baseURL = "REST END POINT"; // Custom REST with same schema output as Shopify REST api output http://localhost:PORT

// Resolvers for each Query, Mutations, Subscription & Custom Datatype
export const resolvers = {
  Query: {
    categories: () => {
      return fetch(fetchData())
        .then(res => res.json())
        .then(payload => {
          return payload.categories;
        })

      function fetchData() {
        return `${baseURL}/categories`
      }
    },
    category: (root, { id }) => {
      return fetch(fetchData(id))
        .then(res => res.json())
        .then(payload => {
          return payload.products;
        })

      function fetchData(id) {
        return `${baseURL}/category/${id}`
      }
    },
    products: () => {
      return fetch(fetchData())
        .then(res => res.json())
        .then(payload => {
          return payload.products;
        })

      function fetchData() {
        return `${baseURL}/products`
      }
    },
  },
  Mutation: {
    addProduct: (root, { product }) => {
      let newProduct = { productname: product.productname, qty:product.qty, price:product.price, categoryname: product.categoryname };
      let newProduct2 = JSON.stringify(newProduct);
      request.post({
        headers: {"Content-Type":"application/json"},
        url: `${baseURL}/products`,
        body: newProduct2  
      }, function(error, response, body){
        console.log(body);
      });
      return newProduct;
    },
  }
};