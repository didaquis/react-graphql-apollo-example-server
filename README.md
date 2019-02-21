# react-graphql-apollo-example

## **WIP** ⚠️

This repo is an example of application made with React + GraphQL + Apollo.

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

Example of mutation (returns an id):
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

Example of query (use a valid id):
```
query {
  getCliente (id: "5c69e674263fbe7abfb624a3"){
    id
    nombre
  }
}
```

Example of mutation (use a valid id):
```
mutation {
  eliminarCliente (id: "5c69e674263fbe7abfb624a3")
}
```