// Делегування подій

// const allNavigationButtons = document.querySelector('.main-navigation__button-item');
// allNavigationButtons.forEach((button) => {
//     button.addEventListener('click', (event) => {
//         const targetButton = event.target;
    //     allNavigationButtons.forEach((navButton) => {
    //         navButton.classList.remove('.main-navigation__button-item_selected');
    //     });
    //     targetButton.classList.add('.main-navigation__button-item_selected');
    // // });
// });

const allNavigationButtons = document.querySelector('.main-navigation__button-item');
const mainNavigation = document.querySelector('.main-navigation');
mainNavigation.addEventListener('click', (event) => { 
    console.log('target'.event.target);
    const isNavButton = event.target.closest('.main-navigation__button');
    console.log('Клік на контейнер');
    if (isNavButton) {
        // do something
        allNavigationButtons.forEach((navButton) => {
            navButton.classList.remove('.main-navigation__button-item_selected');
        });
        event.target.classList.add('.main-navigation__button-item_selected'); 
    }
});

const firstNavButton = document.querySelector('.main-navigation__button-item');
firstNavButton.addEventListener('click', (event) => {
    console.log('First Button', event.target);
})

document.body.addEventListener('click', (event) => {
    console.log('Клік на  body', event.target);
})