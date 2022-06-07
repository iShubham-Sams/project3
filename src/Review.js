import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index,setindex]=useState(0);
  const {name,job,image,text}=people[index];

  const prePerson=()=>{
    if(index==0){
      setindex(people.length-1)
    }else{
    setindex(index-1);
    }
  }
  const nextPerson=()=>{
    if(index==people.length-1){
      setindex(0)
    }else{
    setindex(index+1);
    }
  }
  const randomePerson=()=>{
   const num= Math.floor(Math.random()*people.length)
   setindex(num);
  }
  return (
    <article>
      <div className="img-container">
        <img src={image} alt={name} className="person-img"/>
        <span className='quote-icon'>
          <FaQuoteRight/>
        </span>
      </div>
      <h4 className='auther'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={prePerson}>
          <FaChevronLeft/>
        </button>
        <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight/>
        </button>
      </div>
      <button className='random-btn' onClick={randomePerson}>
        surprice me
        </button>
    </article>
  )
};

export default Review;
