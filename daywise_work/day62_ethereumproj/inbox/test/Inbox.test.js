const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

class Car {
  park() {
    return 'stopped';
  }

  driver() {
    return 'vroom';
  }
}

describe('Car Class Testing', () => {
  it('park testing', () => {
    const car = new Car();
    assert.equal(car.park(), 'stopped');
  });
});
