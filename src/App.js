import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Accueil from './components/Accueil';
import Boutique from './components/Boutique';
import Header from './components/Header';
import Panier from './components/Panier';
import Footer from './components/Footer';
import products from './products.json'
import PageProduct from './components/PageProduct';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      displayPanier: false,
      totalPrice: 0,
      numberOfProducts: 0,
    }
    this.addToCart = this.addToCart.bind(this)
    this.updateQty = this.updateQty.bind(this)
    this.removeToCart = this.removeToCart.bind(this)
    this.updateTotalPrice = this.updateTotalPrice.bind(this)
    this.removeAllCart = this.removeAllCart.bind(this)
    this.updateNumberOfProducts = this.updateNumberOfProducts.bind(this)
  }

  componentDidMount() {
    const cart = localStorage.getItem('products');
    let updatedCart;
    if (cart === null) {
      updatedCart = [];
    } else {
      updatedCart = JSON.parse(cart);
    }
    this.setState({ cart: updatedCart });
    this.updateNumberOfProducts();
    this.updateTotalPrice();
  }

  componentDidUpdate() {
    localStorage.setItem('products', JSON.stringify(this.state.cart))
  }

  addToCart(productId, qty) {
    this.setState(state => {
      const cart = [...state.cart];
      const index = cart.findIndex(item => item.id === productId)
      if (-1 !== index) {
        cart[index] = { ...cart[index], qty: cart[index].qty + qty }
      } else {
        cart.push({ id: productId, qty: qty });
      }
      return { cart }
    })
    this.updateTotalPrice()
    this.updateNumberOfProducts()
  }

  updateQty(productId, qty) {
    this.setState(state => {
      const cart = [...state.cart];
      const index = cart.findIndex(item => item.id === productId)
      if (index !== -1) { cart[index] = { ...cart[index], qty: qty } }
      return { cart }
    })
    this.updateTotalPrice()
    this.updateNumberOfProducts()
  }

  removeToCart(productId) {
    this.setState(state => {
      let cart = [...state.cart];
      cart = cart.filter(item => item.id !== productId)
      return { cart }
    })
    this.updateTotalPrice()
    this.updateNumberOfProducts()
  }

  removeAllCart() {
    this.setState(state => {
      let cart = [...state.cart];
      cart = []
      return { cart }
    })
    this.updateTotalPrice()
    this.updateNumberOfProducts()
  }

  updateTotalPrice() {
    this.setState(state => {
      const cart = [...state.cart];
      const totalPrice = cart.reduce((acc, item) => {
        const product = products.find(product => product.id === item.id);
        if (product) acc += item.qty * product.price;
        return Math.round(acc * 100) / 100;
      }, 0);
      return { totalPrice }
    })
  }

  updateNumberOfProducts() {
    this.setState(state => {
      const cart = [...state.cart]
      const numberOfProducts = cart.reduce((acc, item) => {
        if (item) acc += 1;
        return acc;
      }, 0);
      return { numberOfProducts }
    })
  }

  unsetDisplayPanier = () => {
    this.setState({ displayPanier: false })
  }

  setDisplayPanier = (e) => {
    this.setState({ displayPanier: e })
  }

  render() {
    return (
      <BrowserRouter>
        <Header setDisplayPanier={this.setDisplayPanier} displayPanier={this.state.displayPanier} numberOfProducts={this.state.numberOfProducts} />
        {this.state.displayPanier ? <Panier cart={this.state.cart} products={products} unsetDisplayPanier={this.unsetDisplayPanier} updateQty={this.updateQty} removeToCart={this.removeToCart} totalPrice={this.state.totalPrice} removeAllCart={this.removeAllCart} /> : null}
        <Routes>
          <Route path='/' element={<Accueil />}></Route>
          <Route path='/Boutique' element={<Boutique products={products} addToCart={this.addToCart} />}></Route>
          <Route path='/PageProduct' element={<PageProduct addToCart={this.addToCart} />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    );
  }
}




// Colors : primary : blue ; secondary : brown ; success : darker brown ; info : light brown ; warning : yellow
export default App;