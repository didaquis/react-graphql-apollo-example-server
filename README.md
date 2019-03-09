# react-graphql-apollo-example (server)

## **WIP** ⚠️

This repo is an example of application made with React + GraphQL + Apollo.

This repository is made to work with: https://github.com/didaquis/react-graphql-apollo-example-client

### Requirements:
* MongoDB service running
* Node.js 9.4 or higher
* Configure the application:
  * Edit the configuration in file `_env`
  * Rename the file `_env` to `.env`

### Execute the application:
* Execute script with `node .` or `npm start`

## For development:
* For run app: `npm run dev`
* For run linter: `npm run lint`


## Some examples of querys and mutations

### Querys

```
query {
  obtenerProductos {
    id
    nombre
    precio
    stock
  }
}
```

```
query {
  getClientes {
    id
    nombre
    apellido
  }
}
```

```
query {
  getClientes(limite: 3, offset: 3){
    id
  }
}
```

```
query {
  totalClientes
}
```

```
query {
  getCliente (id: "5c69e674263fbe7abfb624a3"){
    id
    nombre
  }
}
```

```
query {
  obtenerProducto (id: "5c7dadc738fefed92d1f1e2b"){
    id
    nombre
    precio
    stock
  }
}
```

### Mutations

```
mutation {
  crearCliente(input: {
    nombre: "Dídac"
    apellido: "García"
    empresa: "ACME"
    email: "d.g@acme.com"
    tipo: BASICO
    pedidos: [
      {
        producto: "Ordenador"
        precio: 999
      }
    ]
  }) {
    id
    nombre
    apellido
    empresa
    email
    tipo
    pedidos {
      producto
      precio
    }
  }
}
```

```
mutation {
  nuevoProducto(input: {
    nombre: "Impresora"
    precio: 63
    stock: 31
  }) {
    id
    nombre
    precio
    stock
  }
}
```

```
mutation {
  actualizarCliente (input: {
    id: "5c69e674263fbe7abfb624a3"
    nombre:"John"
    apellido: "Doe"
    empresa: "ACME"
    email: "j.d@acme.com"
    tipo: PREMIUM
  }) {
    nombre
  }
}
```

```
mutation {
  actualizarProducto (input: {
    id: "5c7dadc738fefed92d1f1e2b"
    nombre:"Cafetera"
    precio: 99
    stock: 180
  }) {
    nombre
    precio
    stock
  }
}
```

```
mutation {
  eliminarCliente (id: "5c69e674263fbe7abfb624a3")
}
```

```
mutation {
  eliminarProducto(id: "5c83ef0954d0cd1922dda2ca")
}
```

