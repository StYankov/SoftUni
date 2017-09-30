let StringBuilder = require('./StringBuilder');

let expect = require('chai').expect;

describe("StringBuilder Unit Tests", () => {
    let newString;
    beforeEach(function () {
        newString = new StringBuilder();
    });
    it("Empty initialization", () => {
        expect(newString._stringArray.length).to.equal(0);
    });
    it("Empty initialization", () => {
        expect(newString.toString().length).to.equal(0);
    });
    it("Bad object param initialization", () => {
        expect(() => newString = new StringBuilder(new Date())).to.throw(TypeError);
    });
    it("String Initializaiton", () => {
        newString = new StringBuilder('swap');
        expect(newString.toString().length).to.equal(4);
    });
    it("Append with bad object", () => {
        expect(() => newString.append(new Date())).to.throw(TypeError);
    });
    it("Append Twice", () => {
        newString.append("G");
        newString.append("osho");
        expect(newString.toString()).to.equal('Gosho');
    });
    it("Prepend", () => {
        newString.append("second");
        newString.prepend("first");
        expect(newString.toString()).to.equal("firstsecond");
    });

    it("Prepend bad OBJ", () => {
        newString.append("Max");
        expect(() => newString.prepend(new Date())).to.throw(TypeError);
    });

    it("Prepend append prepend", () => {
        newString.prepend("one");
        newString.append("two");
        newString.prepend("zero");
        expect(newString.toString()).to.equal("zeroonetwo");
    });

    it("Insert At", () => {
        newString.append("asd");
        newString.insertAt("22", 1);
        expect(newString.toString()).to.equal("a22sd");
    });

    it("Insert At index > str.length", () => {
        newString.append("asd");
        newString.insertAt("22", 6);
        expect(newString.toString()).to.equal("asd22");
    });

    it("Insert with negative index", () => {
        newString.append("asd");
        newString.insertAt("22", -6);
        expect(newString.toString()).to.equal("22asd");
    });

    it("Remove Normal", () => {
        newString.append("0123456");
        newString.remove(0, 2);
        expect(newString.toString()).to.equal("23456");
    });

    it("Remove ALL", () => {
        newString.append("0123456");
        newString.remove(0, 1212);
        expect(newString.toString().length).to.equal(0);
    });

    it("Remove with negative length", () => {
        newString.append("0123456");
        newString.remove(0,  -120);
        expect(newString.toString()).to.equal("0123456");
    });

    it("Empty string toString", () => {
        newString.append("asd")
        expect(newString.toString()).to.equal("asd");
    });

    it("Random", () => {
        newString = new StringBuilder("Gosho");
        newString.insertAt("Pe", 1); //GPEosho
        newString.append("Iv"); // GPEoshoIV
        newString.prepend("ONE"); // ONEGPEoshoIV
        newString.remove(5,2); // ONEGPshoIV

        expect(newString.toString()).to.equal("ONEGPshoIv");
    });

    it("Insert Vertify", () => {
        expect(() => newString.insertAt(new Date(), 3)).to.throw(TypeError);
    });

    it("Remove with negative index", () => {
        newString.append("0123456");
        newString.remove(-2,5); // ONEGPshoIV
        expect(newString.toString()).to.equal("01234");
    });

    it('has functions attached to prototype', function () {
        expect(Object.getPrototypeOf(newString).hasOwnProperty('append')).to.equal(true, "Missing append function");
        expect(Object.getPrototypeOf(newString).hasOwnProperty('prepend')).to.equal(true, "Missing prepend function");
        expect(Object.getPrototypeOf(newString).hasOwnProperty('insertAt')).to.equal(true, "Missing insertAt function");
        expect(Object.getPrototypeOf(newString).hasOwnProperty('remove')).to.equal(true, "Missing remove function");
        expect(Object.getPrototypeOf(newString).hasOwnProperty('toString')).to.equal(true, "Missing toString function");
    });

    it('invalid insertAt parameter', function () {
        let willThrow = () => newString.insertAt(5, 1);
        expect(willThrow).to.throw();
    });
});