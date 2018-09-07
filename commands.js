// this project is called the chainlist
// it is like a craiglist yellowpages to buy and sell products
// there are different ways to initialize the project
// like truffle init
// this project requires to create a decentralized backend and a frontend
// so we will use truffle boxes
// this gives us a boilerplate project directory to build Dapps

// bascially boxes are like boiler plate starter project
// that you can use to get started . google truffle unbox
// we are using the box that udemy created .
truffle unbox chainskills/chainskills-box

// while deploying a contract locally we can use ganache or truffle
// truffle uses ganache core only ..
// truffle port is 4447 and ganache is 5777
// we are using ganache
// open Ganache

truffle migrate --network ganache

// we can also use truffle migrate --compile-all --reset --network ganache

// run the console
truffle console --network ganache

// to check the address of the contract
ChainList.address

// to check the balance of the first account
web3.fromWei(web3.eth.getBalance(web3.eth.accounts[0]), "ether").toNumber()

//before calling any function from the contract, we have to get an instance of
// it. the deployed function returns an instance of contract asyncronously.
ChainList.deployed().then(function(instance) {app=instance});
