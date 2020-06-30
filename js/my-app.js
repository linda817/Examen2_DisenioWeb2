// Initialize your app
var app = new Framework7({
    id: 'com.app',
    root: '#app',
    theme: 'md',
    view: {
        pushState: false
    },
    cache: false,
    cacheDuration: 0,
    modalTitle: 'Food Delivery',
    dialog: {
        title: 'Food Delivery',
        buttonOk: 'Aceptar',
    },

    routes: [{
            path: '/home/',
            url: 'index.html',
            name: 'home',
        },
        {
            path: '/about/',
            url: 'about.html',
            name: 'about',
        },
        {
            path: '/perfil/',
            url: 'perfil.html',
            name: 'perfil',
        },
        {
            path: '/carnes/',
            url: 'carnes.html',
            name: 'carnes',
        }

    ]

});

// Export selectors engine
var $$ = Dom7;

$$('#btn-alerta').on('click', function() {
    app.dialog.alert('Hola mundo');

});