var arrayTasks = {

	concat: function (arr1, arr2) {
		// works
		return arr1.concat(arr2);

	},

	insertAt: function (arr, itemToAdd, index) {

        return arr.splice(index, 0, itemToAdd);
      },
 
 
		
	 

	 square: function (arr) {
	 	// works

        return arr.map(function (x) {
        return Math.pow(x, 2);
     })
    },
	


	 sum: function (arr) {
	 	// works

	 return arr.reduce(function(a, b){return a+b;})
    

		
	},

 //   findDuplicates: function (arr) {
 //   var unique = arr.filter(function(arr) {
 //   return arr == self.indexOf(arr);
 //  })

 // },



// 	   removeAndClone: function (arr, valueToRemove) {

    
//        for(var i = 0; i < arr.length; i++){
//         if(arr[i]==valueToRemove) {
//             arr.splice(i,1);
//             i--; // Prevent skipping an item
//         }
//     }
// }

		


  findIndexesOf: function (arr, itemToFind) {

  	// works

    var indexes = [], i;
    for(i = 0; i < arr.length; i++)
        if (arr[i] === itemToFind)
            indexes.push(i);
    return indexes;
}


//     sumOfAllEvenNumbersSquared: function (arr) {




// //         return arr.map(function (x) {
// //         return Math.pow(x, 2);


// var x = 0
// var y = 1
// var sum = 0;
// var limit = 5;
// var evensum = 0;
// while ((x + y) < limit) {
//   sum = x + y;
//   x = y;
//   y = sum;
//   if (sum % 2 == 0) {
//   console.log(sum);
//  }
// }

//         if (sum % 2 === 0) {
//         evensum += sum;
//         return sumOfAllEvenNumbersSquared = evensum
//     // console.log(sum); // <---- log here
//    }
// }

// // }

}

module.exports = arrayTasks
