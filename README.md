# Express.js POST Request Body Parsing Issue

This repository demonstrates a common issue encountered when working with POST requests in Express.js: failure to correctly parse the request body when it's empty or contains invalid JSON data.

## Bug Description

The provided Express.js application attempts to handle POST requests to the '/data' endpoint.  However, if the request body is empty or malformed (e.g., not valid JSON), the application will either fail silently or produce unexpected behavior.  This is due to how `express.json()` handles parsing.

## Solution

The solution involves implementing robust error handling around the request body parsing. This means explicitly checking for the existence and validity of the data received before processing.

## How to Reproduce

1. Clone this repository.
2. Navigate to the project directory.
3. Run `npm install` to install Express.js.
4. Run `node bug.js` to start the server.
5. Send a POST request to `http://localhost:3000/data` with an empty body or with an invalid JSON payload. Observe the console output and response.

## Solution Code

The solution demonstrates improved error handling and proper data validation.