s = "12:00:00PM";

// Original solution. Trying to simplify in next:
// function timeConversion(s) {
//     const format = s.slice(-2); // AM or PM
//     let hours = s.slice(0,2);

//     if (format==="AM") {
//         if (hours === '12') hours = '00';
//         else return s.slice(0, -2);
//         return hours+s.slice(2,-2);
//     }
//     else if (format==="PM") {
//         if (s==="12:00:00PM") return "12:00:00";
//         else if (hours !== "12"){
//             hours = parseInt(hours);
//             hours += 12;
//         }
//         return hours+s.slice(2,-2);
//     }
// }

function timeConversion(s) {
  const format = s.slice(-2); // AM or PM
  let hours = parseInt(s.slice(0, 2));

  if (format === "AM") {
    if (hours === 12) hours = 0;
  } else if (format === "PM" && hours !== "12") {
    hours += 12;
  }
  return `${hours.toString().padStart(2, "0")}${s.slice(2, -2)}`;
}

console.log(timeConversion(s));
