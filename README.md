[![Build Status](https://travis-ci.org/RobDWaller/rs-jwt.svg?branch=master)](https://travis-ci.org/RobDWaller/rs-jwt) [![codecov](https://codecov.io/gh/RobDWaller/rs-jwt/branch/master/graph/badge.svg)](https://codecov.io/gh/RobDWaller/rs-jwt) [![Maintainability](https://api.codeclimate.com/v1/badges/4e718477548d731932a9/maintainability)](https://codeclimate.com/github/RobDWaller/rs-jwt/maintainability) [![Mutation testing badge](https://img.shields.io/endpoint?style=flat&url=https%3A%2F%2Fbadge-api.stryker-mutator.io%2Fgithub.com%2FRobDWaller%2Frs-jwt%2Fmaster)](https://dashboard.stryker-mutator.io/reports/github.com/RobDWaller/rs-jwt/master) [![npm version](https://badge.fury.io/js/rs-jwt.svg)](https://badge.fury.io/js/rs-jwt)
# Really Simple JWT JS

RS-JWT is a TypeScript JSON Web Token reader for the browser which allows you to access the header and payload claims data contained in a JWT. It can be used in any JavaScript or TypeScript project. Please note you cannot validate tokens with this package.

It is part of the [PHP ReallySimpleJWT family](https://github.com/RobDWaller/ReallySimpleJWT) of JSON Web Token tools which help you easily add JWT functionality to your web projects.

- [ReallySimpleJWT](https://github.com/RobDWaller/ReallySimpleJWT): Create and validate JSON Web Tokens.
- [PSR-JWT](https://github.com/RobDWaller/psr-jwt): Add JSON Web Token authorisation middleware to a PHP Project. 

For more information on JSON Web Tokens please read our [basic introduction](https://github.com/RobDWaller/ReallySimpleJWT#what-is-a-json-web-token) to them or take a look at [RFC 7519](https://tools.ietf.org/html/rfc7519#section-4)

## Installation

```sh
npm install --save rs-jwt
```

## Basic Usage

To read a token simply import the `parseJwt()` method and provide it a token.

This will return an object with the methods `getHeader()` and `getPayload()` which can be used to return the relevant claims.

```js
import { parseJwt } from 'rs-jwt'

const result = parseJwt('json.web.token')

// Return the header claims as an object.
const header = result.getHeader()

// Access the type claim.
console.log(header.typ)

// Return the payload claims as an object.
const payload = result.getPayload()

// Access the expiry claim.
console.log(payload.exp)
```

## Advanced Usage

The `parseJwt()` method is a facade for the RSJwt class. If you wish to use an OOP approach in your project import the RSJwt class directly, instantiate it and then call the `parse()` method and pass in a JSON Web Token.

```js
import { RSJwt } from 'rs-jwt'

const jwt = new RSJwt()

const result = jwt.parse('json.web.token')

// Return the header claims as an object.
const header = result.getHeader()

// Access the type claim.
console.log(header.typ)

// Return the payload claims as an object.
const payload = result.getPayload()

// Access the expiry claim.
console.log(payload.exp)
```

## License

MIT

## Author

[Rob Waller](https://twitter.com/RobDWaller)