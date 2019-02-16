# react-graphql-apollo-example

WIP

Example of query:
```
query {
  cliente {
    id
    nombre
    email
  }
}
```

Example of mutation:
```
mutation {
  crearCliente(input: {
    nombre: "Dídac"
  	apellido: "García"
    empresa: "ACME"
    email: "d.g@acme.com"
  }) {
    id
    nombre
    apellido
    empresa
    email
  }
}
```
