import React, { Component } from 'react';
import {
  ListGroupItem,
  Media
} from 'react-bootstrap';
export default class New extends Component {

  render() {
    const { imgUrl, title, des, time, link } = this.props; 
    return (
      <ListGroupItem href={link} target={'_blank'}>
        <Media>
          <Media.Left>
            <img width={180} height={108} src={`${imgUrl}`} alt={`${title}`} />
          </Media.Left>
          <Media.Body>
            <Media.Heading>{title}</Media.Heading>
            <p>{des}</p>
            <span>{time}</span>
          </Media.Body>
        </Media>
      </ListGroupItem>
    );
  }
}
