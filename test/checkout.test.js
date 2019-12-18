const { checkout } = require('../src/checkout.js');
const { expect } = require('chai');

describe('Pricing', () => {
  it('should return 50 when given one A', () => {
    const result = checkout(["A"]);
    expect(result).to.equal(50);
  })

  it('should return 30 when given one B', () => {
    const result = checkout(["B"]);
    expect(result).to.equal(30);
  })

  it('should return 20 when given one C', () => {
    const result = checkout(["C"]);
    expect(result).to.equal(20);
  })

  it('should return 15 when given one D', () => {
    const result = checkout(["D"]);
    expect(result).to.equal(15);
  })

  it('should return 100 when given two As', () => {
    const result = checkout(["A", "A"]);
    expect(result).to.equal(100);
  })

  it('should add two different products prices', () => {
    const result = checkout(['A', 'B'])
    expect(result).to.equal(80)
  })

  it('should return 130 when given three As', () => {
    const result = checkout(['A', 'A', 'A'])
    expect(result).to.equal(130)
  })

  it('should return 260 when given six As', () => {
    const result = checkout(['A', 'A', 'A', 'A', 'A', 'A'])
    expect(result).to.equal(260)

  })

  it('should return 45 when given two Bs', () => {
    const result = checkout(['B', 'B'])
    expect(result).to.equal(45)
  })

  it('should return the price of assorted items', () => {
    const result = checkout(['A', 'B', 'C', 'D', 'A', 'B', 'A', 'A'])
    expect(result).to.equal(260)
  })
})