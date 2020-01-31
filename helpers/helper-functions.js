"use strict";

const addPrefix = (name, gender) => {
  switch (gender) {
    case "Male":
      return `Mr. ${name}`;
      
    case "Female":
      return `Ms. ${name}`;
  
    default:
      return name;
  }
};


module.exports = {
  addPrefix
};