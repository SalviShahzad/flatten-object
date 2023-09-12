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
    let flattenObj = {}
    for (let i in obj) {
        if(typeof obj[i] == 'object') {
            let temp = flatten(obj[i])
            for (let j in temp)
            flattenObj = {
                ...flattenObj,
                [`${i}_${j}`]: temp[j]
        }
    }
        else {
        flattenObj = {
            ...flattenObj,
            [i] :obj[i]
        } 
    }
    }
    return flattenObj;
}

let output = flatten({'user': user});

console.log(output);
