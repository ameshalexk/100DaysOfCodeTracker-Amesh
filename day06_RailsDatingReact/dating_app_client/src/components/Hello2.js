import React , { useState, useEffect } from 'react';

export default function Daters (props) {
    return (
      <div>
                {props.daters.map( (dater,i) => {
                  if (i === 0) {
                    return  (
                      dater.map((date,j) => {
                        return (
                          <div key={date.id}> 
                          <h3>Name: {date.name} </h3>
                          <img src={date.img} alt={date.name}/>
                          <h4>Starsign: {date.starsign} </h4>
                          <h4>Age: {date.age} </h4>
                          {date.ltl
                            ? <h5> Loves to laugh and have a good time</h5>
                            : <h5> Hates laughing, does not like having a good time</h5>
                          }
                        </div>
                        )
                      })
                    )
}})}
            </div>
    )
  }


