<template>
<div class="jumbotron p-0">
  <b-container
    class="justify-content-center text-center my-0 p-2">
    <h1 style="color: white">LOBBY</h1>
    <b-button class="my-4" variant="primary" @click.prevent="createRoom">Create Room</b-button>
      <b-row class="mx-auto big-box" style="width: 75%; height: 60vh">
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
  },
  methods: {
    createRoom () {
      // createRoom
    }
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

