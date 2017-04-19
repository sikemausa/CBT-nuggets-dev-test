var express = require('express');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config');
var bodyParser = require('body-parser');
var app = express();
var morgan = require('morgan');
var axios = require('axios');
var compiler = webpack(config);

app.use(webpackHotMiddleware(compiler, {
    log: console.log
}))

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    stats: {colors: true}
}))

app.use(morgan('dev'))
app.use(express.static('dist'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

let findPersonById = (people, idNumber) => {
  return people.filter(person => {
    return person.url === `http://swapi.co/api/people/${idNumber}/`;
  })
}

const people = [];

for(let i=1; i<37; i++){
  if(i !== 17) {
    axios.get(`http://swapi.co/api/people/${i}/`).then(response => {
      people.push(response.data);
    })
    .catch(err => console.log(err));
  }
}

app.get('/people', (req, res) => {
  let sortedPeople = people.sort((a, b)=> {
    return a.name.localeCompare(b.name);
  });
  res.json(sortedPeople);
})

app.get('/:id/starships', (req, res) => {
  const starships = [];
  let person = findPersonById(people, req.params.id)[0];
  Promise.all(person.starships.map(url => axios.get(url)))
    .then(responses => res.json(responses.map(r => r.data)))
    .catch(err => console.log(err));
})

app.use(function(err, req, res, next) {
  if (err) {
    res.status(500).send(err);
  }
});

app.listen(3000);
console.log('listening on 3000');