import React, { Component } from 'react';
import {
  ListGroup
} from 'react-bootstrap';

import newAPI from '../Api/newAPI';
import New from './New';

export default class ListNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data : [],
      id : 0,
      lastTime: 0,
      lastUpdate: 0
    }
  }
  fetchData() {
    const { apiLink, linkFetchData } = this.props;
    const { id, lastTime } = this.state;
    newAPI.fetchRss(apiLink, linkFetchData, lastTime)
    .then((res) => {
      this.setState({
        data : [ ...res.data, ...this.state.data],
        id : id + res.data.length,
        lastTime: res.lastTime,
        lastUpdate: new Date().toLocaleString('vi-VN', { timeZone: 'Asia/Jakarta' })
      });
    })
    .catch(err => console.log(err));
  }
  componentDidMount() {
    this.fetchData();
    setInterval(() => {
      this.fetchData();
    }, 60000);
  }
  render() {
    const { lastUpdate } = this.state;
    return (
      <div>
        <p>Last update: {lastUpdate}</p>
        <ListGroup>
          {
            this.state.data.map((element) => {
              const key = new Date(element.time).getTime() * Math.random();
              return (
                <New 
                    key={key}
                    imgUrl={element.imgUrl}
                    title={element.title}
                    des={element.des}
                    time={element.time}
                    link={element.link}
                />
              ); 
            })
          }
        </ListGroup>  
      </div>
    );
  }
}
