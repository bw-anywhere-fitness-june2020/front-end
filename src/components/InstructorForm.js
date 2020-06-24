import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const initialWorkout = {
  classname: '',
  type: '',
  start_time: '',
  duration: '',
  intensity_level: '',
  class_location: '',
  max_class_size: '',
};

const InstructorForm = (props) => {
  const [workout, setWorkout] = useState(initialWorkout);

  const [classToEdit, setClassToEdit] = useState(initialWorkout)

  const inputChange = (e) => {
    setWorkout({ ...workout, [e.target.name]: e.target.value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setWorkout({ ...workout, [e.target.name]: e.target.value });
  // };

  const addClass = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post('/class', workout)
      .then((res) => {
        console.log(res);
        setWorkout(workout);
      })
      .catch((err) => console.log(`Instructor form error: ${err}`));
  };

  const deleteClass = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .delete(`class/${classToEdit.id}`, classToEdit)
      .then(res => {
        console.log(res)
      })
      .catch((err) => console.log(`Instructor delete error: ${err}`));
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
            placeholder='Enter a start time'
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
          Class Size
          <input
            type='number'
            name='max_class_size'
            value={props.max_class_size}
            placeholder='Enter a maximum class size'
            onChange={inputChange}
          />
        </label>
        <button className='btn'>Submit</button>
      </form>
    </div>
  );
};

export default InstructorForm;
