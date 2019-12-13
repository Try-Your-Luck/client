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
    background: url("https://silversea-h.assetsadobe2.com/is/image/content/dam/silversea-com/ships/silver-muse/public-areas/casino/silversea-ship-silver-muse-public-area-casino-2.jpg?hei=930&wid=930&fit=constrain&fmt=pjpeg&pscan=5&qlt=80") no-repeat;
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

