<template>
  <div class="container">
    <div class="row">

      <div class="col-md-4" v-for="(juegow, indice) in juego" :key="indice">
        <div class="card" style="width: 18rem;">

          <img :src="juegow.background_image" class="card-img-center" />


          <div class="card-body">
            <h5 class="card-title">{{ juegow.name }}</h5>
            <p class="card-text"> Id: {{ juegow.id }}</p>
            <p class="card-text">Rating: {{ juegow.rating }}</p>
            <p class="card-text">Lanzamiento: {{ juegow.released }}</p>
            <p class="card-text">Actualizado: {{ juegow.updated }}</p>
            <a href="#" @click=enlazar(juegow) class="btn btn-primary">Opinar</a>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  name: "CardComponent",
  data() {
    return {
      juego: [],
    };
  },
  methods: {
    enlazar(juegow) {
      this.$router.push(`/opiniones/${juegow.id}`)
        .catch();
    },

    obtener_juego() {
      // axios.get(`https://fakestoreapi.com/products/`)
        axios.get("https://api.rawg.io/api/games?key=842a8d69a5b14a78b5e75d475fdfa631&dates=2019-09-01,2019-09-30&platforms=18,1,7")

        .then((res) => {
          this.juego = res.data.results;

          // this.juego = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },





    validate_field(field) {
      return field == "" ? true : false;
    },
  },
  computed: {

  },
  created() {
    this.obtener_juego();
  },

}  
</script>
<style scoped></style>
