import React, { Component } from 'react';
import './App.css';
class App extends Component {

  /**
   * Constructor
   */
  constructor() {
    super();
    this.state = {
      name: "React",
      selectedItems: [],
      selectedId: null,
      selectedIdToRemove: null,
      totalAmount: 0
    };
  }

  selectedId = null;
  selectedIdToRemove = null;

  /**
   * Food Items Declaration
   */
  foodItem = [
    { id: 0, itemName: "Pizza", prize: 5.99, imageUrl: require('./assets/pizza.png') },
    { id: 1, itemName: "Burger", prize: 2.99, imageUrl: require('./assets/burger.png') },
    { id: 2, itemName: "Sandwich", prize: 4.99, imageUrl: require('./assets/sandwich.png') },
    { id: 3, itemName: "French Fries", prize: 1.99, imageUrl: require('./assets/fries.png') },
    { id: 4, itemName: "Combo", prize: 3.99, imageUrl: require('./assets/combo.png') },
  ]
  totalAmount = 0;
  selectedItems = [];

  /**
   * Method to be triggered when selecting the food item
   * @param item 
   */
  selectFood(item) {
    this.selectedId = item.id;
    this.setState({
      selectedId: this.selectedId
    })
  }

  /**
   * Method to be triggered when selecting the food item to remove
   * @param item 
   */
  selectFoodToRemove(item) {
    this.selectedIdToRemove = item.id;
    this.setState({
      selectcedIdToRemove: this.selectedIdToRemove
    })
  }

  /**
   * Method to add the selected food to the list
   */
  addFood() {
    this.selectedItems.push(this.foodItem[this.selectedId]);
    this.selectedId = null;
    this.setState({
      selectedItems: this.selectedItems,
      selectedId: this.selectedId
    })
    this.calculateTotal();
  }

  /**
   * Method to remove the selected food from the list
   */
  removeFood() {
    this.selectedItems.pop(this.selectcedIdToRemove);
    this.selectcedIdToRemove = null;
    this.setState({
      selectedItems: this.selectedItems,
      selectcedIdToRemove: this.selectcedIdToRemove
    })
    this.calculateTotal();
  }

  /**
   * Method to calculate the total amount
   */
  calculateTotal() {
    this.totalAmount = 0;
    this.selectedItems.forEach((x) => {
      this.totalAmount += x.prize;
    })
  }

  /**
   * Method to render the page
   */
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav class="navbar navbar-expand-md  navbar-dark nav1">
            <h4><a class="navbar-brand" href="#">FOOD.<span class="logoText">LOGO</span></a></h4>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavbar">
              <ul class="navbar-nav navbar-right">
                <li class="nav-item">
                  <a class="nav-link active" href="#" >About</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#orderFood">Our Food</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Plans</a>
                </li>
                <li class="nav-item">
                  <button class="nav-link btn btn-info" href="#">Contact Us</button>
                </li>
              </ul>
            </div>
          </nav>
          <div class="imageDiv">
            <img class="mainImage" src={require('./assets/background.jpg')} alt="icon"></img>
            <div class="textInImage">
              <h4> Have no time to prepare food?</h4>
              <p> Choose one of our plans, enter delivery time and <br /> enjoy delicious food without leaving your home!</p>
              <button class="btn btn-warning"> <a class="btnOrder" href="#orderFood"> Order Food </a> </button>
            </div>
          </div>
        </header>
        <br></br>
        <div>
        </div>
        {/* Food Selection */}
        <div class="row foodContainer" id="orderFood">
          <div class="col-md-4 card">
            <div>  <h5 class="foodListTitle">Available Options</h5>
              {this.foodItem.map(food => {
                return (
                  <div onClick={this.selectFood.bind(this, food)} className={this.state.selectedId === food.id ? "row foodRowHeight foodRowHighlight" : "row foodRowHeight"} >
                    <div class="col-2"> <img class="foodRowIcon" src={food.imageUrl} alt="icon"></img></div>
                    <div class="col-7"> {food.itemName} </div>
                    <div class="col-3"> $ {food.prize} </div>
                    <br />
                    <br />
                  </div>
                )
              })
              }
            </div>
          </div>
          <div class="col-md-4 card selectButtons">
            <button class="btn btn-success" onClick={this.addFood.bind(this)} disabled={this.selectedId === null} >Add to Cart &gt;&gt;</button>
            <br />
            <button class="btn btn-danger" onClick={this.removeFood.bind(this)} disabled={this.selectedIdToRemove === null || this.selectedItems.length === 0} >&lt;&lt; Remove from Cart </button>
            <br></br>
          </div>
          <div class="col-md-4 card">
            {this.selectedItems.length > 0 &&
              <div > <h5 class="foodListTitle">Your Cart </h5>
                <div>
                  {this.selectedItems.map(food => {
                    return (
                      <div onClick={this.selectFoodToRemove.bind(this, food)} className={this.selectedIdToRemove === food.id ? "row foodRowHeight foodRowHighlight" : "row foodRowHeight"} >
                        <div class="col-2"> <img class="foodRowIcon" src={food.imageUrl} alt="icon"></img></div>
                        <div class="col-7"> {food.itemName} </div>
                        <div class="col-3"> $ {food.prize} </div>
                      </div>
                    )
                  })
                  }
                </div>
                <br />
                <div class="totalField text-center"> <h5>Total Amount: $ {this.totalAmount} </h5> </div>
              </div>
            }
            {this.selectedItems.length === 0 &&
              <div class="foodEmptyCart">
                <h4>Your Cart is Empty  </h4>
                <h6>Select an item and click add to cart</h6>
              </div>
            }
          </div>
        </div>
        <footer>
          <div class="text-center"> Developed by <strong>Carmel Dev</strong> for TotalCloud Inc <br />
            Mobile: +91 90958 62048  Email: carmeldevj@gmail.com </div>
        </footer>
      </div>
    );
  }
}

export default App;
