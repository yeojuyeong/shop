import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useState } from 'react';
import data from './data.js';

function App()
{
  let [shoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="main-bg"></div>
      <div className="container">
        <div className="row">
          {/* <div className="col-md-4">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%" />
            <h4>{shoes[0].title}</h4>
            <p>{shoes[0].price}</p></div>
          <div className="col-md-4">
            <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="80%" />
            <h4>상품명</h4>
            <p>상품설명</p></div>
          <div className="col-md-4">
            <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="80%" />
            <h4>상품명</h4>
            <p>상품설명</p></div> */}

          {/* <Cards shoes={shoes[0]} i={1} />
          <Cards shoes={shoes[1]} i={2} />
          <Cards shoes={shoes[2]} i={3} /> */}
          {
            shoes.map((a, i) =>
            {
              return (
                <Cards shoes={shoes[i]} i={i} />
              )
            })
          }

        </div>
      </div>
    </div >
  );
}


function Cards(props)
{
  return (
    <div className="col-md-4">
      <img src={'https://codingapple1.github.io/shop/shoes' + (props.i + 1) + '.jpg'} width="80%" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p></div>
  )
}

export default App;
