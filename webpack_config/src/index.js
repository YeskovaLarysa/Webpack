import './scss/main.scss'
import User from './user'
import {multTwo, multTree} from './functions'
import $ from 'jquery'

import {arrAscendingSort, arrDescendingSort} from './array-utils'

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

const points = [4, 10, 10, 1, 32, 3, 5, 70];
console.log('points', points);
console.log('arrAscendingSort', arrAscendingSort(points));

console.log('points', points);
console.log('arrDescendingSort', arrDescendingSort(points));
