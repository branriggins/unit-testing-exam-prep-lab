const chai = require('chai'); // boiler plate from chai
var should = require('chai').should() // boiler plate from chai

var assert = require('assert'); // boiler plate code from Mocha install
const { expect } = require('chai');

let MathEnforcer = require("../mathEnforcer"); // imported our Class (object factory and will use it!)

describe('AddFive Static Method', function() {      // Parameters are: (the text label, function to call test)
    it('Total should equal 10 when the first parameter is the number 5', function() {
      let total = MathEnforcer.addFive(5);         // total should be 10 (num + 5 = 10)
      total.should.equal(10);
    });
    it('total should equal 0 when the first parameter is the number -5', () => {
      let total = MathEnforcer.addFive(-5);
      total.should.equal(0)
    });
    it("total should be within .01 of 10 if 5 is added to 4.99", () => {
      let total = MathEnforcer.addFive(4.99);
      expect(total).to.be.closeTo(10, 0.01);
    })
    // it should be undefined if not a number
    it("total should return undefined if the argument is a string", () =>{
      let total = MathEnforcer.addFive("4")
      expect(total).to.be.undefined;
    })
});

describe("Subtract 10 static method", () => {
  it('total should equal 10 if 20 is the parameter', () => {
    let total = MathEnforcer.subtractTen(20);
    console.log("the total is ", total);
    expect(total).to.equal(10);
  });
  // What other test do  I write? Hint same as the others

  // Check to see if its undefined if the input (parameter/argument) is not a number

  // 

});

// describe the sum static method
  // should return 10 if I add 5 + 5
  // should return 0 if add -5 + 5
  // should return -2 if we add -1 + -1


