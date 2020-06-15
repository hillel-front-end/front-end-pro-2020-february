<template>
    <div class="products">
        <button @click="showProductsModal(true)"> Add Product</button>

        <add-product-modal v-show="isShowModal">
            <template v-slot:header>
                <div>
                    Add Product
                </div>
            </template>
            <template v-slot:content>
                <div>
                    <label v-for="(value, key) in requestData">
                        {{key}}
                        <input type="text" :name="key" v-model="requestData[key]">
                    </label>
                </div>
            </template>
            <template v-slot:footer>
                <div>
                    some footer
                    <button  @click="showProductsModal(false)"> close </button>
                    <button  @click="saveProduct(false)"> save product </button>
                </div>
            </template>
        </add-product-modal>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';
    import Modal from "../../components/general/Modal";

    export default {
        name: "Products",
        data() {
          return {
              isShowModal: false,
              requestData: {
                  model: '',
                  coast: ''
              }
          }
        },
        methods: {
          ...mapActions(['asyncSetProducts']),
            showProductsModal(value) {
                this.isShowModal = value;
            },
            saveProduct() {
              const {coast, model} = this.requestData;

              if (coast && model) {

              }
            }
        },
        components: {
          addProductModal: Modal
        },
        computed: {
          ...mapGetters(['GET_USER_ID'])
        },
        mounted() {
            this.asyncSetProducts(this.GET_USER_ID);
        }
    }
</script>

<style scoped>

</style>

//passportJS