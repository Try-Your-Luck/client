<template>
  <div class="col-lg-3">
    <b-card :class='{"light" : (!this.isGreen), "success" : (this.isGreen)}' text-variant="black" header="USERNAME" class="text-center">
      <b-button @click.prevent="ready" variant="primary">Ready</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'UserCard',
  props: ['User'],
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

<style>
.light {
  background-color: white !important;
}
.success {
  background-color: aquamarine !important;
}
</style>
