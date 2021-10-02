import { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import HornedBeast from './HornedBeast';

class Main extends Component {
  render() {
    return (
      <>
        <Container fluid>
          <Row xs={1} sm={2} md={3} lg={4}>
            {this.props.allBeasts.map(beast => (
              <HornedBeast
                key={beast.title}
                title={beast.title}
                imgsrc={beast.image_url}
                description={beast.description}
                displayAsModal={this.props.displayAsModal}
              />
            ))}
          </Row>
        </Container>
      </>
    );
  }
}

export default Main;
