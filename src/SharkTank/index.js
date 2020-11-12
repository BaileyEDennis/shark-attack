import { Component } from 'react';
import Graveyard from '../Graveyard';
import StudentData from '../helpers/data/studentData';
import LivingStudent from '../LiveStudent';

class SharkTank extends Component {
  state = {
    students: StudentData.livingStudents(),
    deadStudents: [],
  };

  eatStudent = () => {
    const randomStudent = this.state.students[
      Math.floor(Math.random() * this.state.students.length)
    ];
    const newStudentsArray = this.state.students.filter(
      (student) => student !== randomStudent,
    );
    this.setState({
      students: newStudentsArray,
      deadStudents: this.state.deadStudents.concat(randomStudent),
    });
  };

  render() {
    const { students, deadStudents } = this.state;
    const displayLiveStudents = () => students.map((student) => (
        <LivingStudent key={student.id} students={student} />
    ));

    return (
      <>
        <h1 className='title-area'>Shark Tank</h1>
        <div className="button-area">
          <button className="btn btn-danger" onClick={this.eatStudent}>
            Shark Attack!
          </button>
        </div>
        <div className="shark-cards">{displayLiveStudents()}</div>
        <h1>Graveyard</h1>
        <div className="grave-cards">
        <Graveyard deadStudents={deadStudents} />
        </div>
      </>
    );
  }
}

export default SharkTank;
