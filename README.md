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

Example of query:
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

Example of query:
```
query {
  getClientes {
    id
    nombre
    apellido
  }
}
```

Example of query:
```
query {
  getClientes(limite: 3, offset: 3){
    id
  }
}
```

Example of query:
```
query {
  totalClientes
}
```

Example of query (use a valid id):
```
query {
  getCliente (id: "5c69e674263fbe7abfb624a3"){
    id
    nombre
  }
}
```

Example of query (use a valid id):
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

Example of mutation:
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

Example of mutation:
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

Example of mutation (use a valid id):
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

Example of mutation (use a valid id):
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

Example of mutation (use a valid id):
```
mutation {
  eliminarCliente (id: "5c69e674263fbe7abfb624a3")
}
```