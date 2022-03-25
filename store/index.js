export const state = () => ({
  cart: [],
})

export const mutations = {
  addToCart(state, product) {
    if(!state.cart.find(p => p.id === product.id)) {
      state.cart.push(product)
    }
    else {
      alert('Product already in cart')
      console.log(state.cart);
    }
  },
  removeFromCart(state, id) {
    state.cart = state.cart.filter(product => product.id !== id)
  },
}

export const actions = {
  // setUser({ commit }, user) {
  //   commit('setUser', user)
  // },
  // setToken({ commit }, token) {
  //   commit('setToken', token)
  // }
  addToCart({ commit }, product) {
    commit('addToCart', product)
  },
  removeFromCart({ commit }, id) {
    commit('removeFromCart', id)
  }
}