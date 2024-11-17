<template>
  <div>
    <h2>Lista de Usuarios</h2>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.name }} - {{ user.email }}
        <button @click="deleteUser(user.id)">Eliminar</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";


export default {
  data() {
    return {
      localUsers: []
    };
  },

  mounted() {
    this.localUsers = this.users;
  },
  computed: {
    ...mapGetters(["users"])
  },
  methods: {
    ...mapActions(["deleteUser"])
  }
};
</script>
