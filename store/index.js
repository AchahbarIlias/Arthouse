export const state = () => ({
  cart: [],
  user: {},
})

export const mutations = {
  addToCart(state, product) {
    if(!state.cart.find(p => p.ProductID === product.ProductID)) {
      state.cart.push(product)
    }
    else {
      alert('Product already in cart')
      console.log(state.cart);
    }
  },
  removeFromCart(state, id) {
    state.cart = state.cart.filter(p => p.ProductID !== id)
  },
  setUser(state, user) {
    state.user = user
  }
}

export const actions = {
  addToCart({ commit }, product) {
    commit('addToCart', product)
  },
  removeFromCart({ commit }, id) {
    commit('removeFromCart', id)
  },
  setUser({ commit }, user) {
    commit('setUser', user)
  },
}