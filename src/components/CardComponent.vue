<template>
  <div class="container">
    <div class="row">

      <div class="col-md-4" v-for="juegow in juegos" :key="juegow.id">
        <div class="card" style="width: 18rem;">

          <img :src="juegow.background_image" class="card-img-center" />


          <div class="card-body">
            <h5 class="card-title">{{ juegow.name }}</h5>
            <p class="card-text"> Id: {{ juegow.id }}</p>
            <p class="card-text">Rating: {{ juegow.rating }}</p>
            <p class="card-text">Lanzamiento: {{ juegow.released }}</p>
            <p class="card-text">Actualizado: {{ juegow.updated }}</p>

            
            <a href="#" @click=enlazar(juegow) class="btn btn-primary mx-2">Opinar</a>
            <a href="#" @click=enlazarLike(juegow) class="btn btn-danger">Like</a>
              
              

          
          </div>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  props: ['title'],
  name: "CardComponent",
  data() {
    return {
      juegos: [],
    };
  },
  methods: {
    enlazar(juegow) {
      this.$router.push(`/opiniones/${juegow.id}`)
        .catch();
    },
    enlazarLike(juegow) {
      this.$router.push(`/cuenta/${juegow.id}`)
        .catch();
    },

    consumirDatos() {
      // axios.get(`https://fakestoreapi.com/products/`)
        axios.get("https://api.rawg.io/api/games?key=842a8d69a5b14a78b5e75d475fdfa631&dates=2019-09-01,2019-09-30&platforms=18,1,7")

        .then((res) => {
          this.juegos = res.data.results;

          // this.juegos = res.data;
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
    this.consumirDatos();
  },

}  
</script>
<style scoped></style>
