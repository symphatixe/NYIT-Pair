import { useEffect } from "react";

export function ChangePageTitle(title) {
  const link = document.createElement('link');
  link.rel = 'icon';
  link.href = '/bluepair.png'

  useEffect(() => { document.title = title;}, [title]);
  useEffect(() => { document.head.appendChild(link)} );
}

export class User {

  hashtags = [];
  constructor(userID, name, pwd, email, studentID, year, major, campus, bio) {
    this.userID = userID;
    this.name = name;
    this.pwd = pwd;
    this.email = email;
    this.studentID = studentID;
    this.year = year;
    this.major = major;
    this.campus = campus;
    this.bio = bio;
    this.activeUser = null;
  }

  get UserID()          {return this.userID;}
  set UserID(newID)     {this.userID = newID;}
  get Name()            {return this.name;}
  set Name(newName)     {this.name = newName;}
  get Pwd()             {return this.pwd;}
  set Pwd(newPwd)       {this.pwd = newPwd;}
  get Email()           {return this.email;}
  set Email(newEmail)   {this.email = newEmail;}
  get StudentID()       {return this.studentID;}
  set StudentID(newID)  {this.studentID = newID;}
  get Year()            {return this.year;}
  set Year(newYear)     {this.year = newYear;}
  get Major()           {return this.major;}
  set Major(newMajor)   {this.major = newMajor;}
  get Campus()          {return this.campus;}
  set Campus(newCampus) {this.campus = newCampus;}
  get Bio()             {return this.bio;}
  set Bio(newBio)       {this.bio = newBio;}
  get ActiveUser()      {return this.activeUser;}
  set ActiveUser(newUser) {this.activeUser = newUser;}

  //assume that hashtag in this case is a class object
  addHashtag(hashtag)   {this.hashtags.push(hashtag);}
  removeHashtag(hashtag) {
    if (this.hashtags.indexOf(hashtag) != -1) {
      this.hashtags.splice(this.hashtags.indexOf(hashtag), 1);
    }
  }

  createCookie() {
    const date = new Date();
    date.setTime(date.getTime() + 3 * 60 * 1000);
    let expires = "expires = " + date.toUTCString();
    document.cookie = `pwd = ${this.Pwd()}; email = ${this.Email()}; ${expires}; path = /`;
  }
}

export class Hashtag {

  constructor(text, userID) {
    this.text = text;
    this.userID = userID;
  }

  get Text()            {return this.text;}
  set Text(newText)     {text = newText;}       
  get UserID()          {return this.userID;}
  set UserID(newID)     {userID = newID;}
}

export class Course {

  constructor(CourseCode, CourseName, professor, section, location, startTime, endTime, weekday) {
    this.CourseCode = CourseCode;
    this.CourseName = CourseName;
    this.professor = professor;
    this.section = section;
    this.location = location;
    this.startTime = startTime;
    this.endTime = endTime;
    this.weekday = weekday;
  }

  get CourseCode()            {return this.CourseCode;}
  set CourseCode(newCode)     {this.CourseCode = newCode;}
  get CourseName()            {return this.CourseName;}
  set CourseName(newName)     {this.CourseName = newName;}
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

export function addClassInputs(day) {
  const classInput = document.createElement("input");
  const startInput = document.createElement("input");
  const endInput = document.createElement("input");

  classInput.setAttribute("type", "text");
  classInput.setAttribute("name", "class");
  classInput.setAttribute("id", "class");
  classInput.setAttribute("placeholder", "ex. CSCI 318");

  startInput.setAttribute("type", "text");
  startInput.setAttribute("name", "begin");
  startInput.setAttribute("id", "begin");
  startInput.setAttribute("placeholder", "Time Start");

  endInput.setAttribute("type", "text");
  endInput.setAttribute("name", "end");
  endInput.setAttribute("id", "end");
  endInput.setAttribute("placeholder", "Time End");

  const divElements = document.getElementById(day + "dayClasses").childNodes;
  const addButton = divElements[divElements.length - 2];

  document.getElementById(day + "dayClasses").insertBefore(classInput, addButton);
  addButton.insertAdjacentHTML("beforebegin", "&nbsp; <br />");
  document.getElementById(day + "dayClasses").insertBefore(startInput, addButton);
  addButton.insertAdjacentHTML("beforebegin", "&nbsp; <br />");
  document.getElementById(day + "dayClasses").insertBefore(endInput, addButton);
  addButton.insertAdjacentHTML("beforebegin", "&nbsp; <br /><br />");
}

export function collectClasses() {
  const monInputList = document.getElementById("mondayClasses").querySelectorAll("input");
  const tuesInputList = document.getElementById("tuesdayClasses").querySelectorAll("input");
  const wedInputList = document.getElementById("wednesdayClasses").querySelectorAll("input");
  const thursInputList = document.getElementById("thursdayClasses").querySelectorAll("input");
  const friInputList = document.getElementById("fridayClasses").querySelectorAll("input");
  const satInputList = document.getElementById("saturdayClasses").querySelectorAll("input");
  const sunInputList = document.getElementById("sundayClasses").querySelectorAll("input");

  const monClassList = [];
  const tuesClassList = [];
  const wedClassList = [];
  const thursClassList = [];
  const friClassList = [];
  const satClassList = [];
  const sunClassList = []; 

  for (let i = 0; i < monInputList.length; i++) {
    monClassList.push(new Course(monInputList[i].value, "", "", "", "", monInputList[i + 1].value, monInputList[i + 2].value, "Monday"));
    i += 3;
  }

  for (let i = 0; i < tuesInputList.length; i++) {
    tuesClassList.push(new Course(tuesInputList[i].value, "", "", "", "", tuesInputList[i + 1].value, tuesInputList[i + 2].value, "Tuesday"));
    i += 3;
  }

  for (let i = 0; i < wedInputList.length; i++) {
    wedClassList.push(new Course(wedInputList[i].value, "", "", "", "", wedInputList[i + 1].value, wedInputList[i + 2].value, "Wednesday"));
    i += 3;
  }

  for (let i = 0; i < thursInputList.length; i++) {
    thursClassList.push(new Course(thursInputList[i].value, "", "", "", "", thursInputList[i + 1].value, thursInputList[i + 2].value, "Thursday"));
    i += 3;
  }

  for (let i = 0; i < friInputList.length; i++) {
    friClassList.push(new Course(tuesInputList[i].value, "", "", "", "", tuesInputList[i + 1].value, tuesInputList[i + 2].value, "Friday"));
    i += 3;
  }

  for (let i = 0; i < satInputList.length; i++) {
    satClassList.push(new Course(satInputList[i].value, "", "", "", "", satInputList[i + 1].value, satInputList[i + 2].value, "Saturday"));
    i += 3;
  }

  for (let i = 0; i < sunInputList.length; i++) {
    sunClassList.push(new Course(sunInputList[i].value, "", "", "", "", sunInputList[i + 1].value, sunInputList[i + 2].value, "Sunday"));
    i += 3;
  }
}