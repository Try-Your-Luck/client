<template>
  <div class="jumbotron">
		<div class="d-flex justify-content-center">
		  <img src="@/assets/try-your-luck-logo.png">
		</div>
		<div class="container pt-5" style="text-align: center">
			<form class="form-signin" @submit.prevent="register">
				<div class="form-group">
				  <input type="text" class="form-control" placeholder="Who are you?" v-model="username">
				</div>
				<div class="form-group">
				  <input type="submit" class="btn btn-dark" value="Register">	
				  <hr>
				</div>
			</form>	
		</div>			
	</div>
</template>

<script>
export default {
  name: 'home',
	data: function () {
		return {
			username: ''
		}
	},
	methods: {
		register () {
			localStorage.setItem('userLogin', this.username)
			// this.$store.commit('updateUsername', { username: this.username })
			this.$router.push({ name: 'lobby' })
		}
	}
}
</script>

<style scoped>
.form-signin {
	width: 50%;
	padding: 15px;
	margin: auto;
}
</style>
