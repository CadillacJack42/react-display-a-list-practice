import React from 'react';

export default function Member(props) {
  return <div>
    <h3>{props.member.name}</h3>
    <ul>
      {props.member.members.map((member, i) => 
        <li key={member + i}>{member}</li>)}
    </ul>
  </div>;
}
