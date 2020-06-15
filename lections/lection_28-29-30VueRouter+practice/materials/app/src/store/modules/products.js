export default  {
    state: {
        products: []
    },
    mutations: {
        'SET_PRODUCTS'(state, payload) {
            state.products = payload;
        }
    },
    getters: {
        'GET_PRODUCTS'({products}) {
            return products;
        }
    },
    actions: {
        async asyncSetProducts({commit}, payload) {
            const response = await fetch(`http://localhost:3003/get-products?id=${payload}`);
            const products = await response.json();
            console.log(products, 'products');
            commit('SET_PRODUCTS', products);
        },
        async asyncSaveNewProduct() {

        }
    }
}