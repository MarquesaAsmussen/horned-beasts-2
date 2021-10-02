import { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
// import SelectedBeastModal from './components/SelectedBeastModal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBeast: null,
      showModal: false,
    };
  }

  changeBeast = beast => {
    this.setState({ selectedBeast: beast });
  };
  // showModal = () => {
  //   this.setState({ showModal: true });
  // };

  render() {
    return (
      <Container fluid>
        <Header />
        <Main />
        <Footer />
        {/* <SelectedBeastModal /> */}
      </Container>
    );
  }
}

export default App;
