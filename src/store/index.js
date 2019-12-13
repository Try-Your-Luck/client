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
    rooms: []
  },
  mutations: {
		updateUsername (state, payload) {
			state.username = payload.username
    },
    saveRooms (state, roomList) {
      state.rooms = roomList
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
      db.collection('rooms').doc().set({
        name: payload,
        players: [{ 
          username: context.state.username,
          status: 'waiting',
          balance: 25
        }]
      })
    }
  },
  modules: {
  }
})
