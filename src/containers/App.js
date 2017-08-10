import React, { Component } from 'react';
import {
  Grid, Row, Col, Tab,
  Nav, NavItem
} from 'react-bootstrap';

import Page from '../components/Page';
import ListNewspapers from '../data';

import './App.css';

class App extends Component {

  render() {
    return (
      <Grid>
        <Tab.Container id="tabs-with-dropdown" defaultActiveKey="vnexpress">
          <Row className="clearfix">
            <Col xs={12}>
              <Nav bsStyle="tabs">
              {
                ListNewspapers.map((newspaper) => {
                  return (
                    <NavItem eventKey={`${newspaper.eventKey}`}>
                      <img 
                          width={newspaper.imgWidth} 
                          height={newspaper.imgHeight} 
                          src={`${newspaper.imgSrc}`}
                          alt={`${newspaper.imgAlt}`}
                      />
                    </NavItem>
                  );
                })
              }
              </Nav>
            </Col>
            <Col xs={12}>
              <Tab.Content animation>
                {
                  ListNewspapers.map((newspaper) => {
                    return (
                      <Tab.Pane eventKey={newspaper.eventKey}>
                        <Page
                            pageTitle={newspaper.pageTitle}
                            storage={newspaper.storage}
                            apiLink={newspaper.apiLink}
                        />
                      </Tab.Pane>
                    );
                  })
                }
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Grid>
    );
  }
}

export default App;
