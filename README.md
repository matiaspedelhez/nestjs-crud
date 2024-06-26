# nestjs-crud

NestJS HTTP microservice that provides a simple CRUD functionality with MongoDB integration.

## Pre-requisites

- Docker
- Docker Compose
- Postman (optional)

## Installation

**Note:** Docker was utilized to avoid any system-related issues across computers.

- Clone this repository to an empty folder.
- Run docker-compose:

```bash
sudo docker compose up
```

- The code is up and running. Now, you can import the included collection to Postman and test its functionality.

## Endpoints description

**POST** /products - Create a new product \
**GET** /products - Get all products \
**GET** /products/:id - Get product by ID \
**PATCH** /products/:id - Edit product by ID \
**DELETE** /produts/:id - Delete product by ID

#### POST /products

- **URL**: `/products`
- **Method**: `POST`
- **Request Body**:

```js
{
  "name": "Product Name", // <string> - required
  "stock": 10 // <number> - required
}
```

#### Get /products

- **URL**: `/products`
- **Method**: `GET`

#### Get /products/:id

- **URL**: `/products`
- **Method**: `GET`

#### PATCH /products/:id

- **URL**: `/products`
- **Method**: `PATCH`

```js
{
  "name": "Product Name", // <string> - optional
  "stock": 10 // <number> - optional
}
```

#### DELETE /products/:id

- **URL**: `/products/:id`
- **Method**: `DELETE`

## Contact

- LinkedIn - [Matias Pedelhez](https://www.linkedin.com/in/matias-pedelhez/)
- Email - matiaspedelhez@gmail.com
