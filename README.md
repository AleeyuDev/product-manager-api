# Product API

A Node.js and Express-based API for managing product data, including creating, reading, updating, and deleting products. This project connects to a MongoDB database and allows basic CRUD operations on products.

## Features

- Fetch all products
- Fetch a single product by ID
- Add a new product
- Update an existing product
- Delete a product
- Error handling for invalid requests and missing resources

## Technologies Used

- **Node.js**: Server-side JavaScript runtime
- **Express.js**: Web framework for Node.js
- **MongoDB**: NoSQL database for storing products
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB
- **Nodemon**: Automatically restarts the server when file changes are detected (for development)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/product-api.git
   cd product-api

2. Install the required dependencies:

```bash
Copy code
npm install
Set up MongoDB:

Make sure MongoDB is running on your machine, or you can use a MongoDB cloud service (such as MongoDB Atlas).
The project currently uses a local MongoDB instance. You can configure the MongoDB connection string in the server.js file under:

```

```js
mongoose.connect("mongodb://localhost:27017/products");
```

## Running the Application

1. Start the server:

```bash
npm start
```

This will start the server at <http://localhost:3000>.

2. You can also run the project in development mode using Nodemon, which will watch for file changes and automatically restart the server:

```bash
npx nodemon server.js
```

## API Endpoints

## Get All Products

URL: /products
Method: GET
Response: Returns a list of all products.
Get Product by ID
URL: /products/:id
Method: GET
Response: Returns a single product by its unique ID.

## URL: /products

### Create a New Product

**Method**: `POST`  
**URL**: `/products`

#### Body Parameters

- `name`: (string) **Required.** Name of the product.
- `quantity`: (number) **Required.** Quantity of the product.
- `price`: (number) **Required.** Price of the product.
- `image`: (string) **Optional.** URL for the product image.

**Response**:  
Creates a new product and returns the created product object.

---

### Update an Existing Product

**Method**: `PUT`  
**URL**: `/products/:id`

#### Body Parameters

Any combination of the following fields:

- `name`: (string) Product name.
- `quantity`: (number) Quantity of the product.
- `price`: (number) Price of the product.
- `image`: (string) URL for the product image.

**Response**:  
Updates the specified product and returns the updated product object.

---

### Delete a Product

**Method**: `DELETE`  
**URL**: `/products/:id`

**Response**:  
Deletes the specified product and returns the deleted product.

### Example Requests

```bash
POST /products
{
  "name": "Example Product",
  "quantity": 10,
  "price": 99.99,
  "image": "<http://example.com/product-image.jpg>"
}
```

### Get All Products

```bash
GET /products
```

### Get a Product by ID

```
bash

GET /products/60f9c5bfc25e4617f0d34d3d
```

```bash .
├── models
│   └── productModels.js        # Mongoose schema and model definition for products
├── server.js                   # Main server file (Express.js app)
├── package.json                # Project metadata and dependencies
└── README.md                   # Project documentation (this file)
```

### Error Handling

- **404 Not Found**: Returned when a product with the specified ID does not exist.
- **500 Internal Server Error**: Returned when a server or database error occurs.

### Contact

If you have any questions or feedback, feel free to reach out to me via email: <aleeyuid@gmail.com>

---

### Key Points Included

1. **Installation Instructions**:  
   - How to clone the repository, install dependencies, and set up MongoDB.

2. **API Endpoints**:  
   - A detailed description of each route (GET, POST, PUT, DELETE) and what they do.

3. **Error Handling**:  
   - A brief note about the error messages the API returns.

4. **Project Structure**:  
   - The layout of your project files.
