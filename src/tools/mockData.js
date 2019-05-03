const devPlans = [
  {
    id: 1,
    title: "Securing React Apps with Auth0",
    description: "react-auth0-authentication-security",
    statusCode: "Completed",
    employeeId: 1,
    dueDate: "2019-05-01"
  },
  {
    id: 2,
    title: "React: The Big Picture",
    description: "react-big-picture",
    statusCode: "In Progress",
    employeeId: 2,
    dueDate: "2019-05-01"
  },
  {
    id: 3,
    title: "Creating Reusable React Components",
    description: "react-creating-reusable-components",
    statusCode: "Not Started",
    employeeId: 3,
    dueDate: "2019-05-01"
  }
];

const employees = [
  {
    id: 1,
    lastName: "Jo",
    firstName: "Yuri",
    middleName: "Jogoori",
    fullName: "Yuri Jogoori Jo",
    archived: false,
    hireDate: "2019-05-01"
  },
  {
    id: 2,
    lastName: "Choi",
    firstName: "Yena",
    middleName: "Duck",
    fullName: "Yena Duck Choi",
    archived: false,
    hireDate: "2019-05-01"
  },
  {
    id: 3,
    lastName: "Kwon",
    firstName: "Eunbi",
    middleName: "Leader",
    fullName: "Eunbi Leader Kwon",
    archived: false,
    hireDate: "2019-05-01"
  }
];

const newDevPlan = {
  id: null,
  title: "",
  employeeId: null,
  description: ""
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newDevPlan,
  devPlans,
  employees
};