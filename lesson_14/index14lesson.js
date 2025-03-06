// ('*') - зірочка означає отримати всі елементи

const allElements = document.querySelectorAll('*');

// stopPropagation() - зупиняє занурення елементу 

allElements.forEach((elem) => {
    elem.addEventListener("click", (event) => {
        if (event.currentTarget.tagName === 'FORM') {
            event.stopPropagation();
        }
        alert(`Сплив: ${elem.tagName}`);
    });
    // elem.addEventListener("click", () => {
    //     alert(`Занурення: ${elem.tagName}`);
    // }, true);
}); 