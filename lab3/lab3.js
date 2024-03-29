use FacultySystemV2;
//1. Create new database named: FacultySystemV2.  
//Create student collection that has (FirstName, lastName, IsFired, FacultyID, array of objects, each object has CourseID, grade).  
//Create Faculty collection that has (Faculty Name, Address).  
//Create Course collection, which has (Course Name, Final Mark).  
//Insert some data in previous collections.  
let students=[{"firstName":"Arnoldo","lastName":"Brokenbrow","isFired":true,"facultyID":1,"courses":[{"CourseID":101,"grade":20}]},
{"firstName":"Guilbert","lastName":"Mills","isFired":true,"facultyID":1,"courses":[{"CourseID":101,"grade":41},{"CourseID":102,"grade":51},{"CourseID":103,"grade":83}]},
{"firstName":"Wilbur","lastName":"Hutten","isFired":false,"facultyID":1,"courses":[{"CourseID":101,"grade":20},{"CourseID":102,"grade":51}]},
{"firstName":"Urbanus","lastName":"Bye","isFired":true,"facultyID":4,"courses":[{"CourseID":101,"grade":68},{"CourseID":102,"grade":54},{"CourseID":103,"grade":82},{"CourseID":104,"grade":94}]},
{"firstName":"Gauthier","lastName":"Muckloe","isFired":true,"facultyID":4,"courses":[{"CourseID":101,"grade":24},{"CourseID":102,"grade":7},{"CourseID":103,"grade":55},{"CourseID":104,"grade":24}]},
{"firstName":"Domingo","lastName":"Burrus","isFired":true,"facultyID":4,"courses":[{"CourseID":101,"grade":92}]},
{"firstName":"Dal","lastName":"Sudworth","isFired":false,"facultyID":5,"courses":[{"CourseID":101,"grade":94},{"CourseID":102,"grade":11},{"CourseID":103,"grade":16}]},
{"firstName":"Danica","lastName":"Cockarill","isFired":false,"facultyID":3,"courses":[{"CourseID":101,"grade":51},{"CourseID":102,"grade":99},{"CourseID":103,"grade":17},{"CourseID":104,"grade":50}]},
{"firstName":"Ofelia","lastName":"Bahike","isFired":false,"facultyID":5,"courses":[{"CourseID":101,"grade":23},{"CourseID":102,"grade":1},{"CourseID":103,"grade":72},{"CourseID":104,"grade":98}]},
{"firstName":"Irvine","lastName":"Terrey","isFired":false,"facultyID":1,"courses":[{"CourseID":101,"grade":88},{"CourseID":102,"grade":26},{"CourseID":103,"grade":95},{"CourseID":104,"grade":46}]},
{"firstName":"Michell","lastName":"Piolli","isFired":true,"facultyID":5,"courses":[{"CourseID":101,"grade":49},{"CourseID":102,"grade":83}]},
{"firstName":"Henriette","lastName":"Bardwall","isFired":true,"facultyID":3,"courses":[{"CourseID":101,"grade":100},{"CourseID":102,"grade":35}]},
{"firstName":"Meagan","lastName":"Claydon","isFired":true,"facultyID":1,"courses":[{"CourseID":101,"grade":50}]},
{"firstName":"Gwyn","lastName":"Esler","isFired":true,"facultyID":4,"courses":[{"CourseID":101,"grade":90},{"CourseID":102,"grade":41}]},
{"firstName":"Stephannie","lastName":"Arnefield","isFired":false,"facultyID":4,"courses":[{"CourseID":101,"grade":4},{"CourseID":102,"grade":60},{"CourseID":103,"grade":90}]},
{"firstName":"Wyndham","lastName":"Keunemann","isFired":true,"facultyID":5,"courses":[{"CourseID":101,"grade":13},{"CourseID":102,"grade":21},{"CourseID":103,"grade":18}]},
{"firstName":"Gothart","lastName":"Fowlds","isFired":false,"facultyID":4,"courses":[{"CourseID":101,"grade":52},{"CourseID":102,"grade":33},{"CourseID":103,"grade":12}]},
{"firstName":"Noby","lastName":"Antusch","isFired":false,"facultyID":1,"courses":[{"CourseID":101,"grade":15},{"CourseID":102,"grade":54},{"CourseID":103,"grade":63},{"CourseID":104,"grade":70}]},
{"firstName":"Blaire","lastName":"Bellfield","isFired":false,"facultyID":5,"courses":[{"CourseID":101,"grade":57},{"CourseID":102,"grade":84}]},
{"firstName":"Nadya","lastName":"Dri","isFired":true,"facultyID":4,"courses":[{"CourseID":101,"grade":35}]},
{"firstName":"Ara","lastName":"Fitchell","isFired":true,"facultyID":1,"courses":[{"CourseID":101,"grade":5}]},
{"firstName":"Lorilee","lastName":"Stell","isFired":true,"facultyID":2,"courses":[{"CourseID":101,"grade":36},{"CourseID":102,"grade":78},{"CourseID":103,"grade":55}]},
{"firstName":"Granny","lastName":"Peppett","isFired":false,"facultyID":1,"courses":[{"CourseID":101,"grade":15},{"CourseID":102,"grade":48},{"CourseID":103,"grade":16}]},
{"firstName":"Shelbi","lastName":"Llywarch","isFired":true,"facultyID":5,"courses":[{"CourseID":101,"grade":50}]},
{"firstName":"Kacy","lastName":"Hallowes","isFired":false,"facultyID":5,"courses":[{"CourseID":101,"grade":31},{"CourseID":102,"grade":80},{"CourseID":103,"grade":17},{"CourseID":104,"grade":11}]},
{"firstName":"Florentia","lastName":"Ruseworth","isFired":false,"facultyID":3,"courses":[{"CourseID":101,"grade":58},{"CourseID":102,"grade":45}]},
{"firstName":"Devora","lastName":"Gaven","isFired":false,"facultyID":1,"courses":[{"CourseID":101,"grade":32}]},
{"firstName":"Alleyn","lastName":"Vowell","isFired":false,"facultyID":4,"courses":[{"CourseID":101,"grade":84},{"CourseID":102,"grade":5},{"CourseID":103,"grade":90}]},
{"firstName":"Tripp","lastName":"Penchen","isFired":true,"facultyID":2,"courses":[{"CourseID":101,"grade":67},{"CourseID":102,"grade":36}]},
{"firstName":"Sharleen","lastName":"Puckinghorne","isFired":false,"facultyID":1,"courses":[{"CourseID":101,"grade":46}]},
{"firstName":"Nahum","lastName":"Yancey","isFired":false,"facultyID":5,"courses":[{"CourseID":101,"grade":88},{"CourseID":102,"grade":10},{"CourseID":103,"grade":52}]},
{"firstName":"Wolfie","lastName":"Ineson","isFired":false,"facultyID":1,"courses":[{"CourseID":101,"grade":65},{"CourseID":102,"grade":1},{"CourseID":103,"grade":12}]},
{"firstName":"Aldric","lastName":"Jochens","isFired":false,"facultyID":5,"courses":[{"CourseID":101,"grade":32},{"CourseID":102,"grade":45}]},
{"firstName":"Dall","lastName":"Quilkin","isFired":false,"facultyID":1,"courses":[{"CourseID":101,"grade":94},{"CourseID":102,"grade":96},{"CourseID":103,"grade":53}]},
{"firstName":"Sapphira","lastName":"Sterzaker","isFired":false,"facultyID":5,"courses":[{"CourseID":101,"grade":99},{"CourseID":102,"grade":62},{"CourseID":103,"grade":85}]},
{"firstName":"Oralie","lastName":"Bindley","isFired":true,"facultyID":5,"courses":[{"CourseID":101,"grade":63},{"CourseID":102,"grade":80}]},
{"firstName":"Essa","lastName":"Bold","isFired":false,"facultyID":2,"courses":[{"CourseID":101,"grade":18}]},
{"firstName":"Junia","lastName":"Rolance","isFired":false,"facultyID":4,"courses":[{"CourseID":101,"grade":68}]},
{"firstName":"Violante","lastName":"Nolot","isFired":true,"facultyID":3,"courses":[{"CourseID":101,"grade":69},{"CourseID":102,"grade":64},{"CourseID":103,"grade":46}]},
{"firstName":"Merwin","lastName":"Mateev","isFired":true,"facultyID":3,"courses":[{"CourseID":101,"grade":13},{"CourseID":102,"grade":30}]},
{"firstName":"Rey","lastName":"Coleford","isFired":true,"facultyID":1,"courses":[{"CourseID":101,"grade":36},{"CourseID":102,"grade":41},{"CourseID":103,"grade":24}]},
{"firstName":"Manfred","lastName":"Kyberd","isFired":true,"facultyID":5,"courses":[{"CourseID":101,"grade":22},{"CourseID":102,"grade":88}]},
{"firstName":"Rona","lastName":"Gedling","isFired":false,"facultyID":5,"courses":[{"CourseID":101,"grade":75},{"CourseID":102,"grade":35},{"CourseID":103,"grade":63},{"CourseID":104,"grade":44}]},
{"firstName":"Jo ann","lastName":"Swale","isFired":false,"facultyID":2,"courses":[{"CourseID":101,"grade":90},{"CourseID":102,"grade":28},{"CourseID":103,"grade":74},{"CourseID":104,"grade":29}]},
{"firstName":"Orelie","lastName":"Philipsson","isFired":true,"facultyID":4,"courses":[{"CourseID":101,"grade":8}]},
{"firstName":"Titus","lastName":"Bosden","isFired":false,"facultyID":2,"courses":[{"CourseID":101,"grade":61}]},
{"firstName":"Elayne","lastName":"Crippin","isFired":true,"facultyID":1,"courses":[{"CourseID":101,"grade":44},{"CourseID":102,"grade":89},{"CourseID":103,"grade":40}]},
{"firstName":"Johny","lastName":"Callway","isFired":true,"facultyID":1,"courses":[{"CourseID":101,"grade":83},{"CourseID":102,"grade":76},{"CourseID":103,"grade":59}]},
{"firstName":"Izaak","lastName":"Boak","isFired":true,"facultyID":4,"courses":[{"CourseID":101,"grade":54},{"CourseID":102,"grade":80}]},
{"firstName":"Dell","lastName":"Coveny","isFired":false,"facultyID":4,"courses":[{"CourseID":101,"grade":95}]}];


