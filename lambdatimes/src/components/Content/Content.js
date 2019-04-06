import React, { Component } from 'react';

import Tabs from './Tabs';
import Cards from './Cards';

// Importing our tab and card data. No need to change anything here.
import { tabData, cardData } from '../../data';

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'all',
      tabs: [],
      cards: []
    };
  }

  componentDidMount() {
    this.setState(exs =>{
      return {selected: exs.selected, tabs: exs.tabs, cards: cardData};
    })
  }


  changeSelected = tab => {
    this.setState(exs =>{
      return {selected: tab, tabs: exs.tabs, cards: exs.cards};
    })
  };

  filterCards = () => {
    if (this.state.selected == 'all')  {
      return this.state.cards;
    } 
   else {
     return this.state.cards.filter ((card) => card.tab == this.state.selected);
   }

   
  };

  render() {
    return (
      <div className="content-container">
        {/* 
          Add 2 props to the Tabs component, 
          `selectedTab` that includes the currently selected tab
          and `selectTabHandler` that includes the function to change the selected tab
        */}
        <Tabs tabs={this.state.tabs} />
        <Cards cards={this.filterCards()} />
      </div>
    );
  }
}
