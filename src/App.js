import React from 'react';
import {
  HashRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import Slash from './Slash';
import DisplayThread from './DisplayThread';
import DisplayForum from './DisplayForum';
import BackToTop from 'react-back-to-top-button';
import './App.css';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
// const databaseUrl = 'http://localhost:3000'

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      forumName: [['Anime', 1], ['Oracle Cards', 2], ['Music', 3], ['Sports', 4]],
    }
  }
  render() {
    return (
      <Container>
        <Row className="nav" >
          <a href="/" className="btn btn-danger" role="button" aria-pressed="true">INTERACT</a>
        </Row>
        <div>
          <Router basename='/'>
            <div className="App">
              <Route exact path="/" component={Slash} />
              <Route path="/anime">
                <h1>Anime</h1>
                <DisplayForum forumName={this.state.forumName[0]} />
              </Route>
              <Route path="/oraclecards">
                <h1>Oracle Cards</h1>
                <DisplayForum forumName={this.state.forumName[1]} />
              </Route>
              <Route path="/music">
                <h1>Music</h1>
                <DisplayForum forumName={this.state.forumName[2]} />
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
        <div>
          <BackToTop showOnScrollUp showAt={40} speed={1000} easing="easeInOutQuint" style= {{height: '15px'}}>
            <span className="top">^</span>
          </BackToTop>
        </div>
      </Container>
    );
  }
}
export default App;