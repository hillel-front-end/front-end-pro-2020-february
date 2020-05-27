

Vue.component('custom-select', {
    data() {
        return {
            text: '',
            items: [],
            original:  [
                { text: 'Kyiv', value: '0'},
                { text: 'Kharkov', value: '1'},
                { text: 'Slavutich', value: '2'}, 
                { text: 'Slavutich-2', value: '2'}, 
                { text: 'Odessa', value: '3'},
                { text: 'Odessa-1', value: '3'}
            ],
        }
    },
    methods: {
        getText(text) {
            this.text = text;
            this.onFilter(text);
        },
        onFilter(value) {
            this.items = this.original.filter(item => item.text.toLowerCase().indexOf(value.toLowerCase()) >= 0);
        }
    },
    created() {
        this.items = this.original.slice();
    },
    template: `
        <div class="custom-select">
            <select-input :textValue="text" @filter="onFilter"></select-input>
            <select-content @set-text="getText" :items="items"> </select-content>
        </div>
    `
});


Vue.component('select-input', {
    props: {
        textValue: String
    },
    data() {
        return {
            value: ''
        }
    },
    methods: {
        onInput() {
            console.log(this.value, 'text');
            this.$emit('filter', this.value);
        }
    },
    watch: {
        textValue(value) { 
            this.value = value;
        }
    },
    template: `
        <div class="select-input-content">
            <input type="text" class="select-input" v-model="value" @input="onInput">
        </div>
    `   
});


Vue.component('select-content', {
    props: ['items'],
    methods: {
        onClick(item) {
            this.$emit('set-text', item.text);
        }
    },
    template: `
        <div class="select-content">
           <section v-for="item in items" @click="onClick(item)"> {{item.text}} </section>
        </div>
    `
});


const vue = new Vue({
    el: '#app'
});