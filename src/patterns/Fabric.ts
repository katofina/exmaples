class Low {
    height: number;
    width: number;
    constructor(width: number) {
        this.width = width;
        this.height = 2;
    }
    increase() {
        this.height++;
    }
};

class Middle {
    height: number;
    width: number;
    constructor(width: number) {
        this.width = width;
        this.height = 4;
    }
    change() {
        this.height = Math.floor(Math.random() * 10);
    }
};

class High {
    height: number;
    width: number;
    constructor(width: number) {
        this.width = width;
        this.height = 8;
    }
    decrease() {
        this.height--;
    }
};//There are several constructors which we need to use:
//const newHigh = new High(5); const newMiddle = new Middle(5); const newLow = new Low(5);

const classFactory = {
    low: (width: number) => new Low(width),
    middle: (width: number) => new Middle(width),
    high: (width: number) => new High(width)
};// Now all objects will be created from this one

const newLow = classFactory.low(5);
const newMiddle = classFactory.middle(5);
const newHigh = classFactory.high(5);//you don't depend on the name of the contructor

console.log(newHigh, newMiddle, newLow);

//We can create abstract factory:

class Factory {
    createLow() {}
    createMiddle() {}
    createHigh() {}
};

class LowDiv extends Low {
    constructor(width: number) {
        super(width);
        console.log('create div');
    }
}; 
class LowSection extends Low{
    constructor(width: number) {
        super(width);
        console.log('create section');
    }
}; 
// MiddleDiv, MiddleSection, HighDiv, HighSection

class DivFactory extends Factory {
    createLow() {// fabric methods
        return new LowDiv(5);
    } // + createHigh, createMiddle
};

class SectionFactory extends Factory {
    createLow() { //fabric methods
        return new LowSection(5);
    } // = createHigh, createMiddle
};

const divFactory = new DivFactory();
const sectionFactory = new SectionFactory();
const lowDiv = divFactory.createLow();
const lowSection = sectionFactory.createLow();
console.log(lowDiv, lowSection);