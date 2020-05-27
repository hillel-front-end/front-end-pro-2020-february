var a = new Vue({ // Вызывается конструктор new Vue()
  el:'#app',
  data: {
    name: "Valera",
    list: [1,2,3]
  },
  beforeCreate () {
    console.log('beforeCreate', this); // Перед созданием объекта Vue вызывается метод beforeCreate().  в this - еще не доступны данные из data
  },

  /*
    Далее происходит инициализация объекта Vue, установка его данных и методов (например: данные из data)
  */

  created () { // После создания объекта Vue вызывается метод created(), в this - уже доступны данные из data
    console.log('created', this);
  },

  /*
    Далее выполняется компиляция шаблона el
  */

  beforeMount () { //Вызывается метод beforeMount() Перед тем как Элемент html, к которому прикреплен объект Vue, заменяется скомпилированным шаблоном
    console.log('beforeMount');
    debugger;
  },

  mounted () { //  Содержимое el - заменено скомпелированным шаблоном(добалвены все данные из data), и мы можем с ним работать
    console.log('mounted', this);
  },

  beforeUpdate () { // Производится повторный рендеринг DOM для его соответствия виртуальному DOM
    console.log('beforeUpdate');
  },

  updated () { // Вызывается метод updated(). DOM на веб-странице обновлен, и мы продолжаем работать с приложением Vue.js
    console.log('updated');
  }
});