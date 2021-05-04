const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
  'clown scissors cabbage video rhythm fabric erase pink chase latin model jacket',
  'https://ropsten.infura.io/v3/ea614a4433fe4844a262d9f4911612c9'
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log('attempting', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ['Hi There!'] })
    .send({ gas: '1000000', from: accounts[0] });

  console.log('Contract deployed to ', result.options.address);
};

deploy();
