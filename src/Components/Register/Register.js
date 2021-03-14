import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import FakeData from '../fakeData';
import './Register.css'
// import Grid from '@material-ui/core/Grid';
// import DateFnsUtils from '@date-io/date-fns';
// import {
//   MuiPickersUtilsProvider,
//   KeyboardDatePicker,
// } from '@material-ui/pickers';

const Register = () => {

    const {Id}= useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    // const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    // const handleDateChange = (date) => {
    //   setSelectedDate(date);
    // };
  // const registrationDetails = FakeData.find(task=> task.id==Id)
  
    const handleEvents= ()=>{
      const newEvents = {...loggedInUser,Id}
      fetch ("http://localhost:5000/add",{
       method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(newEvents)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })      
    }
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data =>{
        console.log(data);
    }
  
    return (

    <form className="ship-form" onSubmit={handleSubmit(onSubmit)} style={{}}> 
    <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Your Name" />
    {errors.name && <span className="error">Name is required</span>}
    <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })}  placeholder="Your Email"/>
    {errors.email && <span className="error">Email is required</span>}
    {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Date picker inline"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <br/> 
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Date picker dialog"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>   */}
    <input name="description" ref={register({ required: true })}  placeholder="Description" />
    {errors.description && <span className="error">Description is required</span>}
    <input name="event" ref={register({ required: true })}  placeholder={FakeData[Id].title}   value={FakeData[Id].title}/>
    {errors.event && <span className="error">Event name is required</span>}
    <Link to="/event"><input type="submit"   onClick={handleEvents}   /> </Link>
  
    
  </form>


    );
};

export default Register;