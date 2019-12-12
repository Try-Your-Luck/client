<template>
  <b-col cols="3">
    <b-card
      class="card"
    >
    <b-card-text>
      Room: {{ idx + 1 }}
      <br>
      Current player: 4
    </b-card-text>
      <b-button variant="primary" @click.prevent="enterRoom">Join Room</b-button>
    </b-card> <!-- card // -->
  </b-col> <!-- col.// -->
</template>

<script>
export default {
  name: 'RoomCard',
  props: ['idx'],
  methods: {
    enterRoom () {
      // add player to room
      this.$router.push('waitingRoom')
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
