'use strict';

const db = require('./db');
const models=require('./db/models');
const Student=models.Student;
const Campus=models.Campus;

const defaultCampuses=[
	{name:'Terra',image:'https://unsplash.it/g/252/200/?image=941'},
	{name:'Europa',image:'https://unsplash.it/g/252/200/?image=961'},
	{name:'Galatea',image:'https://unsplash.it/g/252/200/?image=947'},
	{name:'Io',image:'https://unsplash.it/g/252/200/?image=1015'},
	{name:'Janus',image:'https://unsplash.it/g/252/200/?image=1051'},
	{name:'Oberon',image:'https://unsplash.it/g/252/200/?image=1040'},
	{name:'Tethys',image:'https://unsplash.it/g/252/200/?image=1028'}
];

const defaultStudents=[
	{firstName:'Erica',lastName:'Chuang',email:'erica@email.com', image:'https://unsplash.it/g/200/200/?image=923',campusId:1},
	{firstName:'Monroe',lastName:'Chuang',email:'monroe@email.com', image:'https://unsplash.it/g/200/200/?image=1056',campusId:2},
	{firstName:'Ace',lastName:'Ventura',email:'ace@email.com', image:'https://unsplash.it/g/200/200/?image=949',campusId:3},
	{firstName:'Tim',lastName:'Jones',email:'bob@email.com', image:'https://unsplash.it/g/200/200/?image=921',campusId:4},
	{firstName:'Ann',lastName:'Lively',email:'ann@email.com', image:'https://unsplash.it/g/200/200/?image=921',campusId:5},
	{firstName:'Holy',lastName:'Toledo',email:'holy@email.com', image:'https://unsplash.it/g/200/200/?image=921',campusId:6},
	{firstName:'Cupcakes',lastName:'Forever',email:'cupcake@email.com', image:'https://unsplash.it/g/200/200/?image=921',campusId:7},
	{firstName:'Sally',lastName:'Morton',email:'erica@email.com', image:'https://unsplash.it/g/200/200/?image=923',campusId:1},
	{firstName:'Bill',lastName:'Gladwell',email:'monroe@email.com', image:'https://unsplash.it/g/200/200/?image=1056',campusId:2},
	{firstName:'Mary',lastName:'Johnson',email:'ace@email.com', image:'https://unsplash.it/g/200/200/?image=949',campusId:3},
	{firstName:'Tom',lastName:'Rubenstein',email:'bob@email.com', image:'https://unsplash.it/g/200/200/?image=921',campusId:4},
	{firstName:'Sue',lastName:'Vasquez',email:'ann@email.com', image:'https://unsplash.it/g/200/200/?image=921',campusId:5},
	{firstName:'Harry',lastName:'Kim',email:'holy@email.com', image:'https://unsplash.it/g/200/200/?image=921',campusId:6},
	{firstName:'Liz',lastName:'Choo',email:'cupcake@email.com', image:'https://unsplash.it/g/200/200/?image=921',campusId:7},
	{firstName:'Lawrence',lastName:'Lagerfeld',email:'erica@email.com', image:'https://unsplash.it/g/200/200/?image=923',campusId:1},
	{firstName:'Ethan',lastName:'Chuang',email:'monroe@email.com', image:'https://unsplash.it/g/200/200/?image=1056',campusId:2},
	{firstName:'Victoria',lastName:'Ventura',email:'ace@email.com', image:'https://unsplash.it/g/200/200/?image=949',campusId:3},
	{firstName:'Alice',lastName:'Light',email:'bob@email.com', image:'https://unsplash.it/g/200/200/?image=921',campusId:4},
	{firstName:'Jasmine',lastName:'Lively',email:'ann@email.com', image:'https://unsplash.it/g/200/200/?image=921',campusId:5},
	{firstName:'Justin',lastName:'Bieber',email:'holy@email.com', image:'https://unsplash.it/g/200/200/?image=921',campusId:6},
	{firstName:'Sarah',lastName:'Miller',email:'cupcake@email.com', image:'https://unsplash.it/g/200/200/?image=921',campusId:7}
];

// To export from mysql - export as json w/out portId, remove quote from obj keys
// To load data - create DB in PG, run npm run start-dev, then run node seed
// To reload data - set force:true node seed.js, set force:false node seed.js
// To re-seed on server - switch connection string in db/index set force:true in db/index node seed.js, set force: false node seed.js

// using .bulkCreate instead of .create
db.sync({ force: false })
.then((p1) => Campus.bulkCreate(defaultCampuses))
.then((p2) => Student.bulkCreate(defaultStudents))
.then((p3) => {
	console.log('hey, it seeded!');
	db.close();
	console.log('connection closed!');
})
.catch(err => console.log('error seeding', err));