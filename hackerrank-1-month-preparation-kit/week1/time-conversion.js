s = '12:00:00PM'

function timeConversion(s) {
    const format = s.slice(-2); // AM or PM
    let hours = s.slice(0,2);

    if (format==="AM") {
        if (hours === '12') hours = '00';
        else return s.slice(0, -2);
        return hours+s.slice(2,-2);
    }
    else if (format==="PM") {
        if (s==="12:00:00PM") return "12:00:00";
        else if (hours !== "12"){
            hours = parseInt(hours);
            hours += 12;
        }
        return hours+s.slice(2,-2);
    }
}

console.log(timeConversion(s));
