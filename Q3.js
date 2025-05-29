
//Q:3
const users = [
  { id: 1, username: "john_doe", age: 25, isActive: true, role: "user" },
  { id: 2, username: "jane_smith", age: 32, isActive: false, role: "admin" },
  { id: 3, username: "bob_wilson", age: 19, isActive: true, role: "user" },
  { id: 4, username: "alice_brown", age: 28, isActive: true, role: "moderator" },
  { id: 5, username: "charlie_davis", age: 35, isActive: false, role: "user" }
];


//a) Find all active users over 21 years old

const activeUsersOver21=users.filter(user=>{
    return user.isActive === true && user.age>21;
});

console.log("Active users over 21:" ,activeUsersOver21);


//b) Check if there are any inactive admin users
const hasInactiveAdmin = users.some(user => {
    return user.isActive=== false && user.role==="admin";
});
console.log("Are there any inactive admin users?",hasInactiveAdmin);

//c) Find the first user with "moderator" role
const firstModerator=users.find(user=>{
    return user.role === "moderator";
});
console.log("First user woth moderator role", firstModerator);


//d) Get all usernames of active users
const activeUsersNames=users.filter(user=>user.isActive===true).map(user=>user.username);
console.log("usernames of active users:",activeUsersNames);

//e) Check if all users have usernames longer than 5 characters

const allUsernamesLongerThan5=users.every(user=>{
    return user.username.length>5;
});
console.log("Are all usernames longer tahn 5 charachters?",allUsernamesLongerThan5);
 