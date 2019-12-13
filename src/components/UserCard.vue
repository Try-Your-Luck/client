<template>
  <div>
    <b-card :class='{"light" : (!this.isGreen), "success" : (this.isGreen)}' text-variant="black" :header="playerData.username" class="text-center">
      <b-button @click.prevent="ready" variant="primary">Ready</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'UserCard',
  props: ['playerData'],
  data () {
    return {
      isGreen: false
    }
  },
  methods: {
    ready () {
      this.isGreen = true
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
