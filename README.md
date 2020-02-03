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

Run tests (headless)
```
npm run cypress:run
```

Run tests (with cypress UI)
```
npm run cypress:open
```