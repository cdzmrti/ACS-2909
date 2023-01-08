var user = {     // an object
    name: "Salah",  // by key "name" store value "John"
    age: 29,        // by key "age" store value 30
    "likes green tea": true  // multiword property name must be quoted
  };

for (var key in user){
    if (typeof(user[key]) == "string" )
         //alert(key +" is a string");
         console.log(user[key] + " is a string");
}

var json_str =  '{"name":"Salah", "age":29, "car":null}';
const obj = JSON.parse(json_str);
console.log(obj.name);

json_str_again = JSON.stringify(obj);
console.log(json_str_again);

