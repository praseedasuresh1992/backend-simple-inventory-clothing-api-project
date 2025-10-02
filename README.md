# 📦 Inventory API

A simple **RESTful API** built with **Node.js** and **Express.js** to manage an inventory system.  
It supports CRUD operations like viewing, adding, updating, and deleting products.

---

## 🚀 Features

- View all products
- Add a new product
- Update product details (full update)
- Partially update a product
- Delete a product

---

## 📌 API Endpoints

### 1. View All Products
**Endpoint:** `GET /viewProducts`  
**Description:** Fetch all products in the inventory.  

**Response Example:**
```json
[
  { "id": 1, "name": "kurti", "quantity": 2, "price": 900 },
  { "id": 2, "name": "jeans", "quantity": 2, "price": 1750 },
  { "id": 3, "name": "dhothi", "quantity": 2, "price": 600 },
  { "id": 4, "name": "shirt", "quantity": 2, "price": 1020 },
  { "id": 5, "name": "saree", "quantity": 2, "price": 2000 }
]
 2.Add a Product
{
  "name": "t-shirt",
  "quantity": 3,
  "price": 800
}
3.Full Updation
Replace all details by Id
{
  "name": "shirt",
  "quantity": 5,
  "price": 1200
}

4.Partial update
update  selected field of a product
{
  "price": 1000
}


5. Delete a product By Id

To Install Dependencies
npm install express
Run The server
npm start

Check Server Status
GET http://localhost:3000/
Tech Stack

1Node.js
2Express.js
3 JavaScript(ES6)


