<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
      >
      <v-btn
        @click="saveUsers"
      >
        Save 5 users
      </v-btn>
      
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  methods: {
    async saveUsers() {
      let person = new FormData()
      person.append('name', 'Python')
      await this.$axios.$post('http://127.0.0.1:3333/persons', person)
    }
  }
}
</script>
