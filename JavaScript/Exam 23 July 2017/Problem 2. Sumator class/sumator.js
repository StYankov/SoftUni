class Sumator {
    constructor() {
        this.data = [];
    }
    add(item) {
        this.data.push(item);
    }
    sumNums() {
        let sum = 0;
        for (let item of this.data)
            if (typeof (item) === 'number')
                sum += item;
        return sum;
    }
    removeByFilter(filterFunc) {
        this.data = this.data.filter(x => !filterFunc(x));
    }
    toString() {
        if (this.data.length > 0)
            return this.data.join(", ");
        else
            return '(empty)';
    }
}

// let r = new Sumator();
// r.add(Infinity);
// r.add(5);
// console.log(r.sumNums())

// r.removeByFilter();

// console.log(r.toString());


let expect = require('chai').expect;

describe("Sumator Unit tests", () => {
    let list;
    beforeEach(function () {
        list = new Sumator();
    });
    it("Empty array on initializaiton", () => {
        expect(list.toString()).to.equal('(empty)');
    });

    it("Element addition", () => {
        list.add(1);
        expect(list.toString()).to.equal('1');
    });

    it("Different element addition toString", () => {
        list.add(1);
        list.add(2);
        list.add('three');
        list.add([1,2,3]);
        expect(list.data.length).to.equal(4);
    });

    it("Different element Sum", () => {
        list.add(1);
        list.add(2);
        list.add('three');
        list.add(4);
        expect(list.sumNums()).to.equal(7);
    });

    it("No Numbers Sum", () => {
        list.add('1dasd');
        list.add(new Date());
        list.add('three');
        list.add({ god: 'y' });
        expect(list.sumNums()).to.equal(0);
    });

    it("Filter remove numbers", () => {
        list.add(1);
        list.add(2);
        list.add(3);
        list.add({});
        list.add('string');
        list.add({});
        list.removeByFilter(x => typeof x === 'number');
        expect(list.toString()).to.equal('[object Object], string, [object Object]');
    });

    it("No filter func", () => {
        list.add(1);
        list.add(2);

        expect(() => list.removeByFilter()).to.throw(TypeError);
    });

    it('has functions attached to prototype', function () {
        expect(Object.getPrototypeOf(list).hasOwnProperty('add')).to.equal(true, "Missing add function");
        expect(Object.getPrototypeOf(list).hasOwnProperty('sumNums')).to.equal(true, "Missing sumNums function");
        expect(Object.getPrototypeOf(list).hasOwnProperty('removeByFilter')).to.equal(true, "Missing removeByFilter function");
        expect(Object.getPrototypeOf(list).hasOwnProperty('toString')).to.equal(true, "Missing toString function");
    });

});