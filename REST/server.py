#!/usr/bin/python3
from flask import Flask, request, jsonify
from flask_restful import Resource, Api
from sqlalchemy import create_engine
from json import dumps
import json

db_connect = create_engine(r'database.db')
app = Flask(__name__)
api = Api(app)

class Product(Resource):
    def get(self):
        conn = db_connect.connect() # connect to database
        query = conn.execute("select productname, price, qty, categoryname from product as pd inner join category as ct where pd.categoryid = ct.id") # This line performs query and returns json result
        result = {'products': [dict(zip(tuple (query.keys()) ,i)) for i in query.cursor]}
        return jsonify(result)
    def post(self):
        conn = db_connect.connect()
        productname = request.json['productname']
        price = request.json['price']
        qty = request.json['qty']
        categoryname = request.json['categoryname']
        query = conn.execute("select id from category where categoryname=\"{0}\"".format(categoryname))
        result ={'categoryid': [dict(zip(tuple (query.keys()) ,i)) for i in query.cursor]}
        categoryid = result['categoryid'][0]['id']
        query1 = conn.execute("insert into product (productname,price,qty,categoryid) VALUES ('{0}','{1}','{2}','{3}')".format(productname,price,qty,categoryid))
        return {'status':'Products inserted'}
    
class Category(Resource):
    def get(self):
        conn = db_connect.connect()
        query = conn.execute("select * from category;")
        result = {'categories': [dict(zip(tuple (query.keys()) ,i)) for i in query.cursor]}
        return jsonify(result)

class Product_From_Category(Resource):
    def get(self, category_id):
        conn = db_connect.connect()
        query = conn.execute("select productname, price, qty, categoryname from product as pd inner join category as ct where pd.categoryid = ct.id and pd.categoryid = %d "  %int(category_id))
        result = {'products': [dict(zip(tuple (query.keys()) ,i)) for i in query.cursor]}
        return jsonify(result)

api.add_resource(Product, '/products') # Route_1
api.add_resource(Category, '/categories') # Route_2
api.add_resource(Product_From_Category, '/category/<category_id>') # Route_3

if __name__ == '__main__':
     app.run()
