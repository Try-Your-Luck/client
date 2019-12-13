import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
import 'firebase/firestore'
import router from '../router/index.js'

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
    listPlayers: [],
    udah: ''
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
          username: localStorage.getItem('userLogin'),
          status: 'waiting',
          balance: 25
        }],
        status: 'waiting'
      }).then(ref => {
          context.commit('setCurrentRoom', ref.id)
          localStorage.setItem('currentRoom', payload)
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
      localStorage.setItem('currentRoom', payload)
      db.collection('rooms').doc(payload).update({
        players: firebase.firestore.FieldValue.arrayUnion({
          username: localStorage.getItem('userLogin'),
          balance: 25,
          status: 'waiting'
        })
      })
        
    },
    updateStatus (context) {
      let datum = db.collection('rooms').doc(localStorage.getItem('currentRoom')).get() 
        .then(function(result) {
          let target = result.data().players
          target.forEach(function(player, index) {
            if (player.username === localStorage.getItem('userLogin')) {
              player.status = 'ready'
            }
          })
          db.collection('rooms').doc(localStorage.getItem('currentRoom'))
            .update({
              players: target
            })
        })
    },
    mulai (context) {
      db.collection('rooms').doc(localStorage.getItem('currentRoom'))
        .update({
          status: 'ready'
        })
    },
    cekStatusRum (context) {
      db.collection('rooms').doc(localStorage.getItem('currentRoom'))
        .onSnapshot(function(qSnap) {
          if (qSnap.status === 'ready') {
            context.state.udah = 'ready'
          }
        })
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
