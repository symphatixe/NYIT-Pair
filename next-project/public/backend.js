let activeUser;

class user {
  hashtags = [];
  constructor(name, pwd, email, year, major, campus) {
    this.name = name;
    this.pwd = pwd;
    this.email = email;
    this.year = year;
    this.major = major;
    this.campus = campus;
  }

  get Name()            {return this.name;}
  set Name(newName)     {this.name = newName;}
  get Pwd()             {return this.pwd;}
  set Pwd(newPwd)       {this.pwd = newPwd;}
  get Email()           {return this.email;}
  set Email(newEmail)   {this.email = newEmail;}
  get Year()            {return this.year;}
  set Year(newYear)     {this.year = newYear;}
  get Major()           {return this.major;}
  set Major(newMajor)   {this.major = newMajor;}
  get Campus()          {return this.campus;}
  set Campus(newCampus) {this.campus = newCampus;}

  addHashtag(hashtag)  {this.hashtags.push(hashtag);}
  removeHashtag(hashtag) {
    if (this.hashtags.indexOf(hashtag) != -1) {
      this.hashtags.splice(indexOf(hashtag), 1);
    }
  }

  createCookie() {
    const date = new Date();
    date.setTime(date.getTime() + 3 * 60 * 1000);
    let expires = "expires = " + date.toUTCString();
    document.cookie = `pwd = ${this.Pwd()}; email = ${this.Email()}; ${expires}; path = /`;
  }
}

class course {
  constructor(courseCode, courseName, professor, section, location, startTime, endTime, weekday) {
    this.courseCode = courseCode;
    this.courseName = courseName;
    this.professor = professor;
    this.section = section;
    this.location = location;
    this.startTime = startTime;
    this.endTime = endTime;
    this.weekday = weekday;
  }

  get CourseCode()            {return this.courseCode;}
  set CourseCode(newCode)     {this.courseCode = newCode;}
  get Professor()             {return this.professor;}
  set Professor(newProf)      {this.professor = newProf;}
  get Section()               {return this.section;}
  set Section(newSection)     {this.section = newSection;}
  get Location()              {return this.location;}
  set Location(newLocation)   {this.location = newLocation;}
  get StartTime()             {return this.startTime;}
  set StartTime(newStart)     {this.startTime = newStart;}
  get EndTime()               {return this.endTime;}
  set EndTime(newEnd)         {this.endTime = newEnd;}
  get Weekday()               {return this.weekday;}
  set Weekday(newDay)         {this.weekday = newDay;}
}

function checkUser(user) {
  if (userField.innerHTML != user.Email || pwdField.innerHTML != user.Pwd) {
    alert("Incorrect email or password");
  }

  activeUser = user;
}

export function initialize() {
  console.log("Hello");
}