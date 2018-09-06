pragma solidity ^0.4.18;

/*
 bascially this class is a skeleton of Article class
 it has a setter which pours in the state variables
 and a getter thats gets those state varaibles
*/

// first version - allow us to sell the article
// by identifying the seller, article name, decripton and price
// { bascially create an article }
// let us retrieve the article by returning its seller address, name
// description and price
// { basically get the created article }


contract ChainList {
  //define some state variables for the article

  // type address represent an account, here seller
  address seller;
  string name;
  string description;
  // for price in crypto currency we use unsingned 256 int
  // price of the article in wei 10^-18 ether
  unint256 price;

  // to sell an article
  // this method sets the state varaible for the article
  // calling this function will cost some gas
  function sellArticle(string _name, string _description, unint256 _price) public {
    // we don't pass seller in the arguments
    // we can deduce it from a special context variables msg
    seller = msg.sender;
    name = _name;
    description = _description;
    price = _price;

  }

  // get an article
  // getters dont change the state of the Article, and so do not require
  // verification, these kind of methods are marked as view
  // in solidity we can return multiple values
  // we define the return list in the function definition.
  function getArticle() public view returns (
      address _seller,
      string _name,
      string _description,
      unint256 _price
    ) {
      return (seller, name, description, price);
    }

// there is another function modifier pure,
// declaring a function pure makes the state variable unaccessible.
// you can neither read or write to the state varaible
// useful for utility functions performing calculations

// solidity compiler does not enforce as of today that a view function does not
// modify the state varaibles or the pure function does not access the state
// but it will once day

}
