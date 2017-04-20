var express = require('express');
var app = express();
var axios = require('axios');
var controllers = require('./controllers');

require('./middleware')(app);
const people = [];

app.on('listening', () => {
    controllers.getPeopleData(people);
});

app.get('/api/people', (req, res) => {
    const sortedPeople = controllers.alphabetizePeople(people);
    res.json(sortedPeople);
})

app.get('/api/person/:id', (req, res) => {
    axios.get(`http://swapi.co/api/people/${req.params.id}`)
    .then(response => res.json(response.data));
})

app.get('/api/:id/starships', (req, res) => {
    const starships = [];
    let person = controllers.findPersonById(people, req.params.id)[0];
    Promise.all(person.starships.map(url => axios.get(url)))
    .then(response => res.json(response.map(starship => starship.data)))
    .catch(err => console.log(err));
})

app.get('*', function(request, response){
  response.sendfile('./dist/index.html');
});

app.use(function(err, req, res, next) {
  if (err) {
      res.status(500).send(err);
      console.log(err.message);
  }
  next();
});

app.listen(process.env.PORT || 3000, () => {
    app.emit('listening');
    console.log('listening on 3000');
});
