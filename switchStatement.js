const day = "monday";
switch (day) {
  case "monday":
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("prepare theory videos");
    break;
  case "wednesday":
  case "thursdday":
    console.log("Write code example");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend :D");
    break;
  default:
    console.log("Not a valid day");
}

if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Records the videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend : D");
} else {
  console.log("Not a vallid day!");
}
