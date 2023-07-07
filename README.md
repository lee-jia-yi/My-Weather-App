# My Weather Application
This weather application allows you to retrieve weather information from any location through a simple search. 

It makes use of the **Mapbox API** to retrieve geographical coordinates and the **Weatherstack API** to retrieve weather information.

## Installation:

Install all required dependencies by running:

```bash
npm i
```

## Before you start, Add Your API KEYS: 
Under src/utils/forecast.js: Create an access key from Weatherstack API and insert into <ENTER_YOUR_ACCESS_KEY>

Under src/utils/geocode.js: Create an access token from Mapbox API and insert into <ENTER_YOUR_ACCESS_TOKEN>


## To Start:
```bash
npm run start
```


## Tech/Packages Used:
**Node.js**

**Express.js** to create web server

**Handlebars.js / hbs** as templating engine to render dynamic documents and create partials for reusability

**Postman-Request.js** to facilitate asynchronous HTTP calls

