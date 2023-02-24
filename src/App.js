import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useState } from 'react';
import data from './data.js';
import { Routes, Route, Link } from 'react-router-dom'

function App()
{
  let [shoes] = useState(data);

  return (
    <div className="App">

      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/">Home</Link>
            <Link to="/detail">Detail</Link>
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={
          <>
            <div className="main-bg"></div>
            <div className="container">
              <div className="row">
                {shoes.map((a, i) =>
                {
                  return (
                    <Cards shoes={shoes[i]} i={i} />
                  )
                })}
              </div>
            </div>
          </>} />
        <Route path="/detail" element={
          <>
            <div className="container">
              <div className="row">
                {
                  shoes.map((a, i) =>
                  {
                    return (
                      <Shoedetail shoes={shoes[i]} i={i} />
                    )
                  })
                }
              </div>
            </div>
          </>
        } />
      </Routes>

    </div >
  );
}
function Shoedetail(props)
{
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={'https://codingapple1.github.io/shop/shoes' + (props.i + 1) + '.jpg'} width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{props.shoes.title}</h4>
          <p>{props.shoes.content}</p>
          <p>{props.shoes.price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div></div></div>
  )
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
