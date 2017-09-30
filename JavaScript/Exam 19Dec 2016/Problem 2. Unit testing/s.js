let makeList = require('./given');

let expect = require('chai').expect;

describe("List Unit tests", () => {
    let myList = {};
    beforeEach(function () {
        myList = makeList();  
    });

    it("Add element to Left", () => {
        myList.addLeft('test');
        expect(myList.toString()).to.equal('test');
    });

    it("Add element Right", () => {
        myList.addRight('test');
        expect(myList.toString()).to.equal('test');
    });

    it("Add 3 elements", () => {
        myList.addRight(1);
        myList.addRight(2);
        myList.addLeft(0);
        expect(myList.toString()).to.equal('0, 1, 2');
    });

    it("Clear Array", () => {
        myList.addLeft(1);
        myList.addLeft(5);
        myList.addRight(7);
        myList.clear();
        expect(myList.toString()).to.equal('');
    });

    it("toString With one element", () => {
        myList.addLeft(2);
        expect(myList.toString()).to.equal('2');
    });

    it("2 left one right", () => {
        myList.addLeft(1);
        myList.addLeft(2);
        myList.addRight(0);
        expect(myList.toString()).to.equal('2, 1, 0');
    });
});