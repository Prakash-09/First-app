import React, { Component } from 'react';

class UsingMap extends Component{
    constructor(){
        super();

        this.state={
            monsters:[
                {
                    name: 'Frankenstein',
                    id: 'asc1'
                },
                {
                    name: 'dracula',
                    id: 'asc2'
                },
                {
                    name: 'Zombie',
                    id: 'asc3'
                }
            ]
        };
    }
    render(){
        return(
            <div>
                {this.state.monsters.map(monster => (
                    <h1 key={monster.id}>{monster.name}</h1>
                    ))}
            </div>
        );
    }
}
export default UsingMap;