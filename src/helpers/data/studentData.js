const students = [
  {
    id: 1,
    firstName: 'Autumn',
    lastName: 'F',
    isDead: false,
  },
  {
    id: 2,
    firstName: 'Bailey',
    lastName: 'D',
    isDead: false,
  },
  {
    id: 3,
    firstName: 'Chris',
    lastName: 'L',
    isDead: false,
  },
  {
    id: 4,
    firstName: 'Chris',
    lastName: 'C',
    isDead: false,
  },
  {
    id: 5,
    firstName: 'Dana',
    lastName: 'P',
    isDead: false,
  },
  {
    id: 6,
    firstName: 'Deanna',
    lastName: 'M',
    isDead: false,
  },
  {
    id: 7,
    firstName: 'Hunter',
    lastName: 'J',
    isDead: false,
  },
  {
    id: 8,
    firstName: 'Jonathon',
    lastName: 'J',
    isDead: false,
  },
  {
    id: 9,
    firstName: 'Jordan',
    lastName: 'S',
    isDead: false,
  },
  {
    id: 10,
    firstName: 'Joseph',
    lastName: 'M',
    isDead: false,
  },
  {
    id: 11,
    firstName: 'Kaitlyn',
    lastName: 'V',
    isDead: false,
  },
  {
    id: 12,
    firstName: 'Liz',
    lastName: 'B',
    isDead: false,
  },
  {
    id: 13,
    firstName: 'Michael',
    lastName: 'P',
    isDead: false,
  },
  {
    id: 14,
    firstName: 'Robert',
    lastName: 'B',
    isDead: false,
  },
  {
    id: 15,
    firstName: 'Ryan',
    lastName: 'M',
    isDead: false,
  },
  {
    id: 16,
    firstName: 'Samuel',
    lastName: 'M',
    isDead: false,
  },
  {
    id: 17,
    firstName: 'Summer',
    lastName: 'D',
    isDead: false,
  },
  {
    id: 18,
    firstName: 'Wanda',
    lastName: 'M',
    isDead: false,
  },
  {
    id: 19,
    firstName: 'Wendell',
    lastName: 'P',
    isDead: false,
  },
  {
    id: 20,
    firstName: 'Will',
    lastName: 'K',
    isDead: false,
  },
];

const livingStudents = () => {
  const aliveStudents = students.filter((student) => student.isDead === false);
  return aliveStudents;
};

const dearlyBeloved = () => {
  const ripStudents = students.filter((student) => student.isDead !== false);
  return ripStudents;
};

const followTheLight = () => {
  const dyingStudent = students.filter((id) => {
    if (this.students.isDead !== true) {
      return this.students.isDead === true;
    }
    return dyingStudent;
  });
};

export default {
  students,
  livingStudents,
  dearlyBeloved,
  followTheLight,
};
