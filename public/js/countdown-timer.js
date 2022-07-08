let dateEnd = new Date("2022-12-30 0:0:00").getTime();
console.log(dateEnd)
let second = 1000
let minute = second * 60
let hour = minute * 60
let day = hour * 24 
setInterval(() => {
    let distance = dateEnd - new Date().getTime();
    
    let days = Math.floor(distance/day);
    let hours = Math.floor((distance%day)/hour);
    let minutes = Math.floor((distance%hour)/minute);
    let seconds = Math.floor((distance%minute)/second);
    
//    console.log(`${days}:${hours}:${minutes}:${seconds}`);
}, 1000);