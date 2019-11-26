import React from 'react';

// import { BrowserRouter as Router, Switch, Route, Link, } from "react-router-dom";

import {
  HashRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import axios from 'axios';
import Slash from './Slash';
import DisplayThread from './DisplayThread';
import DisplayMessage from './DisplayMessage';
import MakeThread from './MakeThread';
import MakeMessage from './MakeMessage';
import DisplayForum from './DisplayForum';
import DisplayThreadList from './DisplayThreadList';
import './App.css';




// const databaseUrl = process.env.HEROKU_DB_URL || 'http://localhost:3000'
const databaseUrl = 'http://localhost:3000'

class App extends React.Component {

  constructor(props) {
    super();
    this.state = {
      forumName: [['Anime',1],['Oracle Cards',2],['Music',3],['Sports',4]],
    }
    // this.randomizeColors = this.randomizeColors.bind(this)
    // this.getOneMessage = this.getOneMessage.bind(this)
  }

  render() {
    // this.getOneMessage(17)
    return (
      <div>
        <Router basename='/'>
          <div className="App">
            <h1>Pop Culture Forums</h1>
            <nav>
              <Link to="/">slash</Link>
              <Link to="/music">Music</Link>
              <Link to="/anime">Anime</Link>
              <Link to="/sports">Sports</Link>
              {/* <Link to="/message-by-id">Search By Message Id</Link> */}
              {/* <Link to="/messages-by-user">Get All Messages by a User</Link> */}
              <Link to="/show-thread">Open a thread</Link>
            </nav>
            <Route exact path="/" component={Slash} />
            <Route path="/music">
              <h1>Music</h1>
              <DisplayForum forumName={this.state.forumName[2]} />
            </Route>
            <Route path="/anime">
              <h1>Anime</h1>
              <DisplayForum forumName={this.state.forumName[0]} />
            </Route>
            <Route path="/sports">
              <h1>Sports</h1>
              <DisplayForum forumName={this.state.forumName[3]} />
            </Route>
            <Route path="/show-thread">
              <DisplayThread />
            </Route>
          </div>
      </Router>
      </div>
      );
  }
}


export default App;
