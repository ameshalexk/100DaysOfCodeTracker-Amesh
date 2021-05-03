const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

class Car {
  park() {
    return 'stopped';
  }

  drive() {
    return 'vroom';
  }
}

let car;

beforeEach(() => {
  car = new Car();
});

describe('Car Class Testing', () => {
  it('park testing', () => {
    assert.equal(car.park(), 'stopped');
  });

  it('driver testing', () => {
    assert.equal(car.drive(), 'vroom');
  });
});
