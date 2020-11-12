import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GraveStone from '../GraveStone';

export default class Graveyard extends Component {
  static propTypes = {
    deadStudents: PropTypes.array,
  };

  render() {
    return (
      <div className="graveYard">
        {this.props.deadStudents.map((student) => (
          <GraveStone key={student.id} student={student} />
        ))}
      </div>
    );
  }
}
