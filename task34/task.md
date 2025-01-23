Типы и объединения (Union Types)
Создай тип Event, который может быть либо ClickEvent, либо KeyEvent. ClickEvent должен иметь поля type (со значением 'click') и x и y (координаты клика). KeyEvent должен иметь поля type (со значением 'key') и keyCode (код нажатой клавиши). Затем создай функцию handleEvent, которая принимает объект типа Event и выводит соответствующее сообщение в консоль.

```
const clickEvent: ClickEvent = { type: 'click', x: 100, y: 200 };
const keyEvent: KeyEvent = { type: 'key', keyCode: 13 };

handleEvent(clickEvent); // Output: Click event at coordinates (100, 200)
handleEvent(keyEvent); // Output: Key event with key code 13

```








