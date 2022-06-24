//function types in javascript 1)function expression
function exp()
{
    console.log("welcome");
}
exp()

//2) function statement
    var a=function b()
    {
        console.log("welcome to sangli");
    }
a()
//3) anonymous function means function has no name
var x=function (){
  console.log("smt.kwc sangli");
}
x()
//firstclass function and callback function

function p(callback){
         callback()
}
function q(){
    console.log("this is q");
}
p(q)
p(function (){console.log("this anonymous function");})

//method chaining(create function in function)
function demo(){
   // return "this is return type"
   return function demo2()
   {
    return("this is demo2");//use console log instead result
   }
    }
    var demo1= demo()
    demo1();
    //console.log(demo1);
//2nd way to call
    var result= demo()()//method chaining-demo()()blank function call
    console.log(result);
    
    //Es6 variables (ecma script 16)
    var name="poonam"
    console.log(name);
    var name="shreya"
console.log(name);
//let can't redeclare the variable but we can change the value 
let fullnm="poonam balasaheb patil"
console.log(fullnm);
//let fullnm="pooja"
fullnm="pooja"
console.log(fullnm);
//const can't redeclare the variable also we can't change the value,it is constant
const nm="misba"
console.log(nm); 
//nm="poonam"
//console.log(nm);

const obj={name:"praju"}
console.log(obj.name);
//obj={name:"Anvi"}we can't change 
//console.log(obj.name);
obj.name="Anvi"
console.log(obj.name);