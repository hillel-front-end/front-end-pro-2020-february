console.log('Lection 23 __ VUE INTRO __');

/*
1. Instance
2. {{}} Interpolations (https://ru.vuejs.org/v2/guide/syntax.html)
3. Expression in nterpolations({{?:}})
3. directives: 
    * v-html="'String with html value'"
    * v-bind:disabled="boolean"
    * v-bind:href="url"
    * v-model
    * v-if="boolean" - v-else-if="boolean" - v-else
    * v-show="boolean"
    * v-for - loop (Work like  for-in), (value, name, index)

4. styles directives: ( HW )
   * v-bind:class="{ 'class-name as string': Boolean, 'another-class-name': Boolean variable, .., }"
   * v-bind:class="['activeClass', errorClassAsVar]"
   * v-bind:style="{ cssPropName: activeColorAsVar, fontSize: n + 'px', matgin: '10px' }"
5. v-on:click,mousenove .. (@click)

6. $set(vm.items, indexOfItem, newValue) // next lesson
*/
// console.log(Vue, 'vue');

var data = {
    hello: 'm',
    z: 123123,
    isMarried: false,
    foo: '<a href="#">111</a>',
    url: 'http://foo.com',
    briz: '11111',
    isShow: false,
    fruits: [
        'apple',
        'orange',
        'asdsad',
        'bbbb'
    ],
    age: 0,
    login: '',
    users: [
        {name: 'Valera - 1', age: 15},
        {name: 'Valera - 2', age: 21},
        {name: 'Valera - 3', age: 30},
    ],
    onMove() {
        console.log('move');
    }
};



function toDo() {
    console.log('click')
    console.log(this, 'this');
    this.users.push({name: this.login, age: this.age});
}

data.toDo = toDo.bind(data);

// setTimeout(() => {
//     data.isMarried  = true;
// }, 2000);

// data.b = 11;

const vue = new Vue(
    {
       el: '#app', //selector, 
       data: data
    }
);

