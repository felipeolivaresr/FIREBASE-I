<template>
  <div>
    <h2>Agregar Usuario</h2>
    <form @submit.prevent="submitForm">
      <div>
        <input v-model="name" placeholder="Nombre" required />
      </div>
      <div>
        <input v-model="email" placeholder="Correo electrónico" required />
      </div>
      <button type="submit">Agregar</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      name: "",
      email: ""
    };
  },
  methods: {
    ...mapActions(["addUser"]),
    async submitForm() {
      if (this.name && this.email) {
        await this.addUser({ name: this.name, email: this.email });
        this.name = "";
        this.email = "";
        alert("Usuario agregado con éxito.");
      } else {
        alert("Por favor, completa todos los campos.");
      }
    }
  }
};
</script>
