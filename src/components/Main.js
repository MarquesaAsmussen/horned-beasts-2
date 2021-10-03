import { Component } from 'react';
import { Container, Row, Form } from 'react-bootstrap';
import HornedBeast from './HornedBeast';
import rawData from '../beastObjects.json';
class Main extends Component {
  filterHorns = event => {
    const numOfHorns = parseInt(event.target.value);
    let allHornData = rawData;

    if (numOfHorns) {
      allHornData = rawData.filter(beast => numOfHorns === beast.horns);
    }
    this.props.updateBeastGallery(allHornData);
  };

  render() {
    return (
      <>
        <Form>
          <Form.Group className='mb-3' controlId='hornFilterForm'>
            <Form.Label>
              Select beasts by their number of horns in the drop down below
            </Form.Label>
            <Form.Control as='select' onChange={this.filterHorns}>
              <option value=''>ALL THE HORNS!!!</option>
              <option value='1'>1 horn</option>
              <option value='2'>2 horn</option>
              <option value='3'>3 horn</option>
              <option value='100'>100 horn</option>
            </Form.Control>
          </Form.Group>
        </Form>

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
