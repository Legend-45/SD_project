import React from 'react';
import Header from '../Deshboard/Header';
import DepartmentsBar from '../Deshboard/departmentsBar';
import { Row, Col } from 'react-bootstrap';
import Summary from './Summary';
import Empty from './Empty';
import Tab from './Tab';

function Cart(props) {

    var data = [
        {
            "name": "Ambrella",
            "price": 120.90,
            "desc": "discreption of the product comes here. the length of the string that comes here may increase rhe sixe of the this tab",
            "itemNo": 5,
        },
        {
            'name': 'Snipet',
            'price': 1875.21,
            'desc': 'discreption of the product comes here. the length of the string that comes here may increase rhe sixe of the this tab',
            'itemNo': 2,
        },
        {
            'name': 'Nike Shoes',
            'price': 210.00,
            'desc': 'discreption of the product comes here. the length of the string that comes here may increase rhe sixe of the this tab',
            'itemNo': 3,
        },
        {
            'name': 'Round Eggo',
            'price': 1000.00,
            'desc': 'discreption of the product comes here. the length of the string that comes here may increase rhe sixe of the this tab',
            'itemNo': 1,
        },
    ];

    return (
        <div>
            <Header />
            <div className="body" style={{height:'40rem'}}>
                <div >
                    <Row>
                        <div style={{overflowY:'scroll', overflowX:'hidden', height:'38rem'}}>
                            {/* <Empty/>  */}
                            <Tab name={data[0].name} price={data[0].price} itemNo={data[0].itemNo}
                                desc={data[0].desc} />
                            <Tab name={data[1].name} price={data[1].price} itemNo={data[1].itemNo}
                                desc={data[1].desc} />
                            <Tab name={data[2].name} price={data[2].price} itemNo={data[2].itemNo}
                                desc={data[2].desc} />
                            <Tab name={data[1].name} price={data[1].price} itemNo={data[1].itemNo}
                                desc={data[1].desc} />
                            <Tab name={data[2].name} price={data[2].price} itemNo={data[2].itemNo}
                                desc={data[2].desc} />
                        </div>
                        {/* summary tab goes at the bottom of the list*/}
                        <Summary />
                    </Row>
                </div>
            </div>
        </div>
    );
}


export default Cart;