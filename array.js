let skills=["Html","css","bs","javascript","ui/ux","Html"]
// let skills=new Array("Html","css","bs","javascript");
document.write(skills + "<br>")
// skills.push("UI/UX");
// skills.pop()
// skills.shift() // first element pop
// skills.unshift("ui/ux")// element gets pushed at first index
// delete skills[2];
// document.write(skills)
// console.log(skills);
// document.write(skills[0])
// document.write(skills.length)
// document.write(skills.join("*"))

// Line by line code is executed

// alert(skills);
// First initialize then use it     
// let emp=new Array();
// emp[0]="John";
// console.log(emp);
// document.write(emp)

// Slice method Add/Delete
// skills.splice(1,1) // The index from where you want to start, the elements you want to delete (include the element that the index starts from)
// skills.splice(1,2,"uiux","frontend","github")// adding values
// document.write(skills.slice(1,4))
// document.write(skills.slice(1)) // first elemnt sliced
// document.write(skills.slice(-1))// last element survived
// document.write(skills.slice(-1))


// concat()
let a=[1,2,3]
let b=[4,5,6]
// document.write(a.concat(b))
// document.write(b.concat(a),"<br>")

// sorting
let names=[1000,50,3,2]
// document.write(names.sort())
//    document.write(names.sort(function(a, b) { return a - b; }));
//    document.write(names.reverse())
//    document.write(names.fill(10,1,3))  //    the number to fill the ,start position to fill till which position to end


document.write(skills.lastIndexOf("Html"));







// document.write(skills)