import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { connect } from 'react-redux';

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

const Classes = () => {
  const [classes, setClasses] = useState([]);
  const [update, setUpdate] = useState(false);
//   const [editing, setEditing] = useState(false);

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

  const [join, setJoin] = useState({
    current_number_of_registered_attendees: 1,
  });

  console.log(join.current_number_of_registered_attendees);

  const joinClass = () => {
    axiosWithAuth()
      .put(`class/${indexID}`, {
        current_number_of_registered_attendees: join.current_number_of_registered_attendees+= 1,
      })
      .then((res) => {
        console.log(res);
        setUpdate(true)
      })
      .catch((err) => console.log(`Join error: ${err}`));
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

//   const editClass = () => {
//     console.log(indexID);
//     axiosWithAuth()
//       .put(`class/${indexID}`, indexID)
//       .then((res) => {
//         console.log(res);
//         setEditing(true);
//         setClasses({
//           ...classes,
//         });
//       })
//       .catch((err) => console.log(`Edit error: ${err}`));
//   };

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
            <div className='button-row'>
              <button
                className='button'
                onClick={(e) => {
                  e.preventDefault();
                  setIndexID(item.id);
                  joinClass();
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
                  setIndexID(item.id);
                //   editClass();
                }}
              >
                {' '}
                Edit
              </button>
            </div>
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
