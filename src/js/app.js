App = {
     web3Provider: null,
     contracts: {},
     account: 0x0,

     init: function() {
          /*
           * Load Article Row here
           */

          // let articlesRow = $('#articlesRow');
          // let articleTemplate = $('#articleTemplate');
          //
          // articleTemplate.find('.panel-title').text("Article 1");
          // articleTemplate.find('.article-description').text("Description for \
          // Article 1");
          // articleTemplate.find('.article-price').text('10.23');
          // articleTemplate.find('.article-seller').text('0x02232323209483409');
          //
          // articlesRow.append(articleTemplate.html());

          return App.initWeb3();
     },

     initWeb3: function() {
          /*
           * Replace me...
           */
           if (typeof web3 !== 'undefined') {
             // reuse the injected web3 object
             // the object can be injected by metamask
             App.web3Provider = web3.currentProvider;
           } else {
             // create a new provider and plug it directly into our local node
             let localRPCURL = "http://localhost:7545";
             App.web3Provider = new web3.providers.HttpProvider(localRPCURL);
           }

          let web3 = new Web3(App.web3Provider);

          App.displayAccountInfo();

          return App.initContract();
     },

     displayAccountInfo: function() {
       web3.eth.getCoinBase(function(err, account) {
         if (err === null) {
           App.account = account;
           $('#account').text(account);
           web3.eth.getBalance(account, (err, balance) => {
                if(err === null) {
                  $("#accountBalance").text(web3.fromWei(balance, "ether") + " ETH");
                }
           });
         }
       });
     },

     initContract: function() {
          /*
           * Replace me...
           */
           $.getJSON('ChainList.json', (chainListArtifact) => {
             // get the contract artifact file and use it to instantiate
             // a truffle contract abstraction

             App.contracts.ChainList = TruffleContract(chainListArtifact);
             // set the providers for our contract
             App.contracts.ChainList.setProvider(App.web3provider);

             // retrieve the article from the contract
             return App.reloadArticle();
           })
     },

     reloadArticle: function() {

     },
};

$(function() {
     $(window).load(function() {
          App.init();
     });
});
