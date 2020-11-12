import React from 'react';
import SharkTank from '../SharkTank';
import './App.scss';
import livingStudents from '../helpers/data/studentData';

class App extends React.Component {
  render() {
    return (
      <div>
        <SharkTank livingStudents={livingStudents} />
      </div>
    );
  }
}

export default App;
