import {mycompose, koacompose} from './compose.js';

function a (context, next) {
    console.log('a-start');
    next();
    console.log('a-end');
}

function b (context, next) {
    console.log('b-start');
    next();
    console.log('b-end');
}

function c (context, next) {
    console.log('c-start');
    next();
    console.log('c-end')
}
const x = koacompose([a, b ,c]);
x();