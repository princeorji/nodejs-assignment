const path = require('path');
const process = require('process');
const os = require('os');

// Print the current working directory
const dir = path.dirname(__dirname);
console.log(dir);

// // Print the path separator
const seperator = path.sep;
console.log(seperator);

// Print the extension name
const extName = path.extname('C:\Users\MikeOrji\Desktop\alt\nodejs_a1\package-lock.json');
console.log(extName);

// // Print the process id of running process
const pid = process.pid;
console.log(pid);

// Print the user's information
const user = os.userInfo()
console.log(user)

// Print the os platform
const platform = os.platform()
console.log(platform)
