import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { connect } from 'react-redux';
import InstructorForm from '../components/InstructorForm';

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

// const initialWorkout = {
//   classname: '',
//   type: '',
//   start_time: '',
//   duration: '',
//   intensity_level: '',
//   class_location: '',
//   max_class_size: '',
//   current_number_of_registered_attendees: '',
// };

const Classes = (props) => {
  const [classes, setClasses] = useState([]);
  const [update, setUpdate] = useState(false);
  const [editing, setEditing] = useState(false);
    const [workout, setWorkout] = useState({
      classname: '',
      type: '',
      start_time: '',
      duration: '',
      intensity_level: '',
      class_location: '',
      max_class_size: 20,
      current_number_of_registered_attendees: 1,
    });

    const [currentClassID, setCurrentClassID] = useState()

  const inputChange = (e) => {
    setWorkout({ ...workout, [e.target.name]: e.target.value });
  };

  console.log(classes);

  const [indexID, setIndexID] = useState();

  useEffect(() => {
    axiosWithAuth()
      .get('class')
      .then((res) => {
        console.log(res);
        setClasses(res.data.classes);
        setUpdate(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [update]);
  // eslint-disable-next-line
  //   const [join, setJoin] = useState({
  //     current_number_of_registered_attendees: 1,
  //   });

  //   console.log(join.current_number_of_registered_attendees);

  const joinClass = (id) => {
    console.log(classes[id]);
    {
      classes.map((item, index) => {
        console.log(index, item);
        if (item.id === id) {
          axiosWithAuth()
            .put(`class/${item.id}`, {
              current_number_of_registered_attendees: (classes[
                index
              ].current_number_of_registered_attendees += 1),
            })
            .then((res) => {
              console.log(res);
              setUpdate(true);
              // setJoin(classes.indexID.current_number_of_registered_attendees)
            })
            .catch((err) => console.log(`Join error: ${err}`));
        }
      });
    }
  };

  const deleteClass = () => {
    console.log(indexID);
    axiosWithAuth()
      .delete(`class/${indexID}`)
      .then((res) => {
        console.log(res);
        setUpdate(true);
      })
      .catch((err) => console.log(`Instructor delete error: ${err}`));
  };

  const editClass = () => {
    classes.map((item, index) => {
      console.log(index, item);
      if (item.id === currentClassID) {
          console.log(workout)
        axiosWithAuth()
          .put(`class/${currentClassID}`, workout)
          .then((res) => {
            console.log(res);
            setUpdate(true);
          })
          .catch((err) => console.log(`Join error: ${err}`));
      }
    });
  };

  return (
    <div className='classes'>
      {editing ? (
        <div>
          <form className='instructor'>
            <label>
              Class Name
              <input
                type='text'
                name='classname'
                value={workout.classname}
                placeholder='Enter a class name'
                onChange={inputChange}
              />
            </label>
            <label>
              Class Type
              <input
                type='text'
                name='type'
                value={workout.type}
                placeholder='Enter a class type'
                onChange={inputChange}
              />
            </label>
            <label>
              Start Time
              <input
                type='text'
                name='start_time'
                value={workout.start_time}
                placeholder='Enter a start time (ex: 9:00am)'
                onChange={inputChange}
              />
            </label>
            <label>
              Duration
              <input
                type='text'
                name='duration'
                value={workout.duration}
                placeholder='Enter a duration (ex: 30 minutes)'
                onChange={inputChange}
              />
            </label>
            <label>
              Intensity Level
              <select
                name='intensity_level'
                value={workout.intensity_level}
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
                value={workout.class_location}
                placeholder='Enter a location'
                onChange={inputChange}
              />
            </label>
            <label>
              Registered Attendees
              <input
                type='number'
                name='current_number_of_registered_attendees'
                value={workout.current_number_of_registered_attendees}
                placeholder='Enter number of registered attendees'
                onChange={inputChange}
              />
            </label>
            <label>
              Class Size
              <input
                type='number'
                name='max_class_size'
                value={workout.max_class_size}
                placeholder='Enter a maximum class size'
                onChange={inputChange}
              />
            </label>
            <button
              onClick={(e) => {
                e.preventDefault();
                editClass();
                setEditing(false);
              }}
              className='btn'
            >
              Submit
            </button>
          </form>
        </div>
      ) : (
        classes.map((item) => {
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
              <div className='button-row'>
                <button
                  className='button'
                  onClick={(e) => {
                    e.preventDefault();
                    joinClass(item.id);
                  }}
                >
                  Join
                </button>
                <button
                  className='button'
                  onClick={(e) => {
                    e.preventDefault();
                    setIndexID(item.id);
                    deleteClass();
                  }}
                >
                  {' '}
                  Delete
                </button>
                <button
                  className='button'
                  onClick={(e) => {
                    e.preventDefault();
                    setEditing(true);
                    setCurrentClassID(item.id)
                  }}
                >
                  {' '}
                  Edit
                </button>
              </div>{' '}
            </Card>
          );
        })
      )}
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
