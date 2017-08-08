import React, { Component } from 'react';
import {
  Row, Col, Tab,
  Nav, NavItem,
  Form, FormGroup, ControlLabel, FormControl,
  Button
} from 'react-bootstrap';
import ListNews from '../components/ListNews';

export default class Page extends Component {
  constructor(props) {
    super(props);
    const { Storage } = props;
    this.state = {
      tabsSelected : Storage.addTabs([1, 2, 3, 4]),
      tabsUnSelected: Storage.getTabsUnSelected()
    }
  }
  add() {
    const { Storage } = this.props;
    const value = this.select.value;
    this.setState({
      tabsSelected: Storage.addTabs([value]),
      tabsUnSelected: Storage.getTabsUnSelected(0)
    });
  }
  render() {
    const { pageTitle, apiLink } = this.props;
    const { 
      tabsUnSelected, tabsSelected
    } = this.state;
    return (
      <Row>
        <h4>{pageTitle}</h4>
        {
          tabsUnSelected.length === 0 ? null : 
            <Form inline>
              <FormGroup controlId="formControlsSelect">
                <ControlLabel>Thêm loại tin  </ControlLabel>
                <FormControl 
                  componentClass="select"
                  inputRef={ref => { this.select = ref; }}
                >
                  {
                    tabsUnSelected.map((tab) => {
                      return (
                        <option 
                          value={`${tab.eventKey}`} 
                          key={`${tab.eventKey}`}
                        >
                          {`${tab.tabLabel}`}
                        </option>
                      );
                    })
                  }
                </FormControl>
                <Button bsStyle="primary" onClick={() => { this.add(); }}>Thêm</Button>
              </FormGroup>
            </Form>
        }
        <br />
        <Tab.Container id="left-tabs-example" defaultActiveKey="1">
          <Row className="clearfix">
            <Col md={3} sm={4} xs={5} >
              <Nav bsStyle="pills" stacked>
                {
                  tabsSelected.map((tab) => {
                    return (
                      <NavItem 
                        eventKey={`${tab.eventKey}`} 
                        key={`${tab.eventKey}`}
                      >
                        {tab.tabLabel}
                      </NavItem>
                    );
                  })
                }
              </Nav>
            </Col>
            <Col md={9} sm={8} xs={7} >
              <Tab.Content animation>
                {
                  tabsSelected.map((tab) => {
                    return (
                      <Tab.Pane 
                        eventKey={`${tab.eventKey}`} 
                        key={`${tab.eventKey}`}
                      >
                        <ListNews 
                            apiLink={apiLink} 
                            linkFetchData={`${tab.linkFetchData}`}
                        />
                      </Tab.Pane>
                    );
                  })
                }
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Row>
    );
  }
}
