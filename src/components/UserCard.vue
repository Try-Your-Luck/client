<template>
  <div>
    <b-card :class='{"light" : (!this.isGreen), "success" : (this.isGreen)}' text-variant="black" :header="playerData.username" class="text-center">
      <b-button v-if="jeneng === playerData.username" @click.prevent="ready" variant="primary">Ready</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'UserCard',
  props: ['playerData'],
  data () {
    return {
      isGreen: false,
      waiting: true,
      jeneng: localStorage.getItem('userLogin')

    }
  },
  methods: {
    ready () {
      this.isGreen = true
      this.$store.dispatch('updateStatus')
      this.waiting = false
      
    }
  }

}
</script>

<style scoped>
.light {
  background-color: white !important;
}
.success {
  background-color: aquamarine !important;
}
</style>
