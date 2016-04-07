
function stringify(value) {
// If value is null or undefined:
  if (value === null) {
    return "null";
  } else if (value === undefined) {
    return;
  }
  //In the instance of a string:
  if(typeof value === "string") {
    return isString(value);
  }
  // in the instance of a Boolean or Number
  if(typeof value === "boolean" || typeof value === "number") {
    return boolOrNum(value);
  }
  //In the instance of an array:
  if(Array.isArray(value)) {
    return isArray(value);
  }
  if(typeof value === "object") {
    return isObject(value);
  }
};

//Helper Functions
function isString(value) {
  // Wrap string in additional quotes and return
  return '"' + value + '"'
};

function boolOrNum(value) {
  // return a stringed version of the Boolean or Number
  return String(value);
};

function isArray(value) {
  // Holds a stringified version of all values in origin value array
  var storage = [];
  //loops through value array and pushes stringified values to storage array
  for(var i = 0; i < value.length; i++) {
    storage.push(stringify(value[i]))
  };
  // Joins all values which have been stringed into stroage array and adds brackets
  return ("[" + storage.join(",") + "]");
};

function isObject(value) {
  // make array of object keys:
  var objKeys = Object.keys(value);
  // only run if if more than a blank object (optimization):
  if(objKeys.length > 0) {
    // initial start on return string:
    var stringedUp = "";
    // iterate through the objectKeys array
    for(var i = 0; i < objKeys.length; i++) {
      // set variable key to specfic key in object keys array
      var key = objKeys[i];
      // checks to see if
      if(value[key] === undefined) {
        return '{}';
      } else {
        // if value[key] has a is at the last value, don't add a comma
        if(i === objKeys.length-1) {
          // adds a stringified version of each key, then a ':' then the stringified value to the key
          stringedUp += stringify(key)+':'+stringify(value[key]);
        } else {
        // same is above, but if value[key] is not the last value in object keys array, add comma
          stringedUp += stringify(key)+':'+stringify(value[key])+',';
        }
      }
    };
    // return string with curly brackets on each side
    return '{' + stringedUp + '}';

  } else {
    // retuns blank stringified object if object is empty
    return '{}'
  }
};

module.exports.stringify = stringify;
