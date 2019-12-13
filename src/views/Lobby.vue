<template>
<div class="jumbotron p-0">
  <audio autoplay>
    <source src="../assets/room-list-lobby.mp3" type="audio/mpeg" />
  </audio>
  <b-container
    class="justify-content-center text-center my-0 p-2">
    <h1 style="color: white">LOBBY</h1>
    <ModalRoom></ModalRoom>
      <b-row class="mx-auto big-box" style="width: 75%; height: 60vh">
          <RoomCard class="my-4" v-for="room in rooms" :key="room.id" :roomDetail="room"></RoomCard>
      </b-row> <!-- row.// -->
  </b-container>
</div>
</template>

<script>
import RoomCard from '../components/RoomCard'
import { mapState } from 'vuex'
import ModalRoom from '../components/ModalRoom'
export default {
  name: 'Lobby',
  data () {
    return {
    }
  },
  components: {
    RoomCard,
    ModalRoom
  },
  methods: {
    
  },
  computed: mapState(['rooms']),
  created () {
    this.$store.dispatch('getRooms')
  },
  watch: {

  }
}
</script>

<style scoped>
  .jumbotron {
    margin: 0;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: url("https://images.unsplash.com/photo-1553481187-be93c21490a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80") no-repeat;
    background-position: center ;
    background-size: cover;
  }
  .big-box {
    overflow-y: scroll
  }
  .big-box::-webkit-scrollbar {
      display: none;
  }

</style>

