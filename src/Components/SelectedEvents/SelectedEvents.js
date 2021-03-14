import React,{useEffect,useState} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
const SelectedEvents = () => {

const [events,setEvents] = useState([])  

    useEffect(()=>{
        fetch('http://localhost:5000/adeding')
        .then(res=> res.json())
        .then(data=> setEvents(data))
    },[events])

    const dltItem = (id)=>{
        fetch("http://localhost:5000/delete/?id="+id,{
            method:'DELETE' 
        })
        .then(res => res.json())
        .then(result =>{
            console.log('deleted')
        })
    }


    return (
        <>
        <h2>you have {events.length}</h2>
        <Container>
        <Row>
        {
            events.map(item=> {
                return (
                    <Col md={3}>
                        <h4>{item.name}</h4>
                        <img src={item.img}/>
                        <span>{item.email}</span>
                        <p> {item.Id}</p>
                        {/* <p>{item._id}</p> */}
                        <button onClick={()=>dltItem(item._id)}>Cancel</button>
                    </Col>
                   
                )
              
            })
        }
         </Row>
        </Container>
        </>
    )
}
export default SelectedEvents;