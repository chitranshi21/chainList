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
// or you can also write
ChainList.deployed().then((instance) => app=instance);


// now we can use the app variable to access the contract
app.getArticle()
// this returns all values either empty or 0. because there is no contructor
// to initialize

// to sell the article use following command
app.sellArticle("iphone 7", "Selling this phone to buy iphone 8",
                web3.toWei(3, "ether"), {from: web3.eth.accounts[1]});

// so the contract is immuatable, if you have bugs in your contract
// you can desable it and create a new contract and deploy

// truffle provides two ways to test - Javascript or solidity
// solidity testing is new and not documented.
// so we will use Javascript way.
// truffle integrates Mocha and chai
// truffle test are written in test folder, to run test use command
truffle test --network ganache
