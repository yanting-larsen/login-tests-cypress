# Testing login demo with Cypress
## Technologies
-  NodeJS
-  Cypress

## How to run the tests
- Install dependencies (Cypress) `npm install`
- Open Cypress to run test cases `node_modules/.bin/cypress open`
- Use Cypress interface to check the tests for the login demo: https://the-internet.herokuapp.com/login

## Structure
cypress
 ┣ fixtures        
 ┃ ┗ user.json
 ┣ integration
 ┃ ┣ fixture_spec.js
 ┃ ┣ login_spec.js
 ┃ ┗ secure-area_spec.js
 ┗ support
 ┃ ┣ commands.js
 ┃ ┗ index.js


## Structure explaination
- #### **`fixtures`** 
Load a fixed set of data such as **`username`** and **`userpassword`** located in **`user.json`**.
- #### **`integration`** 
Acutal integrations of test specs which are isolated as **`login_spec`** (login page) and **`secure-area_spec`** (secure page) and **`fixture_spec`** (user credentials)
- #### **`support`** 
Overwrite **`login`** commands which is shared by tests

## References
Links:
- Tested login demo: https://the-internet.herokuapp.com/login
- Cypress website: https://www.cypress.io
