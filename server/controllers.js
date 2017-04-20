let axios = require('axios');

exports.findPersonById = (people, idNumber) => {
    return people.filter(person => {
        return person.url === `http://swapi.co/api/people/${idNumber}/`;
    })
}

exports.getPeopleData = (people) => {
    for(let i=1; i<37; i++){
        if(i !== 17) {
            axios.get(`http://swapi.co/api/people/${i}/`).then(response => {
                people.push(response.data);
            })
            .catch(err => console.log(err));
        }
    }
}

exports.alphabetizePeople = (people) => {
    let sortedPeople = people.sort((a, b)=> {
      return a.name.localeCompare(b.name);
    });
    return sortedPeople;
}
