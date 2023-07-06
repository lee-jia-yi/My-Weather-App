# My Weather Application
This weather application allows you to retrieve information regarding temperature and UV, from any location you can search from. 

It makes use of the **mapbox API** to retrieve geographical coordinates and the **weatherstack API** to retrieve weather information.

## Installation:

Install all required dependencies by running:

```bash
npm i
```

## Add Your API KEYS: 
Under src/utils/forecast.js: Retrieve an access key from Weatherstack API and insert into <ENTER_YOUR_ACCESS_KEY>

Under src/utils/geocode.js: Retrieve an access token from Mapbox API and insert into <ENTER_YOUR_ACCESS_TOKEN>

## To Start:

```bash
npm run start
```


## Tech/Packages Used:
**Node.js**

**Express.js** to create web server

**Handlebars.js / hbs** as templating engine to render dynamic documents and create partials for reusability

**Postman-Request.js** to facilitate asynchronous HTTP calls

