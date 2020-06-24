import React, { useState} from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { connect } from 'react-redux';

const initialWorkout = {
  classname: '',
  type: '',
  start_time: '',
  duration: '',
  intensity_level: '',
  class_location: '',
  current_number_of_registered_attendees: 0,
};

const ClientForm = (props) => {
  const [workout, setWorkout] = useState(initialWorkout);

  const inputChange = (e) => {
    setWorkout({ ...workout, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(workout);
    // setWorkout({ ...workout, [e.target.name]: e.target.value });
    setWorkout({
      current_number_of_registered_attendees:
        initialWorkout.current_number_of_registered_attendees + 1,
    });
    axiosWithAuth()
      .get('/class')
      .then((res) => {
        console.log(res);
        setWorkout(res.data.classes);
        initialWorkout.classname='Pilates' ? initialWorkout.type : null
      })
      .catch((err) => console.log(`Client form error: ${err}`));
  };

  // useEffect(() => {
  //   axiosWithAuth()
  //     .get('/class')
  //     .then((res) => {
  //       console.log(res)
  //       setWorkout(res.data.classes);
  //     })
  //     .catch((err) => console.log(`Client form error: ${err}`));
  // }, []);

  return (
    <div>
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
          <select
            name='type'
            value={props.type}
            onChange={inputChange}
          >
            <option value=''>Select class type</option>
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
            <option value=''>Select a time</option>
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
            <option value=''>Select a duration</option>
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
            <option value=''>Select intensity level</option>
            <option value='easy'>easy</option>
            <option value='medium'>medium</option>
            <option value='difficult'>difficult</option>
          </select>
        </label>
        <label>
          Location
          <select
            name='location'
            value={props.class_location}
            onChange={inputChange}
          >
            <option value=''>Select location</option>
            <option value='mall'>mall</option>
            <option value='dojo'>dojo</option>
            <option value='outdoors'>outdoors</option>
          </select>
        </label>
        <button className='btn'>Submit</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    users: state.users,
    error: state.error,
  };
};

export default connect(mapStateToProps, {})(ClientForm);
