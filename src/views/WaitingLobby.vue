<template>
  <div class="game-lobby">
    <audio autoplay>
      <source src="../assets/waiting-lobby.mp3" type="audio/mpeg" />
    </audio>
    <div class="row">
      <UserCard></UserCard>
    </div>
    <div class="row mt-5">
      <b-button size="lg" variant="warning">Start Game</b-button>
    </div>
  </div>
</template>

<script>
import UserCard from '../components/UserCard'
// import BackgroundMusic from '../components/BackgroundMusic'

export default {
  name: 'GameLobby',
  components: {
    UserCard
    // BackgroundMusic
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
