import React, { Component } from "react";
import { connect } from "react-redux";
import CardList from "../../Components/CardList/CardList";
import Searchbar from "../../Components/Searchbar/Searchbar";
import Scroll from "../../Components/Scroll/Scroll";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Header from "../../Components/Header/Header";

import "./App.css";
import { setSearchField, requestRobots } from "../../Actions";

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchfield,
    isPending: state.getRobots.isPending,
    robots: state.getRobots.robots,
    error: state.getRobots.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  };
};

class App extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const { robots, searchField, onSearchChange, isPending } = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return (
      <div className="tc">
        <Header />
        
        <Searchbar SearchChange={onSearchChange} />
        {isPending ? (<h1>Loading</h1>) : (
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
        </Scroll>
        )}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
