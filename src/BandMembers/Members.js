import React from 'react';
import Member from './Member';
import './Member.css';

export default function Members(props) {
//   console.log(props.members);
  return <div>
    <h2>Band Members</h2>
    {
      props.members.map((member, i) => 
        <Member key={member + i } member={member} />
      )
    }
    <hr></hr>
  </div>;
}
