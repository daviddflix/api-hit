const product = ['Penne Rigatte', 'Conchiglie', 'Cavatelli', 'Gnocchi', 'Spaghetti', 'Tagliattele' ]
const sauces = [{sauce: 'Pomodoro', description: 'Salsa de Tomate Especial HIT'},
 {sauce: 'Crema', description: ''}, {sauce: 'Arrabiata', description: 'Salsa Pomodoro HIT con Jalapeños'} ,
 {sauce: 'Bolognesa', description: 'Pomodoro HIT con Ragu de Carne'},
 {sauce: 'Pesto', description: 'Albahaca, Parmesano, Nuez y Aceite de Oliva'},
 {sauce: 'Cheddar', description: 'Elaboración Propia de Crema de Cheddar'},
 {sauce: 'Puttanesca', description: 'Pomodoro HIT, Aceitunas Negras, Ajo y Alcaparras'},
 {sauce: 'Oriental', description: 'Vegetales de Estación, Soja, Salsa de Ostras y Aceite de Sesamo'},
 {sauce: 'Curry', description: 'Crema con Pasta de Curry Suave'},
 {sauce: 'Cuatro quesos', description: 'Queso Muzzarella, Azul, Parmesano y Queso Crema'},
 {sauce: 'Crema de espinaca', description: 'Espinacas Salteadas, Crema, Ajo y Queso Crema'},
 {sauce: 'Vodka sauce', description: 'Tomate, Cebolla, Crema y Vodka'},
]
const extra = ['Meatball','Bacon', 'Carne', 'Pollo', 'Queso Parmesano', 'Hongos', 'Aceitunas', 'Jalapeños', 'Tomates Confitados', 'Alcaparras', 'Panes']
const dessert = [{title: 'Cheesecake', picture_url: '/img/Images/cheesecake.jpg', id: 17}, {title: 'Chocotorta', picture_url: '/img/Images/chocotorta.jpg', id: 18}, {title: 'Tiramisu', picture_url: 'img/Images/tiramisu2.jpg', id: 19}]



const beverages = [{title: 'Coca-Cola Light 354ml', price: 230, picture_url: '/img/Drinks/cocalight.jpg', id: 7}, 
{title: 'Coca-Cola Sin Azúcar', price: 270, picture_url: '/img/Drinks/cocasin.webp', id: 8}, 
{title: 'Coca-Cola Sabor Original 354ml', price: 270, picture_url: '/img/Drinks/cocaoriginal.jpg', id: 9}, 
{title: 'Fanta Naranja 354ml', price: 270, picture_url: '/img/Drinks/fanta.webp', id: 10}, 
{title: 'Sprite Lima Limón 354ml', price: 270, picture_url: '/img/Drinks/sprite2.webp', id: 11},  
{title: 'SmartWater Sin Gas 591ml', price: 270, picture_url: '/img/Drinks/smart.jpg', id: 12},
{title: 'Imperial Lager 473ml', price: 350, picture_url: '/img/Drinks/lager.jpeg', id: 13}, 
{title: 'Heineken Regular 473ml', price: 420, picture_url: '/img/Drinks/heicrop.png', id: 14}, 
{title: 'Imperial Amber Lager 473ml', price: 350, picture_url: '/img/Drinks/amber.jpg', id: 15}, 
{title: 'Imperial Ipa 473ml', price: 350, picture_url: '/img/Drinks/ipa2.jpg', id: 16}]

const dessertPrice = 400
const price = 750
const priceExtra = 122
const data = [
    {
     picture_url: '/img/conchiglie.jpg',
     title: 'Conchiglie',
     price: price,
     pastas: product,
     salsas: sauces ,
     toppings: {price: priceExtra, option: extra},
     dessert: {dessert, dessertPrice},
     beverages: beverages
    },
    {
     picture_url:'/img/gno.jpg',
     title: 'Gnocchi',
     price: price,
     pastas: product,
     salsas: sauces ,
     toppings: {price: priceExtra, option: extra}
    },
    {
     picture_url: '/img/oriental.jpg',
     title: 'Spaguetti',
     price: price,
     pastas: product,
     salsas: sauces ,
     toppings: {price: priceExtra, option: extra}
    },
    {
     picture_url: '/img/penne.jpg',
     title: 'Penne Rigate',
     price: price,
     pastas: product,
     salsas: sauces ,
     toppings: {price: priceExtra, option: extra}
    },
    {
     picture_url: '/img/tagliatelli.jpg',
     title: 'Tagliattele',
     price: price,
     pastas: product,
     salsas: sauces ,
     toppings: {price: priceExtra, option: extra}
    },
    {
     picture_url: '/img/272938238_4857053377720643_6162256948801704121_n.jpg',
     title: 'Cavatelli',
     price: price,
     pastas: product,
     salsas: sauces ,
     toppings: {price: priceExtra, option: extra}
    }
]

module.exports = data