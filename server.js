const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');
const faker = require('faker');
const server = app.listen(port,()=>console.log('Listening on port ${port}'));

app.use(cors());
app.use(express.json());

class User {
    constructor() {
        this.id = faker.random.number();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

const newUser = new User();
console.log(newUser);

class Company {
    constructor() {
        this.id = faker.random.number();
        this.companyName = faker.company.companyName();
        this.address = faker.address.streetAddress() + faker.address.city() + faker.address.state() + faker.address.zipCode() + faker.address.country();
    }
}

const newCompany = new Company();
console.log(new Company);

app.get('/api/:word1/:word2', (request,response) => {
    if(request.params.word1 === 'users'){
        response.json({"New User":new User()})
    }
    if(request.params.word1 === 'companies'){
        response.json({"New Company":new Company()})
    }if(request.params.word1 === 'user' && request.params.word2 === "company"){
        response.json({"New User":new User(),
                        "New Company":new Company()})
    }
})