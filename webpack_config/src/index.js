console.log('Hallo world');

const foo = (name) => {
    console.log(`hello ${name}`);
}

foo('asdad');
foo('Test');

class User {
    constructor(name) {
        this.__name = name;

    }
    printName() {
        console.log(this.__name);
    }
}
