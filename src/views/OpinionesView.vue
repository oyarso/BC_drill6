<template>
  <div class="background_app">
    <router-view />
    <OpinionesComponent />
    <hr>


  </div>
</template>
      
<script>


import OpinionesComponent from '@/components/OpinionesComponent.vue'
export default {
  name: 'OpinionesView',
  components: {
    OpinionesComponent,

  }

}

</script>
      
<style scoped></style>
      
      