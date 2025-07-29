import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import List from './List';
import './FilteredList.css';

class FilteredList extends Component {
  constructor(props) {
    super(props);

    //The state is just a list of key/value pairs (like a hashmap)
    this.state = {
      search: "",
      type: "All"
    };
  }

  //Sets the state whenever the user types on the search bar
  onSearch = (event) => {
    this.setState({search: event.target.value.trim().toLowerCase()});
  }

  //Set the state of the "type" state variable depending on what is passed in
  onFilter = (selectedType) => {
    this.setState({type: selectedType});
  }

  //Change filterItem to take into account the "type" state variable when filtering
  filterItem = (item) => {
    const matchesSearch = item.name.toLowerCase().search(this.state.search) !== -1;
    const matchesType = this.state.type === "All" || item.type === this.state.type;
    return matchesSearch && matchesType;
  }

  render(){
    return (
        <div className="filter-list">
          <h1>Produce Search</h1>
         
          <div className="filter-controls">
            <Dropdown onSelect={this.onFilter} className="filter-dropdown">
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                {this.state.type}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="All">All</Dropdown.Item>
                <Dropdown.Item eventKey="Fruit">Fruit</Dropdown.Item>
                <Dropdown.Item eventKey="Vegetable">Vegetable</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            
            <input type="text" placeholder="Search produce..." onChange={this.onSearch} className="search-input" />
          </div>
          
          <div className="produce-list-container">
            <List items={this.props.items.filter(this.filterItem)} />
          </div>
        </div>
    );
  }
}

export default FilteredList;
