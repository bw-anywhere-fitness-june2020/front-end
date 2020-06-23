import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const initialWorkout = {
  classname: '',
  type: '',
  start_time: '',
  duration: '',
  intensity_level: '',
  location: '',
};

const ClientForm = (props) => {
  const [workout, setWorkout] = useState(initialWorkout);

  const inputChange = (e) => {
    setWorkout({ ...workout, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setWorkout({ ...workout, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    axiosWithAuth()
      .get('/class')
      .then((res) => {
        console.log(res);
      })
      .catch((err) =>
        console.log(`Client form error: ${err.response}`),
      );
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Class Name
        <select
          name='classname'
          value={props.classname}
          onChange={inputChange}
        >
          <option value=''> Select a class</option>
          <option value='Yoga'>Yoga</option>
          <option value='Pilates'>Pilates</option>
          <option value='Karate'>Karate</option>
          <option value='Weightlifting'>Weightlifting</option>
          <option value='Running'>Running</option>
        </select>
      </label>
      <label>
        Class Type
        <select name='type' value={props.type} onChange={inputChange}>
          <option>Select class type</option>
          <option value='stretching'>stretching</option>
          <option value='martial arts'>martial arts</option>
          <option value='strength'>strength</option>
          <option value='cardio'>cardio</option>
        </select>
      </label>
      <label>
        Start Time
        <select
          name='start_time'
          value={props.start_time}
          onChange={inputChange}
        >
          <option>Select a time</option>
          <option value='9:00am'>9:00am</option>
          <option value='1:00pm'>1:00pm</option>
          <option value='2:00pm'>2:00pm</option>
          <option value='5:00pm'>5:00pm</option>
        </select>
      </label>
      <label>
        Duration
        <select
          name='duration'
          value={props.duration}
          onChange={inputChange}
        >
          <option>Select a duration</option>
          <option value='30 minutes'>30 minutes</option>
          <option value='1 hour'>1 hour</option>
          <option value='2 hours'>2 hours</option>
        </select>
      </label>
      <label>
        Intensity Level
        <select
          name='intensity_level'
          value={props.intensity_level}
          onChange={inputChange}
        >
          <option>Select intensity level</option>
          <option value='easy'>easy</option>
          <option value='medium'>medium</option>
          <option value='difficult'>difficult</option>
        </select>
      </label>
      <label>
        Location
        <select
          name='location'
          value={props.location}
          onChange={inputChange}
        >
          <option>Select location</option>
          <option value='mall'>mall</option>
          <option value='dojo'>dojo</option>
          <option value='outdoors'>outdoors</option>
        </select>
      </label>
      <button>Submit</button>
    </form>
  );
};

export default ClientForm;
