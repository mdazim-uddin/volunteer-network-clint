import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FakeData from '../fakeData';
import './Banner.css';
const Banner = () => {
const [Volunteer,setVolonteer]=useState(FakeData)
    return (
        <div>
             <Container>
                 <Row>
                     {
                         Volunteer.map(item => {
                             return (
                                 <Col md={3}>
                                    <div className="volunteer">
                                        <div className="volunteer-content">
                                            <div className="volunteer-item">
                                                <img src={item.img} alt={item.img} className="img-fluid" />
                                                <div className="volunteer-overlay">
                                                <Link to={`/register/${item.id}`}>
                                                    <h4>{item.title}</h4>
                                                </Link>volunteer-network-server
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                 </Col>
                             )
                         })
                     }
                 </Row>
             </Container>
        </div>
    );
};

export default Banner;