const friends = ["Michael", "Steven", "Peter"];

// Add element
const newLength = friends.push("jay");
console.log(newLength);

friends.unshift("john");
console.log(friends);

// Remove elements
friends.pop(); //Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); //First
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bobs"));

friends.push(23)
console.log(friends.includes("Steven"));
console.log(friends.includes("Bobs"));
console.log(friends.includes(23));


if (friends.includes('Bobs')){
  console.log('You have a friend called Bobs')
}else{
  console.log('there is no friend')
}

