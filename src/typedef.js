export const typeDef = `
type Category {
  id: ID!
  categoryname: String
}

type Product{
  productname: String
  price: Int
  qty: Int
  categoryname: String
}

input ProductInput{
  productname: String
  price: Int
  qty: Int
  categoryname: String
}

# This type specifies the entry points into our API
type Query {
  categories: [Category]
  category(id: ID!): [Product]
  products: [Product]
}

type Mutation {
  addProduct(product: ProductInput!): Product
}
`