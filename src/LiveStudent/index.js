import React, { Component } from 'react';
import {
  Card, CardImg, CardBody, CardTitle,
} from 'reactstrap';

class LivingStudent extends Component {
  render() {
    const { students } = this.props;

    return (
      <div>
        <Card className={students.firstName}>
          <CardImg top width="20%" src={students.imgUrl} alt="Card image" />
          <CardBody>
            <CardTitle tag="h5">
              {students.firstName} {students.lastName}
            </CardTitle>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default LivingStudent;
