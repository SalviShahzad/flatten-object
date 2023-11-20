/* Create a universal function that can accept an object as a parameter, and then create a logic to 
generate the single object output as shown below */

// input
var user = {
  name: "Vishal",
  address: {
    primary: {
      house: "109",
      street: {             
        main: "21",
        cross: "32"
      }
    }
  }
};

//output

// {
//   user_name: "Vishal",
//   user_address_primary_house: "109",
//   user_address_primary_street_main: "21",
//   user_address_primary_street_cross: "32",
// }

function flatten (obj) {
    let flattenObj = {} // Take an empty object to store the flatten object
    for (let i in obj) { // for in loop is used for keys in an object
        if(typeof obj[i] == 'object') {
            let temp = flatten(obj[i]) // Call flatten function recursively if a key contains an object
          /* temp will contain an object like: {
          main: "21",
          cross: "32"
          }
          We need to append i i.e. "street_" as a prefix to all the keys
          */
            for (let j in temp)
            flattenObj = {
                ...flattenObj,
                [`${i}_${j}`]: temp[j]
        }
    }
          // If the key is not an object, store the key-value as it is
        else {
        flattenObj = {
            ...flattenObj,
            [i] :obj[i]
        } 
    }
    }
  // After the end of for in loop, return flattenObj
    return flattenObj;
}

let output = flatten({'user': user}); // Send {'user': user} as argument so that "user_" can be appended to each key as prefix

console.log(output);
