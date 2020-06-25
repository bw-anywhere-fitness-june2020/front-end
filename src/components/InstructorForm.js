import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

const initialWorkout = {
  classname: '',
  type: '',
  start_time: '',
  duration: '',
  intensity_level: '',
  class_location: '',
  max_class_size: '',
  current_number_of_registered_attendees: '',
};

const InstructorForm = (props) => {
  const [workout, setWorkout] = useState(initialWorkout);

  const { push } = useHistory();

  const inputChange = (e) => {
    setWorkout({ ...workout, [e.target.name]: e.target.value });
  };

  const addClass = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post('/class', workout)
      .then((res) => {
        console.log(res);
        setWorkout(workout);
      })
      .catch((err) => console.log(`Instructor form error: ${err}`));
    push('/classes');
  };

  return (
    <div>
      <form className='instructor' onSubmit={addClass}>
        <label>
          Class Name
          <input
            type='text'
            name='classname'
            value={props.classname}
            placeholder='Enter a class name'
            onChange={inputChange}
          />
        </label>
        <label>
          Class Type
          <input
            type='text'
            name='type'
            value={props.type}
            placeholder='Enter a class type'
            onChange={inputChange}
          />
        </label>
        <label>
          Start Time
          <input
            type='text'
            name='start_time'
            value={props.start_time}
            placeholder='Enter a start time (ex: 9:00am)'
            onChange={inputChange}
          />
        </label>
        <label>
          Duration
          <input
            type='text'
            name='duration'
            value={props.duration}
            placeholder='Enter a duration (ex: 30 minutes)'
            onChange={inputChange}
          />
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
          <input
            type='text'
            name='class_location'
            value={props.class_location}
            placeholder='Enter a location'
            onChange={inputChange}
          />
        </label>
        <label>
          Registered Attendees
          <input
            type='number'
            name='current_number_of_registered_attendees'
            value={props.current_number_of_registered_attendees}
            placeholder='Enter number of registered attendees'
            onChange={inputChange}
          />
        </label>
        <label>
          Class Size
          <input
            type='number'
            name='max_class_size'
            value={props.max_class_size}
            placeholder='Enter a maximum class size'
            onChange={inputChange}
          />
        </label>
        <button className='btn'>Add Class</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.users,
    error: state.error,
  };
};

export default connect(mapStateToProps, {})(InstructorForm);
