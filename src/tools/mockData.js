const devPlans = [
  {
    id: 1,
    title: "Securing React Apps with Auth0",
    description: "react-auth0-authentication-security",
    statusCode: 1,
    employeeId: 1,
    dueDate: "05-30-2019"
  },
  {
    id: 2,
    title: "React: The Big Picture",
    description: "react-big-picture",
    statusCode: 2,
    employeeId: 2,
    dueDate: "05-30-2019"
  },
  {
    id: 3,
    title: "Creating Reusable React Components",
    slug: "react-creating-reusable-components",
    statusCode: 1,
    employeeId: 3,
    dueDate: "05-30-2019"
  }
];

const employees = [
  {
    id: 1,
    lastName: "Jo",
    firstName: "Yuri",
    middleName: "Jogoori",
    archived: false,
    hireDate: "04-01-2019"
  },
  {
    id: 2,
    lastName: "Choi",
    firstName: "Yena",
    middleName: "Duck",
    archived: false,
    hireDate: "04-01-2019"
  },
  {
    id: 3,
    lastName: "Kwon",
    firstName: "Eunbi",
    middleName: "Leader",
    archived: false,
    hireDate: "04-01-2019"
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
