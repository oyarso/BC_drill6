<template>
    <div class="container">
      <h2 class="text-center">Editar Opinion</h2>
    
      <div class="mb-3">
        <label for="nombre_input" class="form-label">Nombre</label>
        <input
          type="text"
          class="form-control"
          id="nombre_input"
          v-model="form.nombre"
        />
      </div>
      <div class="mb-3">
        <label for="opinion_input" class="form-label">Opinion</label>
        <input
          type="text"
          class="form-control"
          id="opinion_input"
          v-model="form.opinion"
        />
      </div>
      <button class="btn btn-primary" @click="edit">Editar</button>
    </div>
  </template>
  
  <script>
  export default {
    name: " OpinionEditComponent",
    data() {
      return {
        form: {
          nombre: "",
          opinion: "",
          
        },
      };
    },
    methods: {
      ...mapActions(["editOpinion"]),
      edit() {
        if (
          this.form.nombre != "" &&
          this.form.opinion != "" 
            ) {
          let data = { ...this.form, id: this.id_opinion_edit };
          this.editOpinion(data);
        }
      },
      clean() {
        this.form.nombre = "";
        this.form.opinion = "";
      },
      setOpinion() {
        let prod = this.getOpinionById(this.id_opinion_edit);
        this.form.nombre = prod.nombre;
        this.form.opinion = prod.opinion;
      },
      mounted() {
        this.setOpinion();
      },
    },
  };
  </script>
  
  <style scoped></style>
  