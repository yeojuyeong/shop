import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useState } from 'react';
import data from './data.js';
import { Routes, Route, useNavigate, Outlet } from 'react-router-dom'
import Detail from './routes/Detail.js'
import axios from 'axios'

function App()
{
  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">

      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            {/* <Link to="/">Home</Link>
            <Link to="/detail">Detail</Link> */}
            <Nav.Link onClick={() => { navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={() => { navigate('/detail') }}>Detail</Nav.Link>
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
                    <Cards shoes={shoes[i]} i={i} key={i} />
                  )
                })}
              </div>
            </div>
            <button onClick={() =>
            {
              axios.get('https://codingapple1.github.io/shop/data2.json')
                .then((result) =>
                {
                  let copy = [...shoes, ...result.data];
                  setShoes(copy);
                })

            }}>더보기</button>
          </>} />

        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />

        {/* <Route path="/detail/:id" element={
          <>
            <div className="container">
              <div className="row">
                {shoes.map((a, id) =>
                {
                  return (
                    <Detail shoes={shoes} id={id} />
                  )
                })
                }
              </div>
            </div>
          </>
          <Detail shoes={shoes} />
        }></Route> */}

        {/* <Route path="/about" element={<About />}>
          <Route path="member" element={<div> 멤버임 </div>} />
          <Route path="location" element={<About />} />
        </Route>
        <Route path="/event" element={<Event />}>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>} />
          <Route path="two" element={<div>생일기념 쿠폰받기</div>} />
        </Route> */}

        <Route path="*" element={<div>없는 페이지입니다.</div>} />

      </Routes>
    </div >
  );
}
// function Event()
// {
//   return (
//     <div>
//       <h4> 오늘의 이벤트 </h4>
//       <Outlet> </Outlet>
//     </div>
//   )
// }
// function About()
// {
//   return (
//     <div>
//       <h4>회사정보임</h4>
//       <Outlet> </Outlet>
//     </div>
//   )
// }
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
