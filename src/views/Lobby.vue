<template>
<div class="jumbotron">
  <b-container
    class="justify-content-center text-center mb-4 p-4">
    <h1>Lobby</h1>
    <b-row class="border mx-auto big-box" style="width: 75%">
      <RoomCard class="my-4" v-for="(room, index) in rooms" :key="index" :idx="index"></RoomCard>
    </b-row> <!-- row.// -->
  </b-container>
</div>
</template>

<script>
import RoomCard from '../components/RoomCard'
export default {
  name: 'Lobby',
  data () {
    return {
      rooms: ['a', 'b', 'c', 'd', 'f', 'g', 'h', 'i', 'j']
    }
  },
  components: {
    RoomCard
  }
}
</script>

<style scoped>
  .jumbotron {
    background-color: rgb(217, 243, 234);
  }
</style>
