import React, { Component } from 'react';
import { CardList } from'./card-list/card-list.component';
import { SearchBox } from './search-box/search-box.component';

class GettingJsonData extends Component{
    constructor(){
        super();

        this.state={
            monsters:[],
            searchField:''
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({monsters:users}));
    }
    render(){
        const { monsters, searchField } = this.state;
        const filteredMonsters = monsters.filter(monster =>
            monster.name.toLowerCase().includes(searchField.toLowerCase())
        );
        return(
            <div>
                <SearchBox
                    placeholder="search Monsters" 
                    handleChange={e => this.setState({searchField: e.target.value})}
                />
                <CardList monsters={filteredMonsters} />
            </div>
        );
    }
}
export default GettingJsonData;