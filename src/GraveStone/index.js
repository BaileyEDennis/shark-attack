import React, { Component } from 'react';
import {
  Card, CardImg, CardBody, CardTitle,
} from 'reactstrap';

class deadStudent extends Component {
  render() {
    const { student } = this.props;

    return (
      <div>
        <Card className={student.firstName}>
          <CardImg top width="20%" src={student.imgUrl} alt="Card image" />
          <CardBody>
            <CardTitle tag="h5">
              {student.firstName} {student.lastName}
            </CardTitle>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default deadStudent;
