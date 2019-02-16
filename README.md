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
  }) {
    id
    nombre
    apellido
    empresa
    email
    tipo
  }
}
```

Example of query (use a valid id):
```
query {
  getCliente(id: "7c08f8d6c24eeb56fe93"){
    nombre
  }
}
```