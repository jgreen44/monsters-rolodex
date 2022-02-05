import './App.css';
import React, {Component} from 'react';
import {CardList} from "./components/card-list/card-list.component";
import {SearchBox} from "./components/search-box/search-box.component";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            monsters: [],
            searchField: ''
        };
    }

    // called the first time the component is rendered
    async componentDidMount() {
        const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await usersResponse.json();
        console.log(users);
        return this.setState({monsters: users});
        // .then((response) => response.json())
        // .then((users) => this.setState({ monsters: users }));
    }

    // IMPORTANT: If you use an arrow function, you can use "this"
    // properly. If you don't, then "this" doesn't reference the instantiated object
    handleChange = (e) => {
        this.setState({searchField: e.target.value})
    }

    render() {
        const {monsters, searchField} = this.state
        const filteredMonsters = monsters
            .filter(monster => monster.name.toLowerCase()
                .includes(searchField.toLowerCase()))
        return (<div className="App">
            <h1>Monsters Rolodex</h1>
            <SearchBox placeholder={"the placeholder"} handleChange={this.handleChange}
            />
            <CardList monsters={filteredMonsters}/>
        </div>);
    }
}

export default App;
