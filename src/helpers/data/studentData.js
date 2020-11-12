const students = [
  {
    id: 1,
    imgUrl: 'https://avatars3.githubusercontent.com/u/67810121?v=4',
    firstName: 'Autumn',
    lastName: 'Fotopoulos',
    isDead: false,
  },
  {
    id: 2,
    imgUrl: 'https://avatars0.githubusercontent.com/u/29682262?v=4',
    firstName: 'Bailey',
    lastName: 'Dennis',
    isDead: false,
  },
  {
    id: 3,
    imgUrl: 'https://avatars2.githubusercontent.com/u/66916708?v=4',
    firstName: 'Chris',
    lastName: 'LoJacono',
    isDead: false,
  },
  {
    id: 4,
    imgUrl: 'https://avatars1.githubusercontent.com/u/42413958?v=4',
    firstName: 'Chris',
    lastName: 'Calhoun',
    isDead: false,
  },
  {
    id: 5,
    imgUrl: 'https://avatars2.githubusercontent.com/u/67748110?v=4',
    firstName: 'Dana',
    lastName: 'Pham',
    isDead: false,
  },
  {
    id: 6,
    imgUrl: 'https://avatars1.githubusercontent.com/u/67847120?v=4',
    firstName: 'Deanna',
    lastName: 'Mix',
    isDead: false,
  },
  {
    id: 7,
    imgUrl: 'https://avatars2.githubusercontent.com/u/20494604?v=4',
    firstName: 'Hunter',
    lastName: 'Juneau',
    isDead: false,
  },
  {
    id: 8,
    imgUrl: 'https://avatars0.githubusercontent.com/u/67886630?v=4',
    firstName: 'Jonathon',
    lastName: 'Joyner',
    isDead: false,
  },
  {
    id: 9,
    imgUrl: 'https://avatars2.githubusercontent.com/u/67443077?v=4',
    firstName: 'Jordan',
    lastName: 'Smith',
    isDead: false,
  },
  {
    id: 10,
    imgUrl: 'https://avatars3.githubusercontent.com/u/41244241?v=4',
    firstName: 'Joseph',
    lastName: 'Martin',
    isDead: false,
  },
  {
    id: 11,
    imgUrl: 'https://avatars3.githubusercontent.com/u/63985074?v=4',
    firstName: 'Kaitlyn',
    lastName: 'VanHook',
    isDead: false,
  },
  {
    id: 12,
    imgUrl: 'https://avatars2.githubusercontent.com/u/65733608?v=4',
    firstName: 'Liz',
    lastName: 'Barnes',
    isDead: false,
  },
  {
    id: 13,
    imgUrl: 'https://avatars2.githubusercontent.com/u/61816911?v=4',
    firstName: 'Micheal',
    lastName: 'Pfohl',
    isDead: false,
  },
  {
    id: 14,
    imgUrl: 'https://avatars2.githubusercontent.com/u/67298516?v=4',
    firstName: 'Robert',
    lastName: 'Bandstra',
    isDead: false,
  },
  {
    id: 15,
    imgUrl: 'https://avatars2.githubusercontent.com/u/67588177?v=4',
    firstName: 'Ryan',
    lastName: 'McNair',
    isDead: false,
  },
  {
    id: 16,
    imgUrl: 'https://avatars0.githubusercontent.com/u/65687019?v=4',
    firstName: 'Samuel',
    lastName: 'Mudick',
    isDead: false,
  },
  {
    id: 17,
    imgUrl: 'https://avatars2.githubusercontent.com/u/60371978?v=4',
    firstName: 'Summer',
    lastName: 'Duke',
    isDead: false,
  },
  {
    id: 18,
    imgUrl: 'https://avatars0.githubusercontent.com/u/63669713?v=4',
    firstName: 'Wendell',
    lastName: 'Patton',
    isDead: false,
  },
  {
    id: 19,
    imgUrl: 'https://avatars0.githubusercontent.com/u/67842770?v=4',
    firstName: 'Wanda',
    lastName: 'McInturff',
    isDead: false,
  },
  {
    id: 20,
    imgUrl: 'https://avatars3.githubusercontent.com/u/5234281?v=4',
    firstName: 'Will',
    lastName: 'Kotheimer',
    isDead: false,
  },
];

const livingStudents = () => {
  const aliveStudents = students.filter((student) => student.isDead === false);
  return aliveStudents;
};
const dearlyBeloved = () => {
  const deadStudents = students.filter((student) => student.isDead === true);
  return deadStudents;
};

export default {
  students,
  livingStudents,
  dearlyBeloved,
};
