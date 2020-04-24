﻿# Изучить материал
    + https://learn.javascript.ru/events-change-input
    + https://learn.javascript.ru/mouse-events-basics
    + https://learn.javascript.ru/mousemove-mouseover-mouseout-mouseenter-mouseleave
    + https://learn.javascript.ru/size-and-scroll
    + https://learn.javascript.ru/coordinates
# Практика

1) Реализовать калькулятор, в котором есть слайдер (`input type=”range”`) и поле ввода (`input type=”number”`).

Изменяя состояние range меняется состояние поля ввода `number`. И наоборот.

Реализовать блок-диаграмму, который в пикселях будет отображать значение range.
Например - range выбрали число 83, высота блока-диаграммы будет 83 пикселя.

![Alt Text](/src/images/img_3.png)

Красный блок - количество комиссии. Комиссия вычисляется по формуле:

    (range < 20) -> 2%
    (20 - 50)  -> 4%
    (50 - 75)  -> 6%
    (75 - 100)  -> 8%

Красный блок отображает количество комиссии. Например Значение выбора 100, комиссия будет 8%. Результирующая сумма: 108. Высота красного блока - 8px 
