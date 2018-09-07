var ChainList = artifacts.require("./ChainList.sol");
// by this we get the truffle abstraction of the contract

// define our test suite
contract("ChainList", function(accounts) {

    let chainListInstance;
    let seller = accounts[1];
    let articleName = "Article 1";
    let articleDescription = "Description for Article 1";
    let articlePrice = 10;

    it("should be initialized with empty values", function() {
        return ChainList.deployed().then((instance) => {
          return instance.getArticle();
        }).then((data) => {
            assert.equal(data[0], 0x0, "seller should be empty");
            assert.equal(data[1], "", "article name should be empty");
            assert.equal(data[2], "", "article description should be empty");
            assert.equal(data[3].toNumber(), 0, "article price should be zero");
        })
    });

    it("should sell an article", function() {
        return ChainList.deployed().then((instance) => {
            chainListInstance = instance;
            return chainListInstance.sellArticle(articleName,
              articleDescription,
              web3.toWei(articlePrice, "ether"), {from: seller});
        }).then(() => {
          return chainListInstance.getArticle();
        }).then((data) =>{
          assert.equal(data[0], seller, "seller should be seller");
          assert.equal(data[1], articleName, "article name should be name");
          assert.equal(data[2], articleDescription, "article description should be Description");
          assert.equal(data[3].toNumber(), web3.toWei(articlePrice,"ether"), "article price should be 10");
        })
    });
});
