let John=[2000,3000,5000,6000]
// let len=John.length
// document.write(len,"<br>")
let total=0;
let i
for(i=0;i<4;i++){
    // document.write(John[i],"<br>")
    total+=John[i]
}
document.write("Total expense:",total,"<br>")

// function functionName(){
//     // code of execution
// }
// functionName()

// 1.defination
// 2.declaration
// 3.calling

function Msg(){
    document.write("Hello world.....","<br>")
}

Msg()


// global and local variable

let b="This is global variable"
function happy(){
    let a ="This is local variable"
    document.write(a,"<br>")
    document.write(b,"<br>")
}
 happy()
//  document.write(a) // Gives error e
 document.write(b,"<br>")

// Traditional function 
function totale(c,d){
    // let a=10
    // let b=20
    document.write(c+d,"<br>")

}
totale(10,20)

// parameters and arguments are sent

let mary=[2000,3000,4000,6000]
let prince=[400,5000,6000]
let total_expense=0
function total_expsense_emp(name){
for(let i=0;i<name.length;i++){
total_expense+=name[i]
}
document.write("Total expsense of name:",total_expense,"<br>")
}
total_expsense_emp(mary)
total_expsense_emp(prince)
document.write("hi","<br>")



// // function with default value
function sum(a,b=30){
document.write(a+b,"<br>")
}
sum(40,20)
// // priority given to outside

function sume(a,b=30){
return a+b  // return does not store value
}
let result=sume(10,40)
document.write(result)

// when multiple values have to taken 
function sumf(...args){
let sum=0;
for(let num of args){
sum+=num

}
return sum  
}
let x=sumf(1,2,3,4,5,6)
document.write(x,"<br>")


// arrow function 
let hello=(a,b)=>{
document.write(a+b)
}
document.write(hello(10,30),"<br>")

let hi=()=>"Hello world"
document.write(hi())


//call back function
// call function from another function
// function display(name,callback){
//     document.write("hi"," ",name)
//     callback() // callback turns to callme 

// }
// function callMe(){
//     document.write("I am callback function")
// }
// display("John",callMe)

// let show=function(){
//     document.write("Hello")
// }
// show()