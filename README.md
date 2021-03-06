## _**Human Care Systems : Integration-Tool**_

### _**Challenge Details**_ 

- node.js project to load CSV data into a Patients collection in MongoDB.
- Schedule emails for every patient that has CONSET=Yes.
- Verify the data in flat file matches the data in Patients collection
- Print out all missing information like missing first name, missing email addrss with Consent="Yes
- Verifiication of correct email scheduling for each patient (Unit test)

## Getting Started

This repository aims to assist you to run Integration-tool to achieve above mentioned challeneges with a solid file structure as a foundation.

`$ git clone https://github.com/dheerajhiremath92/HCSintegrationtool.git # or clone your own fork`

`$ cd HCSintegrationtool`

`$ npm install`

## Available Scripts

`nodemon` is used for easier development.

### `npm start dev`

Runs server app in development mode.<br>
Open [http://localhost:3000]

### `npm run test`

Executes jest test framework / suites

#### `HCSintegrationtool` - Holds the server application

- #### `postmancollections` - Contains API collections
- #### `src` - Contains all server files
    - #### `controllers` - Contains all of the callback functions that each route will call
    - #### `models` - Contains all data models
    - #### `routes` - Contains all of our HTTP to URL path associations for each unique url
    - #### `tests` - Contains all of our server tests that we have defined
- #### `index.js` - Defines npm behaviors and packages for the client
- #### `package.json` - Defines npm behaviors like the scripts defined in the next section of the README
- #### `.gitignore` - Tells git which files to ignore
- #### `README` - This file!


