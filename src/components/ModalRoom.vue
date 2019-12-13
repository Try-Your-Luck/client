<template>
<div>
  <b-button
    v-b-modal.kanban-form class="mb-2"
  >Create Room
  </b-button>
    <b-modal
      id="kanban-form"
      ref="modal"
      title="Create New Task"
      v-model="show"
    >
    <form @submit.prevent="createRoom">
      <b-form-group
        label="Room Name"
        label-for="room-name-input"
        invalid-feedback="Title is required"
      >
        <b-form-input
          id="room-name-input"
          v-model="roomName"
          required
        ></b-form-input>
      </b-form-group>

    </form>
    <template v-slot:modal-footer>
      <div class="w-100">
        <b-button
          variant="primary"
          size="sm"
          class="float-right"
          @click="createRoom"
        >
          Submit
        </b-button>
      </div>
    </template>
  </b-modal>
</div>
</template>

<script>
export default {
  name: 'ModalForm',
  data () {
    return {
      show: false,
      roomName: ''
    }
  },
  methods: {
    createRoom () {
      this.$store.dispatch('createRoom', this.roomName)
      this.show = false
    }
  }
}
</script>

<style>

</style>
