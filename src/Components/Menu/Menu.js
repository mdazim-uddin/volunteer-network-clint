import React from 'react';
import img from '../../image/Group 1329.png'
import {FaSearchPlus } from "react-icons/fa";
import { Link} from 'react-router-dom';
import {Row , Col , Container} from 'react-bootstrap'
import './Menu.css';
const Menu = () => {
    return (
        <div>
        <Container>
        <div className="header">
         <Row>
           
            <Col md={2}>
     <img src={img} alt="logo" className="img-fluid"/>
             </Col>
             <Col md={8}>
                 <div className="manu-area">
                     <ul>
                         <li>
                             <Link to="/banner">home</Link>
                         </li>
                         <li>
                             <a href="">donation</a>
                         </li>
                         <li>
                         <a href="">events</a>
                         </li>
                         <li>
                             <a href="">blog</a>
                         </li>
                     </ul>
                    <Col md={2}>
                    <div className="login-area">
                         <div className="input-1">
                         <input type="submit" value="Register" />
                         </div>
                        <div className="input-2">
                          <input type="submit" value="Admin"/>
                        </div>
                 </div>
                    </Col>
                 </div>
             </Col>
            
         </Row>
        
         <div className="search-box">
            <input className="search-txt" type="text" name="search" placeholder="type to search"/>
            <a className="search-btn" href="#">
            <FaSearchPlus/>
            </a>
         </div>
         </div>
        </Container>
       
     </div>

    );
};

export default Menu;