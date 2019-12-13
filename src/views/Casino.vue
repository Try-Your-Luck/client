<template>
  <div class="game-lobby">
    <audio autoplay>
      <source src="../assets/waiting-lobby.mp3" type="audio/mpeg" />
    </audio>
    <div class="row">
      <UserCard :playerData="player" v-for="(player, i) in listPlayers" :key="i"></UserCard>
    </div>
  </div>
</template>

<script>
import UserCard from '../components/UserCard'
import { mapState } from 'vuex'
// import BackgroundMusic from '../components/BackgroundMusic'

export default {
  name: 'Casino',
  components: {
    UserCard
    // BackgroundMusic
  },
  computed: mapState(['listPlayers']),
  created () {
    this.$store.dispatch('fetchPlayers')
  }
}
</script>

<style scoped>
.game-lobby {
  background-image: url("https://silversea-h.assetsadobe2.com/is/image/content/dam/silversea-com/ships/silver-muse/public-areas/casino/silversea-ship-silver-muse-public-area-casino-2.jpg?hei=930&wid=930&fit=constrain&fmt=pjpeg&pscan=5&qlt=80");
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
}
/* .row {
    width: 100%;
  } */
</style>
