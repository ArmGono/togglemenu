# jQuery toggleMenu

Позволяет создовать мобильное меню при определенном разрешении экрана.
Плагин создает "бургер" для переключения меню.

Вызов $(selector).togglemenu();

### Пример
Для следующей разметки меню
```html
<div id="my-menu-wrapper">
  <ul class="menu">
    <li><a href="#">Элемент 1</a></li>
    <li><a href="#">Элемент 2</a></li>
  </ul>
</div>
``` 
запустить плагин можно следующим способом:

```javascript
$('#my-menu-wrapper').toggleMenu();
```
### Подключение
```html
 <link href="path_to_file/jquery.togglemenu.css" rel="stylesheet" />
 <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
 <script src="path_to_file/jquery.togglemenu.min.js"></script>
```

### Опции 

Опция | Значение по умолчанию | Описание
----- | --------------------- | --------
breakpoint| 960 | Размер экрана, при котором меню должно сворачиваться
title| 'Меню' | Заколовок в блоке с раскрывающемся меню
selector| 'ul.menu' | Селектор блока(списка) основных элементов меню
burger| '<i class="toggle-menu-burger"></i>' | HTML разметка бургера
burgerStyles| {} | Доп. стили для бургера
jsHide| true | Скрытие блока меню с помощью js, при значении false при скрытии добавляет класс toggle-menu-hide
appendItems| false | Добавить пункты к раскрытому меню, можно передать html элемент или массив элементов для добавления в пункты меню
appendBlock| {} | Добавить доп. блок после основного меню (принимает jQuery объект)
burgerParent| false | Указать к какому элменту прикреплять бургер (по умолчанию добавляется после элемента на котором запускали


### Классы

После запуска плагина добавляются следующие классы и ID

Класс/Id | Элемент | Описание
-------- | ------- | --------
.toggle-menu-inited | body | Доавляется при запуске плагина
.toggle-menu-is-desktop | body | Дбавляется когда разрешение больше чем breakpoint
.toggle-menu-is-mobile | body | Добаляется когда разрешение меньше чем breakpoint
.toggle-menu-opened | body | Добавляется когда меню раскрыто
.toggle-menu-mobile | div | Добавляется на менюшку, которая должна раскрываться
.toggle-menu-mobile-hide | div | Добавляется на менюшку, которая должна раскрываться для того, чтобы скрыть ее
.toggle-menu-close | a | Добавляется на ссылку для закрытия меню
.toggle-menu-title | div | Добавляется на заголовок блока в менюшке

### Примеры реализации
Примеры будут позже.. 
