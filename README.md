# 🛒 Inventory API (Express.js)

A simple **Inventory Management API** built with **Node.js** and **Express.js**.  
It supports **CRUD operations** for products in an in-memory inventory.

---

## 📂 Project Structure


---

## 🚀 API Endpoints

### 1. View All Products
- **Endpoint:** `GET /viewProducts`
- **Description:** Fetch all products in the inventory.
- **Response Example:**
```json
[
  { "id": 1, "name": "kurti", "quantity": 2, "price": 900 },
  { "id": 2, "name": "jeans", "quantity": 2, "price": 1750 },
  { "id": 3, "name": "dhothi", "quantity": 2, "price": 600 },
  { "id": 4, "name": "shirt", "quantity": 2, "price": 1020 },
  { "id": 5, "name": "saree", "quantity": 2, "price": 2000 }
]
2. Add a Product

Endpoint: POST /addProducts

Description: Add a new product to the inventory.

Request Body Example:
{
  "name": "t-shirt",
  "quantity": 3,
  "price": 800
}
}
Response Example: Returns the updated product list.

3. Update a Product (Full Update)
Endpoint: PUT /updateProducts/:id

Description: Replace all details of a product by ID.

Request Body Example:

json
Copy code
{
  "name": "shirt",
  "quantity": 5,
  "price": 1200
}
4. Partial Update a Product
Endpoint: PATCH /updateProductspartially/:id

Description: Update selected fields of a product.

Request Body Example:

json
Copy code
{
  "price": 1000
}
5. Delete a Product
Endpoint: DELETE /deleteProducts/:id

Description: Remove a product from the inventory by ID.

⚙️ Installation & Setup
Clone the repository:

bash
Copy code
git clone <your-repo-url>
cd inventory-api
Install dependencies:

bash
Copy code
npm install express
Run the server:

bash
Copy code
node app.js
The API will run at:

arduino
Copy code
http://localhost:3000
🔗 Example API Usage
Check server status:

nginx
Copy code
GET http://localhost:3000/
Response: "Inventory API is running"
Get all products:

bash
Copy code
GET http://localhost:3000/viewProducts
Add a product:

bash
Copy code
POST http://localhost:3000/addProducts
Update a product fully:

bash
Copy code
PUT http://localhost:3000/updateProducts/1
Update a product partially:

bash
Copy code
PATCH http://localhost:3000/updateProductspartially/1
Delete a product:

bash
Copy code
DELETE http://localhost:3000/deleteProducts/1
🛠 Tech Stack
Node.js

Express.js

JavaScript (ES6)