let faculties=[{
  "id":1,
  "FacultyName": "Science",
  "Address": "71952 Manufacturers Avenue"
}, {
  "id":2,
  "FacultyName": "Engineering",
  "Address": "52207 Merchant Trail"
}, {
  "id":3,
  "FacultyName": "Arts",
  "Address": "37 Northview Lane"
}, {
  "id":4,
  "FacultyName": "Commerce",
  "Address": "0652 Sauthoff Parkway"
},{
  "id":5,
  "FacultyName": "Law",
  "Address": "88 North Hills"
}];

let courses=[{
  "id": 101,
  "CourseName": "Arabic",
  "FinalMark": 100
}, {
  "id": 102,
  "CourseName": "Physics",
  "FinalMark": 100
}, {
  "id": 103,
  "CourseName": "English",
  "FinalMark": 100
}, {
  "id": 104,
  "CourseName": "Math",
  "FinalMark": 100
}]

db.createCollection("students");
db.students.insertMany(students);

db.createCollection("faculty");
db.faculty.insertMany(faculties);

db.createCollection("course");
db.course.insertMany(courses);


//2. Display each student Full Name along with his average grade in all courses. $concat 

db.students.aggregate([
    {
        $project: {
            fullName: { $concat: ["$firstName", " ", "$lastName"] },
            avgGrade: { $avg: "$courses.grade" }
        }
    },
    {
        $project: {
            StudentData: {$concat: ["$fullName", " - Average Grade: ", { $toString: "$avgGrade"}] }
        }
    },  
    {
        $project:{_id:0,StudentData:1}
    }
])



//3. Using aggregation display the sum of final mark for all courses in Course collection. 

db.course.aggregate([
    {
        $group: {
            _id: null,
            totalFinal: { $sum: "$FinalMark" }
        }
    },
    {
        $project: { _id: 0, totalFinal: 1 }
    }
]);

//4. Implement (one to many) relation between Student and Course, by adding array of Courses IDs in the student object.  
//Select specific student with his name, and then display his courses.  
let stdCrs = db.course.find({}).toArray();
let studentExmple=db.students.findOne({firstName:"Wilbur"})
studentExmple.courses.forEach(crs=>{
    crsOfStudent = stdCrs.find(course=>course.id == crs.CourseID)
    print(`${crsOfStudent.CourseName}`);
})


//4.Implement relation between Student and faculty by adding the faculty object in the student using _id Relation using $Lookup.  
//Select specific student with his name, and then display his faculty 

db.students.aggregate([
  {
    $match: { firstName:"Izaak"} 
  },
  {
    $lookup: {
      from: "faculty",
      localField: "facultyID",
      foreignField: "id",
      as: "faculty"
    }
  },
  {
    $project: {
      _id: 0,
      student_name: "$name",
      faculty: "$faculty",
    }
  }
])


