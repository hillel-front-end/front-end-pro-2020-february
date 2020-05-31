/*  
* Формы:
    checkboxes + array
    radio
    select + dynemic options

* Модификаторы(v-model.):
    .lazy (change)
    .number (parseFloat)
    .trim,

    .lazy.namber

* События(additional):
    .stop
    .prevent
    .self

    + contextmenu
    + on:keyup
        .enter
        .tab
        .delete (ловит как «Delete», так и «Backspace»)
        .esc
        .space
        .up
        .down
        .left
        .right

        -----
        .ctrl
        .alt
        .shift
* DOM original refs(form)     
* mixins

*/


const vue = new Vue({
    el: '#app',
    data: {
        formData: {
            password: '',
            login: ''
        },
        checkboxes: [],
        value: '',
        checkbox: '',
        radio: '',
        select: '',
        options: [
            {text: 'Киев', value:'07100'},
            {text: 'Славутич', value: '07200'}
        ],
        city: '',
        cityCode: '',
        foo: ''
    },
    methods: {
        onClick() {
            this.options.push({
                value: this.cityCode,
                text: this.city
            });

            this.clear();
        },
        clear() {
            this.city = '';
            this.cityCode = '';
        },
        gotTo(event) {
            console.log(event.type, 'event')
            // console.log(str, 'str');
            
        },

        formSubmit() {
            console.log('submit')
            console.log(this.$refs.foo, 'refs');
        }
    }
});


//perseInt()
//parseFlot()
