
# ShoppyGlobe RestAPi

It is a Backend Service for React Project ShoppyGlobe Ecommerce App for storing products and Cart Items.








## Features

- Jwt Authentication Login/Register
- Personal Cart

    
## Documentation

I have used the MVC file structure to build this api it have three components Routes, Model, Controller.

Model - Schema for mongoose.

Routes - For products,Cart and user auth.

Controller - for http request handling.

-  /products Route for getting all Products.
-  /products/id for getting the specific product by ObjectId.
-  /cart routes for handling the cart related http requests like -Get ,Post.
- /cart/id route for handling the update and delete request by id.
- /user/login Post request for logging the user in.
- /user/register for registering the new user.


## Run Locally

Clone the project

```bash
  git clone https://github.com/11804800/ecommerce-api.git
```

Go to the project directory

```bash
  cd project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start

  http://localhost:3000

```

```bash
  Routes 
  
   http://localhost:3000/products

   http://localhost:3000/cart

   http://localhost:3000/user/login

   http://localhost:3000/user/register
```


