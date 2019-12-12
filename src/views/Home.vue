<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <UserCard />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import UserCard from '../components/UserCard'

export default {
  name: 'home',
  components: {
    HelloWorld,
    UserCard
  }
}
</script>
