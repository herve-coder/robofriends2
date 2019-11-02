import React, { Component } from "react";
import CardList from "../../Components/CardList/CardList";
import Searchbar from "../../Components/Searchbar/Searchbar";
import Scroll from "../../Components/Scroll/Scroll";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => {
        const robots = [];
        users.map(user => {
          return robots.push({
            id: user.id,
            name: user.name,
            email: user.email
          });
        });
        this.setState({ robots: robots });
      })
      .catch(res => console.log("Ouuf Users not available yet"));
  }

  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };
  render() {
    const { robots, searchField } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return !robots.length ? (
      <h1>Loading</h1>
    ) : (
      <div className="tc">
        <h1>ROBOFRIENDS</h1>
        <Searchbar SearchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default App;
