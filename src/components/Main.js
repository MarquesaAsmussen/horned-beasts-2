import { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import HornedBeast from './HornedBeast';
import beastData from '../beastObjects.json';

class Main extends Component {
  render() {
    return (
      <>
        <Container fluid>
          <Row xs={1} sm={2} md={3} lg={4}>
            {beastData.map(beast => (
              <HornedBeast
                key={beast.title}
                title={beast.title}
                imgsrc={beast.image_url}
                description={beast.description}
              />
            ))}
          </Row>
        </Container>
      </>
    );
  }
}

export default Main;
