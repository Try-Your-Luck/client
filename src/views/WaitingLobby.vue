<template>
  <div class="game-lobby">
    <audio autoplay>
      <source src="../assets/waiting-lobby.mp3" type="audio/mpeg" />
    </audio>
    <div class="row">
      <UserCard :playerData="player" v-for="(player, i) in listPlayers" :key="i"></UserCard>
    </div>
    <div class="row mt-5">
      <b-button v-if="listPlayers.length >= 2" @click.prevent="pindah" size="lg" variant="warning">Start Game</b-button>
    </div>
  </div>
</template>

<script>
import UserCard from '../components/UserCard'
import { mapState } from 'vuex'
// import BackgroundMusic from '../components/BackgroundMusic'

export default {
  name: 'WaitingLobby',
  components: {
    UserCard
    // BackgroundMusic
  },
  computed: {
    ...mapState(['listPlayers', 'udah']),
    cekk () {
      if (this.udah === 'ready') {
        this.$router.push('casino')
      }
    }
  },
  created () {
    this.$store.dispatch('fetchPlayers')
  },
  methods: {
    pindah() {
      this.$store.dispatch('mulai')
    }
  }
}
</script>

<style scoped>
.game-lobby {
  background-image: url("https://images.squarespace-cdn.com/content/589135c903596e466b814f4c/1520907223472-YAKUGIB3ELBUS4MK90R9/poker_tournament_landscape_tv_full_hd.jpg?content-type=image%2Fjpeg");
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
