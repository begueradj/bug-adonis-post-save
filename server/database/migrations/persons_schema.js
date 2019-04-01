'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PersonsSchema extends Schema {
  up () {
    this.create('persons', (table) => {
      table.increments()
      table.string('name', 30)
    })
  }

  down () {
    this.drop('persons')
  }
}

module.exports = PersonsSchema
