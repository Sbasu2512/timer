//Implement an alarm clock / timer which will beep after a specified amount of time has passed. The user can specify an unlimited number of alarms using command line arguments.
// console.log("\007");
const sound = () => process.stdout.write('\x07');
const beep = mSecs => {
 let delay = Number(mSecs);
 setTimeout(sound,delay*1000);
};
const args = process.argv ;

const alarm = (args) => {
let newArgs = args.slice(2);
length = newArgs.length;
for (let ele of newArgs) {
  if (isNaN(ele)) {
    console.log("beep not a number");
  } else if (ele < 0) {
    console.log("beep enter in seconds positive please");
  } else if (length === 0) {
    console.log("beep no seconds entered");
    return;
  } else {
    beep(ele);
    console.log("beep Wake Up");
  }
}
}
alarm(args);

// length = args.length;
// for (let ele of args) {
//   if (isNaN(ele)) {
//     console.log("beep no no");
//   } else if (ele < 0) {
//     console.log("beep no no");
//   } else if (length === 0) {
//     console.log("beep no no");
//     return;
//   } else {
//     beep(ele);
//     console.log("beep");
//   }
// }



 

