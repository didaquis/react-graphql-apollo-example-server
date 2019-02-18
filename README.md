# react-graphql-apollo-example

WIP


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

Example of query (use a valid id):
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
mutation {
  eliminarCliente (id: "5c69e674263fbe7abfb624a3")
}
```

## Requirements:
* MongoDB service running