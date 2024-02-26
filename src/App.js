import React from "react";
import Items from  "./components/Items";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title:'Стул серый',
          img: 'orex.jpg',
          desc: 'Lorem',
          category: 'chairs',
          price: '49.99'
        },
        {
          id: 2,
          title:'Стол',
          img: 'cart1.webp',
          desc: 'Lorem ipsum',
          category: 'tables',
          price: '149.00'
        },
        {
          id: 3,
          title:'Кресло',
          img: 'kreslo.jpg',
          desc: 'Lorem ipsum',
          category: 'light',
          price: '500.00'
        },
        {
          id: 4,
          title:'Стул',
          img: 'stul.jpg',
          desc: 'Lorem ipsum',
          category: 'chairs',
          price: '100.00'
        },
        {
          id: 5,
          title:'Диван',
          img: 'divan.jpg',
          desc: 'Lorem ipsum',
          category: 'sofa',
          price: '700.00'
        }
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  
  render() {
    
   return (
     <div className="wrapper">
       <Header orders={this.state.orders} onDelete={this.deleteOrder} />
       <Categories chooseCategory={this.chooseCategory} />
       <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />
       
       {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem} />}
       <Footer />
     </div>
    )
  }

  onShowItem(item) {
    this.setState({fullItem:item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategory(category) {
  if(category === 'all') {
  this.setState({currentItems: this.state.items})
  return
}
  this.setState({
    currentItems: this.state.items.filter(el => el.category === category)
  })
}

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id) })
  }
  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach(el => {
      if(el.id === item.id)
        isInArray = true 
    });
      if(!isInArray)
       this.setState({orders: [...this.state.orders, item] })     
  }
}

export default App;
