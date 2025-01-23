interface KeyEvent {
    type: 'key';
    keyCode: number;
}

interface ClickEvent {
    type: 'click';
    x: number;
    y: number;
}

type Event1 = ClickEvent | KeyEvent;

const clickEvent: ClickEvent = { type: 'click', x: 100, y: 200 };
const keyEvent: KeyEvent = { type: 'key', keyCode: 13 };

const handleEvent = (event: Event1) => {
    if (isClickEvent(event)) {
        console.log(`Click event at coordinates (${event.x}, ${event.y})`);
    } else if (isKeyEvent(event)) {
        console.log(`Key event with key code ${event.keyCode}`);
    } else {
        throw new Error("Unknown event");
    }
};

// Type guard для проверки, является ли событие ClickEvent
function isClickEvent(event: Event1): event is ClickEvent {
    return event.type === 'click';
}

// Type guard для проверки, является ли событие KeyEvent
function isKeyEvent(event: Event1): event is KeyEvent {
    return event.type === 'key';
}

handleEvent(clickEvent); // Output: Click event at coordinates (100, 200)
handleEvent(keyEvent); // Output: Key event with key code 13
