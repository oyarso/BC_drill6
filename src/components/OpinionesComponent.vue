<template>
  <div class="container">
    <h3 class="text-center text-dark">Escribe tu opinión para el juego:</h3>
    <div class="mb-3">
      <label for="name_input" class="form-label text-dark">Nombre:</label>
      <input type="text" class="form-control" id="name_input" v-model="form.name" />
    </div>
    <div class="mb-3">
      <label for="opinion_input" class="form-label">Opinión</label>
      <textarea placeholder="Tú opinión debe ir aquí" class="form-control" id="opinion_input" rows="3"
        v-model="form.opinion"></textarea>

    </div>
    <button class="btn btn-primary" @click="addOpinion">Agregar</button>

    <!-- <div v-if="name != '' && last_name != ''">
  </div> -->





    <hr>


    <h3 class="text-center text-dark">A continuación podrás ver tu opinión:</h3>
    <hr>
    <table class="table">
      <thead>
        <th>Nombre</th>
        <th>Opinion</th>

        <th></th>
      </thead>
      <tbody>
        <tr v-for="(opiniono, indice) in opiniono" v-bind:key="indice">
          <td>{{ opiniono.name }}</td>
          <td>{{ opiniono.opinion }}</td>
          <button class="btn btn-danger" v-on:click="eliminar(indice)">
            <i class="fas fa-trash"></i>
          </button>

          <button class="btn btn-warning mg-3" @click="setNameOpinionEdit(opinion.name)">
            <i class="fa-solid fa-pencil"></i>
          </button>
          <td>
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
      formActualizar: false,
      idActualizar: '',
      nombreActualizar: '',
      opinionActualizar: '',
      opiniono: [],
      form: {
        name: "",
        opinion: "",
      },

    };
  },
  methods: {

    addOpinion() {
      if (
        this.form.name != "" &&
        this.form.opinion != ""
      ) {
        let data = { ...this.form };
        this.opiniono.push(data);
        // this.$store.dispatch("addOpinion", data);
        // this.juego=res.data;
        this.clean();
      }
    },



    // verFormActualizar: function (unid) {
    //   this.nombreActualizar = this.unid;
    //   this.opinionActualizar = this.opiniono[unid].nombre;
    //   this.formActualizar = true;
    // },

    // guardarActualizacion: function (unid) {
    //   this.formActualizar = false;
    //   this.opiniono[unid].nombre = this.nombreActualizar;
    //   this.opiniono[unid].opinion = this.opinionActualizar;
    // }


    // ,


    // SET_ID_PRODUCT_ID: (state, id) => {
    //   state.id_product_edit = id;
    // },
    // EDIT_PRODUCT: (state, product) => {
    //   let index = state.products.findIndex((prod) => prod.id === product.id);
    //   Vue.set(state.products, index, product);
    //   state.id_product_edit = null;
    // },



    clean() {
      this.form.name = "";
      this.form.opinion = "";
    },
    eliminar: function (unid) {
      let indice = this.opiniono.findIndex(el => el.id == unid);
      let respuesta = confirm('¿Esta seguro que desea eliminar el producto de la compra?');
      if (respuesta == true) {
        // this.eliminarCompra(indice);
        this.opiniono.splice(indice, 1);
      }

    },


    // remover: (opiniono, elid)=>{
    //       this.opiniono.splice(elid,1);

    //   let response = confirm(
    //     `¿Esta seguro de eliminar el producto con el nombre ${opiniono.name} ?`
    //     );
    //     if (response) {
    //       // this.$store.commit("REMOVE_PRODUCT", product.id);
    // let index = this.opiniono.findIndex((opiniono) => opiniono.id === id);
    // this.opiniono.splice(index, 1);


    // }
  },
  // },

  // mutations: {
  // remover_product: (state, id) => {
  //   let index = state.Products.findIndex((prod) => prod.id === id);
  //   state.Products.splice(index, 1);
  //   },
  //   add_product: (state, product) => {
  //     product.id = Math.floor(Math.random() * 1000);
  //     state.Products.push(product);
  //   },
  // },
};
</script>

<style scoped></style>
