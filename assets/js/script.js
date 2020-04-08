document.querySelector('.open-menu').addEventListener('click', e => {

    document.querySelector('.menu').classList.add('open');

});

document.querySelector('.close-menu').addEventListener('click', e => {

    document.querySelector('.menu').classList.remove('open');

});

document.querySelector('.backdrop').addEventListener('click', e => {

    document.querySelector('.menu').classList.remove('open');

});