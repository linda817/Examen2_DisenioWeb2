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
            path: '/producto/',
            url: 'producto.html',
            name: 'producto',
        },
        {
            path: '/perfil/',
            url: 'perfil.html',
            name: 'perfil',
        },
        {
            path: '/amor/',
            url: 'amor.html',
            name: 'amor',
        }

    ]

});

// Export selectors engine
var $$ = Dom7;

$$('#btn-alerta').on('click', function() {
    app.dialog.alert('Hola mundo');

});