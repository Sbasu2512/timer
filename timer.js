//Implement an alarm clock / timer which will beep after a specified amount of time has passed. The user can specify an unlimited number of alarms using command line arguments.
// console.log("\007");
const sound = () => process.stdout.write('\x07');
const beep = mSecs => {
 let delay = Number(mSecs);
 setTimeout(sound,delay*1000);
};
const args = process.argv;

const music = (args) => {
let newArgs = args.slice(2);
console.log(newArgs);
}
music(args);

// for(let ele of args){
//   if(isNaN){
//     return;
//   }else if(ele <0){

//   }else
//   beep(ele);
// }



 

