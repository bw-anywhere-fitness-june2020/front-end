import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
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

const Classes = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get('class')
      .then((res) => {
        console.log(res);
        setClasses(res.data.classes);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className='classes'>
      {classes.map((item) => {
        return (
          <Card
            key = {item.id}
            className='class'
            body
            inverse
            style={{ backgroundColor: '#333', borderColor: '#333' }}
          >
            <h2 className='card-header'>{item.classname}</h2>
            <p className='card-content'>{item.type}</p>
            <p className='card-label'>Difficulty</p>
            <p className='card-content'>{item.intensity_level}</p>
            <p className='card-label'>Start time</p>
            <p className='card-content'>{item.start_time}</p>
            <br />
            <p className='card-label'>Max class size</p>
            <p className='card-content'>{item.max_class_size}</p>
            <p className='card-label'>
              Number of registered attendees
            </p>
            <p className='card-content'>
              {item.current_number_of_registered_attendees}
            </p>
            <button className='button'>Sign up</button>
          </Card>
        );
      })}
    </div>
  );
};

export default Classes;
