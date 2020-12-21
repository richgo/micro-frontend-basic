# micro-frontend-basic

A basic implementation of micro-frontends using NextJs zones and federated Apollo GraphQL

All client and server applications need to be running in order to see the applciation working. To do this:

[1] Start the GraphQL servers by running the following commands from separate terminals:

```sh
cd gateway-server
```

then run:

```sh
yarn run start-services
```

and:

```sh
yarn run start-gateway
```

You should now see a working Apollo gateway on http://localhost:4000

[2] Start the clients.
To do this for the home-app in a new terminal:

```sh
cd home-app/client
```

then run:

```sh
yarn && yarn dev
```

for the product-app in a new terminal:

```sh
cd product-app/client/product
```

then run:

```sh
yarn && yarn dev
```

For the account-app in a new terminal:

```sh
cd account-app/client/account
```

then run:

```sh
yarn && yarn dev
```

Tou should now find a NextJs application working on http://localhost:3000