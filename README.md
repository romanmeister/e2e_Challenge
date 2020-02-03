# e2e Login Test moberries
## Description
Runs positive and negative login tests on moberries-website https://app.moberries.com/login

## Installation
Create node_modules and install dependencies
```
npm i
```

## Usage
Create cypress.env.json file in directory 'root', and insert valid account information.

```json
{
    "email": "yourmail@mail.com",
    "password": "yourpassword"
}
```

Run tests
```
npm run cypress:run
```