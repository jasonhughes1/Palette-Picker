const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('port', process.env.PORT || 3000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.locals.title = 'Palette Picker';


app.get('/', (request, response) => {
  response.send('Hello Pallete Picker')
});


app.listen(app.get('port'), () => {
  console.log(`$(app.locals.title) is running on ${app.get('port')}.`);
});
