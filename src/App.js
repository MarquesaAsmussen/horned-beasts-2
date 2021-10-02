import { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import rawData from './beastObjects.json';
import SelectedBeastModal from './components/SelectedBeastModal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBeast: {},
      showModal: false,
      allBeasts: rawData,
    };
  }

  displayAsModal = name => {
    const clickedBeast = rawData.find(beast => beast.title === name);
    this.setState({ showModal: true, selectedBeast: clickedBeast });
  };

  handleClose = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <Container fluid>
        <Header />
        <Main
          allBeasts={this.state.allBeasts}
          displayAsModal={this.displayAsModal}
        />
        <SelectedBeastModal
          showModal={this.state.showModal}
          selectedBeast={this.state.selectedBeast}
          handleClose={this.handleClose}
        />
        <Footer />
      </Container>
    );
  }
}

export default App;
