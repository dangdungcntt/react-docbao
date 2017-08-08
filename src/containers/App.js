import React, { Component } from 'react';
import {
  Grid, Row, Col, Tab,
  Nav, NavItem
} from 'react-bootstrap';

import Page from '../components/Page';
import StorageVnexpress from '../components/StorageVnexpress';
import StorageVietnamnet from '../components/StorageVietnamnet';
import StorageDantri from '../components/StorageDantri';
import Storage24h from '../components/Storage24h';
import {
  LINK_FETCH_RSS_VIETNAMNET,
  LINK_FETCH_RSS_VIETNAMNET_LOCAL,
  LINK_FETCH_RSS_VNEXPRESS,
  LINK_FETCH_RSS_VNEXPRESS_LOCAL,
  LINK_FETCH_RSS_DANTRI,
  LINK_FETCH_RSS_DANTRI_LOCAL,
  LINK_FETCH_RSS_24H,
  LINK_FETCH_RSS_24H_LOCAL
} from '../config/config';

import './App.css';

class App extends Component {

  render() {
    return (
      <Grid>
        <Tab.Container id="tabs-with-dropdown" defaultActiveKey="vnexpress">
          <Row className="clearfix">
            <Col xs={12}>
              <Nav bsStyle="tabs">
                <NavItem eventKey="vnexpress">
                  <img 
                      width={150} 
                      height={40} 
                      src="https://docbao.tentstudy.xyz/images/vnexpress.png"
                      alt="Vnexpress"
                  />
                </NavItem>
                <NavItem eventKey="vietnamnet">
                  <img 
                      width={150} 
                      height={40} 
                      src="https://docbao.tentstudy.xyz/images/vietnamnet.png"
                      alt="Vietnamnet"
                  />
                </NavItem>
                <NavItem eventKey="dantri">
                  <img 
                      width={150} 
                      height={40} 
                      src="https://docbao.tentstudy.xyz/images/dantri.jpg"
                      alt="Dantri"
                  />
                </NavItem>
                <NavItem eventKey="24h">
                  <img 
                      width={150} 
                      height={40} 
                      src="https://docbao.tentstudy.xyz/images/24h.png"
                      alt="24h"
                  />
                </NavItem>
              </Nav>
            </Col>
            <Col xs={12}>
              <Tab.Content animation>
                <Tab.Pane eventKey="vnexpress">
                  <Page
                      pageTitle={'Vnexpress'}
                      Storage={StorageVnexpress}
                      apiLink={LINK_FETCH_RSS_VNEXPRESS}
                  />
                </Tab.Pane>
                <Tab.Pane eventKey="vietnamnet">
                  <Page
                      pageTitle={'Vietnamnet'}
                      Storage={StorageVietnamnet}
                      apiLink={LINK_FETCH_RSS_VIETNAMNET}
                  />
                </Tab.Pane>
                <Tab.Pane eventKey="dantri">
                  <Page
                      pageTitle={'Dantri'}
                      Storage={StorageDantri}
                      apiLink={LINK_FETCH_RSS_DANTRI}
                  />
                </Tab.Pane>
                <Tab.Pane eventKey="24h">
                  <Page
                      pageTitle={'24H'}
                      Storage={Storage24h}
                      apiLink={LINK_FETCH_RSS_24H_LOCAL}
                  />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Grid>
    );
  }
}

export default App;
