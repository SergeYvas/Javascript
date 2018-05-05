/* ДЗ 2 - работа с массивами и объеектами */

/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array
 */

function forEach(array, fn, context) {
    for (let i = 0; i < array.length; i++) {
        fn.call(context, array[i], i, array);
    }
}

/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array
 */
function map(array, fn, context) {
    const newArray = [];

    for (let i = 0; i < array.length; i++) {
        newArray.push(fn.call(context, array[i], i, array));
    }

    return newArray;
}

/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array
 */

function reduce(array, fn, initial) {
    let initialValue = initial ? initial : array[0];
    const increm = initial ? 0 : 1;

    for (let i = increm; i < array.length; i++) {
        initialValue = fn(initialValue, array[i], i, array);
    }

    return initialValue;
}

/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */
function upperProps(obj) {
    const result = [];

    for (let key of Object.keys(obj)){
        result.push(key.toUpperCase())
    }
       
    return result;
}

/*
 Задание 5 *:

 Напишите аналог встроенного метода slice для работы с массивами
 Посмотрите как работает slice и повторите это поведение для массива, который будет передан в параметре array
 */

function slice(array, from, to) {
    const len = array.length;
    const result = [];
    let start = from;
    let end = to;

    if (from < 0 && Math.abs(from) < len) {
        start = len - Math.abs(from);
    } else if (from < 0 && Math.abs(from) > len || from === undefined) {
        start = 0;
    }

    if (to < 0 && Math.abs(to) < len) {
        end = len - Math.abs(to);
    } else if (to > len || to === undefined) {
        end = len;
    }
    
    if (to < 0 && Math.abs(to) > len || from > len) {
        return result;
    }

    for (let i = start; i < end; i++) {
        result.push(array[i])
    }

    return result;
}

/*
 Задание 6 *:

 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */

const createProxy = obj => new Proxy(obj, {
    set(obj, prop, value) {
        obj[prop] = value * value;

        return true;
    }
});

export {
    forEach,
    map,
    reduce,
    upperProps,
    slice,
    createProxy
};
