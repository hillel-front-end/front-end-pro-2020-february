# Изучить материал
+ https://learn.javascript.ru/keyboard-events
+ https://learn.javascript.ru/multi-insert
+ https://learn.javascript.ru/event-bubbling
+ https://learn.javascript.ru/event-delegation
+ https://learn.javascript.ru/behavior
+ https://learn.javascript.ru/modifying-document#ustarevshie-metody-vstavki-udaleniya
# Лекция
1) 
	data = { 
		name: 'menu', 
		type: 'row|column', 
		items: [
			{
				title: 'title 1',
				handler: 'ActionAdd'
			},
			{
				title: 'title 2',
				handler: 'ActionSaveAs'
			},
			{
				title: 'title 3',
				handler: 'ActionExit'
			}
		]
	}

		actions = {
			ActionAdd: function() {},
			ActionSaveAs: function() {},
			ActionExit: function() { console.log('ActionExit')}
		}

		actions[ 'ActionAdd']


1)Создать вертикальное или горизонтальное (в зависимости от свойства type) меню, в котором будут элементы из свойства items.


2) hander - хранит название функции, которая выполнится при нажатии на пункт меню.
