import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import styled from 'styled-components'
import { Nav, Tab } from 'react-bootstrap'

function Detail(props)
{
    // let [count, setCount] = useState(0);
    // let [alert, setAlert] = useState(true);
    let { id } = useParams();
    // let findshoes = props.shoes.find((x) => x.id === id);
    let [tab, setTab] = useState(0); //0은 초기값

    return (
        <div className="container">
            {/* {count}
            {
                alert === true
                    ? <div className="alert alert-warning">
                        2초 이내 구매시 할인
                    </div>
                    : null
            } */}
            {/* <button onClick={() => { setCount(count + 1) }}> 버튼 </button> */}

            <div className="row">
                <div className="col-md-6">
                    <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
                    {/* ' + (props.i + 1) + ' */}
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{props.shoes[id].title}</h4>
                    <p>{props.shoes[id].content}</p>
                    <p>{props.shoes[id].price}원</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>

            <Nav variant="tabs" defaultActiveKey="link0">
                {/* defaultActiveKey : 기본으로 눌러져있을 키 선택  */}
                <Nav.Item>
                    <Nav.Link onClick={() => setTab(0)} eventKey="link0">버튼0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => setTab(1)} eventKey="link1">버튼1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => setTab(2)} eventKey="link2">버튼2</Nav.Link>
                </Nav.Item>
            </Nav>
            <TabContent tab={tab} />

        </div>
    )
}
function TabContent(props)
{
    if (props.tab === 0) {
        return <div>내용0</div>
    } else if (props.tab === 1) {
        return <div>내용1</div>
    } else if (props.tab === 2) {
        return <div>내용2</div>
    }
}



export default Detail;