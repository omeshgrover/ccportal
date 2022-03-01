import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  	state: {
    	card: {
			number: '',
			validity: '',
			cvv: '',
			username: ''
		}
  	},
	getters: {
		getCardDetails: state => state.card
	},
	mutations: {
		setCardDetails(state, payload) {
			state.card = payload;
		}
	},
	actions: {
		setCardDetails(state, data) {
			state.commit('setCardDetails', data)
		}
	},
	modules: {
	}
});