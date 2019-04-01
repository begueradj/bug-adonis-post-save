'use strict'

const Person = use('App/Models/Person')

class PersonController {
  async store({ request, response }) {
    const data = request.post()
    console.log(data)
    const person = new Person()
    person.name = data.name
    console.log(person.name)
    await person.save()    
  }
  
  destroy({ request, response, params }) {
    console.log('hello')
  }
}

module.exports = PersonController
