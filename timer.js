//Implement an alarm clock / timer which will beep after a specified amount of time has passed. The user can specify an unlimited number of alarms using command line arguments.
// console.log("\007");
const args = process.argv;
const alarm = (args) => {
let newArgs = args.splice(2);
for(let ele of newArgs){
  beep(ele);
}
};


const beep = mSecs => {
  let seconds = mSecs*1000;
  setTimeout(()=>{
    //console.log(' \007');
    process.stdout.write('\x07');
    },seconds)
};

 

