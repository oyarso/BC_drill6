<template>
 
  <div>
    <br>
  <br>
    <button @click="getData" class="btn btn-success">Ingresar Datos</button>
    <div v-if="name != '' && last_name != ''">



<br><br>


    <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop"
      aria-controls="staticBackdrop">
      Inicio
    </button>

    <div class="container text-center">
  <div class="row">
    <div class="col">
      <h3 class="mt-4">Resumen de tu cuenta</h3>
      <h5 class="mt-4">Le diste me gusta al juego: </h5>
      
    </div>
  </div>
  <div class="row mx-auto">
    <div class="col">
      <p class="mt-4">¿Deseas comprar coins para este juego?</p>
    </div>
  </div>
  <button type="button" class="btn btn-warning">Agregar Coins</button>
  <div class="row">
    <div class="col">
      <h3 class="mt-4">Cantidad de coins comprados</h3>
      

    </div>
  </div>
</div>

    
    <div id="kanva" class="container text-center sticky-bottom">
  <div class="row">
    <div class="col bg-warning">
      % de finalización de juego
      <hr>
      17%
      <img v-bind:src="require('@/assets/star.png')" alt="">
    </div>
    <div class="col bg-success text-light">
      Logros en el juego
      <hr>
      166
      <img v-bind:src="require('@/assets/trofeo.png')" alt="">
    </div>
    <div class="col bg-info">
      Recompensas
      <hr>
      200
      <img v-bind:src="require('@/assets/medalla.png')" alt="">
    </div>
  </div>
</div>
    <div class="offcanvas offcanvas-start bg-dark text-light" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop"
      aria-labelledby="staticBackdropLabel">
      <div class="offcanvas-header bg-dark text-light">
        <h5 class="offcanvas-title" id="staticBackdropLabel">Menú</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <div>
          <img v-bind:src="require('@/assets/imguser.png')" alt="">
          <h4>{{ getFullName }}</h4>
        </div>
      </div>
    </div>
  </div>


</div>
  
</template>    
<script>
export default {
  name: "CuentaComponent",
  data() {
    return {
      name: "",
      last_name: "",
    };
  },
  methods: {
    getData() {
      let name = prompt("Ingrese su nombre:");
      let last_name = prompt("Ingrese su apellido:");
      if (this.validate_field(name)) {
        alert("Debe llenar campo nombre");
        return;
      }
      if (this.validate_field(last_name)) {
        alert("Debe llenar el campo apellido");
        return;
      }
      this.name = name;
      this.last_name = last_name;
    },
    validate_field(field) {
      return field == "" ? true : false;
    },

  },
  computed: {
    getFullName() {
      return `Bienvenid@ ${this.name} ${this.last_name}`;
    },
  },
};
</script>
    
<style scoped></style>
    
    
    
    
    
            
            
    