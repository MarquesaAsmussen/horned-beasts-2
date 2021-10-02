import { Component } from 'react';
import Card from 'react-bootstrap/Card';

class HornedBeast extends Component {
  constructor(props) {
    super(props);
    this.state = { votes: 0 };
  }

  handleClick = () => {
    this.setState({ votes: this.state.votes + 1 });
  };

  handleVoteClick = () => {};

  render() {
    return (
      <Card onClick={this.handleClick}>
        <Card.Img src={this.props.imgsrc} alt={this.props.title} />
        <Card.Title>{this.props.title}</Card.Title>
        <Card.Text>{this.props.description}</Card.Text>
        <Card.Text> likes = {this.state.votes}</Card.Text>
      </Card>
    );
  }
}

export default HornedBeast;
