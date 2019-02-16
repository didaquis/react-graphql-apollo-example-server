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

Example of query (use a valid id):
```
query {
  getCliente(id: "981cb9f73ee26396a13c"){
    nombre
    pedidos {
      precio
      producto
    }
  }
}
```