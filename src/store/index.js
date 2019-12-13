import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyD4ywLKtUP9kv6ioWqFZZrWPCWCIiU2y7w',
  authDomain: 'hacktiv8-immersive-c533c.firebaseapp.com',
  databaseURL: 'https://hacktiv8-immersive-c533c.firebaseio.com',
  projectId: 'hacktiv8-immersive-c533c',
  storageBucket: 'hacktiv8-immersive-c533c.appspot.com',
  messagingSenderId: '358912537201',
  appId: '1:358912537201:web:ed107e26167d0d0237e1d0'
}
firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: '',
    rooms: [],
    currentRoom: '',
    listPlayers: []
  },
  mutations: {
		updateUsername (state, payload) {
			state.username = payload.username
    },
    saveRooms (state, roomList) {
      state.rooms = roomList
    },
    setCurrentRoom (state, payload) {
      state.currentRoom = payload
    },
    setListPlayers (state, payload) {
      state.listPlayers = payload
    }
  },
  actions: {
    getRooms: (context) => {
      db.collection('rooms')
      .onSnapshot(function (querySnapshot) {
        let rooms = []
        querySnapshot.forEach(function (doc) {
          rooms.push({ id: doc.id, ...doc.data() })
        })
        context.commit('saveRooms', rooms)
      })
    },
    createRoom (context, payload) {
      return db.collection('rooms').add({
        name: payload,
        players: [{ 
          username: context.state.username,
          status: 'waiting',
          balance: 25
        }]
      }).then(ref => {
          context.commit('setCurrentRoom', ref.id)
        })
    },
    fetchPlayers (context) {
      db.collection('rooms').doc(context.state.currentRoom)
        .onSnapshot(function (querySnapshot) {
          context.commit('setListPlayers', querySnapshot.data().players)
        })
    },
    enterRoom (context, payload) {
      context.commit('setCurrentRoom', payload)
      let temp = context.state.listPlayers
      temp.push({
        username: context.state.username,
        balance: 25,
        status: 'waiting'
      })
      db.collection('rooms').doc(payload).update({ players: temp })
    }
  },
  computed: {
    getUser() {
      state.username = localStorage.getItem('userLogin')
    }
  },
  modules: {
  }
})
