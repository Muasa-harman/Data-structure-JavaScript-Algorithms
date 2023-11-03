const obj = {
    name: 'Harman',
    age:25,
    "key-three":true,
    sayMyName: function (){
        console.log(this.name)
    }
}
obj.hobby = 'football'
// delete obj.hobby
console.log(obj.name)
console.log(obj["age"])
console.log(obj["key-three"])
console.log(obj)

//Object.keys() .values() .entries()