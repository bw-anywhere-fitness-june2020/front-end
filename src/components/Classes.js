import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { connect } from 'react-redux';

// import {deleteClass} from '../actions/instructorActions'

import {
  Card,
  //   CardImg,
  //   CardText,
  //   CardBody,
  //   CardTitle,
  //   CardSubtitle,
  //   Button,
} from 'reactstrap';

import './classes.css';

const initialClass = {
  id: '',
  classname: '',
  type: '',
  start_time: '',
  duration: '',
  intensity_level: '',
  class_location: '',
  current_number_of_registered_attendees: 0,
};

const Classes = ({ workoutClasses, updateClasses}) => {
  const [classes, setClasses] = useState([]);
  const [update, setUpdate] = useState(false)

  const [classToEdit, setClassToEdit] = useState(initialClass);
  console.log(classes);
  console.log(classToEdit);

  const [indexID, setIndexID] = useState();

  useEffect(() => {
    axiosWithAuth()
      .get('class')
      .then((res) => {
        console.log(res);
        setClasses(res.data.classes);
        setUpdate(false)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [update]);

    console.log('test', typeof(indexID));
  const deleteClass = () => {
    console.log('test1', indexID);
    axiosWithAuth()
      .delete(`class/${indexID}`)
      .then((res) => {
        console.log(res);
        setUpdate(true)
        // updateClasses(
        //   classes.filter((item) => item.id !== workout.id),
        // );
      })
      .catch((err) => console.log(`Instructor delete error: ${err}`));
  };

  return (
    <div className='classes'>
      {classes.map((item) => {
        return (
          <Card
            key={item.id}
            className='class'
            body
            inverse
            style={{
              backgroundColor: '#333',
              borderColor: '#333',
            }}
          >
            <h2 className='card-header'>{item.classname}</h2>
            <p className='card-content'>{item.type}</p>
            <p className='card-label'>Difficulty</p>
            <p className='card-content'>{item.intensity_level}</p>
            <p className='card-label'>Start time</p>
            <p className='card-content'>{item.start_time}</p>
            <p className='card-label'>Location</p>
            <p className='card-content'>{item.class_location}</p>
            <p className='card-label'>Max class size</p>
            <p className='card-content'>{item.max_class_size}</p>
            <p className='card-label'>
              Number of registered attendees
            </p>
            <p className='card-content'>
              {item.current_number_of_registered_attendees}
            </p>
            <button className='button'>Sign up</button>
            <button
              className='button'
              onClick={(e) => {
                e.preventDefault();
                console.log('onclick', item.id);
                setIndexID(item.id);
                deleteClass();
              }}
            >
              {' '}
              Delete
            </button>
          </Card>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.users,
    error: state.error,
  };
};

export default connect(mapStateToProps, {})(Classes);
