App = {
     web3Provider: null,
     contracts: {},

     init: function() {
          /*
           * Load Article Row here
           */

          let articlesRow = $('#articlesRow');
          let articleTemplate = $('#articleTemplate');

          articleTemplate.find('.panel-title').text("Article 1");
          articleTemplate.find('.article-description').text("Description for \
          Article 1");
          articleTemplate.find('.article-price').text('10.23');
          articleTemplate.find('.article-seller').text('0x02232323209483409');

          articlesRow.append(articleTemplate.html());

          return App.initWeb3();
     },

     initWeb3: function() {
          /*
           * Replace me...
           */

          return App.initContract();
     },

     initContract: function() {
          /*
           * Replace me...
           */
     },
};

$(function() {
     $(window).load(function() {
          App.init();
     });
});
