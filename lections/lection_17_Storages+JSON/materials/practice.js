function menuModule() {
    var data = { 
        name: 'menu', 
        type: 'column', 
        items: [
            {
                title: 'Add',
                handler: 'ActionAdd'
            },
            {
                title: 'Save',
                handler: 'ActionSaveAs',
                type: 'column',
                items: [
                    {
                        title: 'Save AS - 2',
                        handler: 'ActionSaveAs'
                    },
                    {
                        title: 'Save AS - 2.2',
                        handler: 'ActionSaveAs'
                    }
                ]
            },
            {
                title: 'Exit',
                handler: 'ActionExit'
            }
        ]
    };

    
    var actions = {
        ActionAdd: function() {console.log('ActionAdd')},
        ActionSaveAs: function() {console.log('ActionSaveAs')},
        ActionExit: function() { console.log('ActionExit')}
    }


    function MenuComponent(model, actions) {
        this.model = model;
        this.actions = actions;
        this.menu = null;
    }

    MenuComponent.prototype.makeMenuContainer = function(type) {
        var ul = document.createElement('ul');
            ul.classList.add(type || 'column');

        return ul;
       
    }

    MenuComponent.prototype.makeMenuItems = function(items) {
        var fragment = document.createDocumentFragment();

        for(var i = 0; i < items.length; i++) {
            var item = items[i];
            var li = document.createElement('li');
                li.innerHTML = item.title;

            if (item.items) {
               var innerUl = this.makeMenu(item);
               li.append(innerUl);
            }

            li.addEventListener('click', this.actions[item.handler]);
            fragment.append(li);

        }
        
        return fragment;
    }

    MenuComponent.prototype.onInitMenu = function() {
        this.menu = this.makeMenu(this.model);

        return this;
    }

    MenuComponent.prototype.makeMenu = function(model) {
        var container = this.makeMenuContainer(model.type);
        var items = this.makeMenuItems(model.items);
        container.append(items);

      return container;
    }
    

    MenuComponent.prototype.render = function(selector) {
        document.querySelector(selector).append(this.menu);
    }


    data.type = 'column';

    var menu = new MenuComponent(data, actions);

    menu
    .onInitMenu()
    .render('.menu-container');

    data.type = 'row';

  new MenuComponent(data, actions)
    .onInitMenu()
    .render('.menu-container');

  new MenuComponent(data, actions)
    .onInitMenu()
    .render('.menu-container');

}

window.onload = menuModule;