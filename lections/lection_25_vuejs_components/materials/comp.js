Vue.component('navigation-app', {
    data() {
        return {
            hello: 'world',
            items: [
                'save',
                'edit',
                'close',
                'open'
            ]
            g: null
        }
    },
    methods: {
        onFoo(value) {
            console.log(value, 'value from --- parent');
        }
    },
    template: `
        <div class="navigation">
            <navigation-item  v-for="item in items" @foo="onFoo"  :name="item"> </navigation-item>
        </div>
    `
});



Vue.component('navigation-item', {
    props: {
        name: String
    },
    data() {
        return {
            buttonName: 'click'
        }
    },
    methods: {
        onClick(name) {
            console.log(name, 'name --- in child');

            this.$emit('foo', name);
        }
    },
    template: `
         <span class="navigation__item" @click="onClick(name)"> {{ name }} </span>
    `
});

const vue = new Vue({
    el: '#app'
});