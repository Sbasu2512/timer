//Implement an alarm clock / timer which will beep after a specified amount of time has passed. The user can specify an unlimited number of alarms using command line arguments.
// console.log("\007");
const beep = time => {
  time = time*1000;
  setTimeOut(()=>{
    process.stdout.write(' \007');
    },time)
}


 

