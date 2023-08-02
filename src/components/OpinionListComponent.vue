<template>
  <div>
    <table class="table">
      <thead>
        <th>Nombre</th>
        <th>Opinion</th>

        <th></th>
      </thead>
      <tbody>
        <tr v-for="(opinion, index) in juegos" :key="index">
          <td>{{ juegos.name }}</td>
          <td>{{ juegos.opinion }}</td>
          <td>
            <button class="btn btn-danger" @click="remove(juegos, index)">
              <i class="fas fa-trash"></i>
            </button>
            <button class="btn btn-warning" @click="setIdProductEdit(product.id)">
              <i class="fa-solid fa-pencil"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
  
<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "ProductListComponent",
  computed: {
    ...mapState(["products"]),
  },
  methods: {
    ...mapActions(["setIdProductEdit"]),
    remove(product) {
      let response = confirm(
        `¿Esta seguro de eliminar el producto con el nombre ${product.product} ?`
      );
      if (response) {
        // this.$store.commit("REMOVE_PRODUCT", product.id);
        this.$store.dispatch("removeProduct", product.id);
      }
    },
  },
};
</script>
  
<style scoped></style>
  