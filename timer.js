//Implement an alarm clock / timer which will beep after a specified amount of time has passed. The user can specify an unlimited number of alarms using command line arguments.
// console.log("\007");
const beep = mSecs => {
  let seconds = mSecs*1000;
  setTimeout(()=>{
    process.stdout.write(' \007');
    },seconds)
}

beep(10);
 

