#Battery Price API
This is a simple API built using Node.js and Express that scrapes the latest price of Lithium Ion Battery from https://www.metal.com/Lithium-ion-Battery/202303240001 and returns it in a JSON format.

#Installation
Clone this repository to your local machine.
Install the required dependencies by running npm install or yarn install.
#Usage
Start the API by running node app.js.
Send a GET request to http://localhost:3000/price to fetch the latest price of Lithium Ion Battery in JSON format.
#Endpoint
GET /price: Fetches the latest price of Lithium Ion Battery in JSON format.
Response Format
The /price endpoint returns a JSON object with the following fields:

#price: The latest price of Lithium Ion Battery.
If an error occurs while fetching the price, the endpoint returns a JSON object with an error field and a 500 status code.

Credits
This project was created by simant kumar prasad.
