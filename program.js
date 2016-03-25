
// console.log(process.argv);//exercise 1

//Below is exercise 2 Baby steps. To find out, How many do we have now?
// var total = 0;

// for (var i=2; i<process.argv.length; i++){ //in args, start at index 2, (node is 0, program.js is 1)
// 	total = Number(total)+ Number(process.argv[i]);

// }

// console.log(total);

// or official solution:
// var result = 0  
       
//      for (var i = 2; i < process.argv.length; i++)  
//        result += Number(process.argv[i])  
       
//      console.log(result) //end ex 2 to get to next level, in console type
//      sudo learnyounode verify program.js

//subl could be command to run command line in Sublime

//learnyounode run will give you result without verifying it



//Below is exercise 3 readFileSync. on 3/19/16 ed had me create sample.txt, typed 3 lines, ran node program.js sample.txt
// var fs = require('fs');
// //// console.log(process.argv);
// var buffer = fs.readFileSync(process.argv[2]);//i created var buffer to hold the returned value. which was  <Buffer 54 72 65 6e 74 20 66 72 6f 6d 20 70 75 6e 63 68 79 20 63 61 6e 65 20 74 6f 61 64 20 6e 6f 20 77 6f 72 72 69 65 73 20 6c 65 74 73 20 74 68 72 6f 77 20 ... >


// console.log( buffer.toString().split('\n').length -1 );



//Below is exercise 4 My 1st async io. its like above but wo buffer obj; instead use a callbk func makes it async //fyi anyone using evergreen browser will be using ecmaScript 2016 starting Feb 7th ish
// var fs = require('fs');
// //console.log(process.argv);
// fs.readFile(process.argv[2],function (err, data){// callbk starts w function...//read file must have 1) the path 2) a read func
// 	//read the file. 
// 	if (err) return console.error(err);//1st arg
// 	console.log(data.toString().split('\n').length -1);//2nd arg is data, the buffer obj
	
// });

//node --debug [arg]   on node-inspector
// or node has built in throwing a debug
// node debug [filename]. wi file itself write 'debug' as a breakpoint. whiteboard ex Q: write a func that prints out an array

//Below is exercise 5 Filtered LS
// var fs = require('fs'),
// path = require('path');

// fs.readdir(process.argv[2],function(err,list){//2 is the array of filenames
// 	if (err) return console.error(err);
// 		// console.log(list);
// 	// fs.readFile(list);
// 	list.forEach(function(value, i, array){//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
// 		if ( path.extname(value) == '.' + process.argv[3] ){//3 is the extension. extname strips off whats in front of .
// 			console.log(value);
// 		}
// 	});
// });













