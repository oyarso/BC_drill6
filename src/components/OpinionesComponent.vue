<template>
  <div class="container">
    <section class="form">
      <h3 class="text-center text-dark">Escribe tu opinión para el juego:</h3>
      <div class="mb-3">
        <label for="nombre_input" class="form-label text-dark">Nombre:</label>
        <input type="text" class="form-control" id="nombre_input" v-model="form.nombre" />
      </div>
      <div class="mb-3">
        <label for="opinion_input" class="form-label">Opinión</label>
        <textarea placeholder="" class="form-control" id="opinion_input" rows="3" v-model="form.opinion"></textarea>

      </div>
      <button class="btn btn-primary" @click="addOpinion">Agregar</button>
    </section>








    <hr>


    <h3 class="text-center text-dark">A continuación podrás ver tu opinión:</h3>
    <hr>
    <table class="table">
      <thead>

        <th>Nombre</th>
        <th>Opinion</th>

        <th></th>
        <th></th>
      </thead>
      <tbody>
        <tr v-for="(opinion, indice) in opiniono" v-bind:key="indice">
          <td>
            <span v-if="formUpdate && idUpdate == indice">
              <input v-model="nombreUpdate" type="text" class="form-control">
            </span>
            <span v-else>
              {{ opinion.nombre }}
            </span>
          </td>
          <td>
            <span v-if="formUpdate && idUpdate == indice">
              <input v-model="opinionUpdate" type="text" class="form-control">
            </span>
            <span v-else>
              {{ opinion.opinion }}
            </span>
          </td>


          <td>

            <span v-if="formUpdate && idUpdate == indice">
              <button v-on:click="guardar(indice)" class="btn btn-success">Guardar</button>
            </span>
            <span v-else>
              <button v-on:click="verForm(indice)" class="btn btn-warning">
                <i class="fa-solid fa-pencil"></i></button>

                <button class="btn btn-danger" v-on:click="eliminar(indice)">
                  <i class="fas fa-trash"></i>

              </button>
            </span>
          </td>
        </tr>
      </tbody>
    </table>



  </div>
</template>

<script>
export default {
  name: "OpinionesComponent",
  data() {
    return {
      opiniono: [],
      form: {
        nombre: '',
        opinion: '',
        
      },
      formUpdate: false,
      idUpdate: -1,
      nombreUpdate: '',
      opinionUpdate: '',

    };
  },
  methods: {

    addOpinion() {
      if (
        this.form.nombre != "" &&
        this.form.opinion != ""
      ) {
        let data = { ...this.form };
        this.opiniono.push(data);
        this.clean();
      }
    },




    clean() {
      this.form.nombre = "";
      this.form.opinion = "";
    },
    eliminar(unid) {
      let respuesta = confirm('¿Esta seguro que desea eliminar el producto de la compra?');
      if (respuesta == true) {
        this.opiniono.splice(unid, 1);
      }

    },
    verForm(unid) {
      this.formUpdate = true;
      this.idUpdate = unid;
      this.nombreUpdate = this.opiniono[unid].nombre;
      this.opinionUpdate = this.opiniono[unid].opinion;
    },

    guardar(unid) {
      this.opiniono[unid].nombre = this.nombreUpdate;
      this.opiniono[unid].opinion = this.opinionUpdate;
      this.formUpdate = false;
    }

  },

};
</script>

<style scoped></style>
