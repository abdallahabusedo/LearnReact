import React from "react";

function NameList() {
  const Person = [
    {
      id: 1,
      name: "John",
      age: 20,
      Skill: "react",
    },
    {
      id: 2,
      name: "Sam",
      age: 25,
      Skill: "react",
    },
    {
      id: 3,
      name: "Abdallah",
      age: 21,
      Skill: "react",
    },
    {
      id: 4,
      name: "Sara",
      age: 27,
      Skill: "react",
    },
  ];
  const PersonList = Person.map((person) => (
    <h4>
      my name is {person.name} and i am {person.age} yearn old and i know
      {person.Skill}
    </h4>
  ));
  return (
    <div>
      <div>{PersonList}</div>
    </div>
  );
}

export default NameList;
