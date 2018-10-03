App = {
     web3Provider: null,
     contracts: {},
     account: 0x0,
     LOCAL_RPC_URL: "http://localhost:7545",

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
          // articlesRow.append(articleTemplate.html());

          return App.initWeb3();
     },

     initWeb3: function() {
           if (typeof web3 !== 'undefined') {
             // reuse the injected web3 object
             // the object can be injected by metamask
             // then reuse this and set provider to our app web3 instance
             // we dont use the existing object directly, because the versions
             // might be different.
             App.web3Provider = web3.currentProvider;
           } else {
             // create a new provider and plug it directly into our local node
             let localRPCURL = LOCAL_RPC_URL;
             App.web3Provider = new web3.providers.HttpProvider(localRPCURL);
           }

          // so we need to configure web3 about what is the end point
          // before initializing it, this is the provider.
          // here we are passing the provider in the constructor
          let web3 = new Web3(App.web3Provider);

          App.displayAccountInfo();

          return App.initContract();
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
