import './scss/main.scss'
import User from './user'
import {multTwo, multTree} from './functions'
import $ from 'jquery'

console.log('Hallo world');

const foo = (name) => {
    console.log(`hello ${name}`);
}

foo('asdad');
foo('Test');

const layout = `<div class='items'>
    <div class='item'>item</div>
    <div class='item'>item</div>
    <div class='item'>item</div>
</div>`

// $('#app').html(layout);
document.querySelector('#app').innerHTML = layout

const john = new User ("John")
john.printName()

console.log(multTwo(3));
