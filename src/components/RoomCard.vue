<template>
  <b-col cols="3">
    <b-card
      class="card"
    >
    <b-card-text>
      {{ roomDetail.name }}
      <br>
      Current player: {{ roomDetail.players.length }}
    </b-card-text>
      <b-button variant="primary" @click.prevent="enterRoom">Join Room</b-button>
    </b-card> <!-- card // -->
  </b-col> <!-- col.// -->
</template>

<script>
export default {
  name: 'RoomCard',
  props: ['roomDetail'],
  methods: {
    enterRoom () {
      this.$store.dispatch('enterRoom', this.roomDetail.id)
      this.$router.push('waitingLobby')
    }
  }
}
</script>

<style scoped>
  .card {
    box-shadow: 2px 2px 2px grey;
  }
  .card:hover {
    transform: scale(1.1);
    transition: 0.8s;
  }
</style>
