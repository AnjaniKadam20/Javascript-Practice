// let person={
//     firstname:"John",
//     lastname:"Willium",
//     fullname:function(){
//              return this.firstname + " "+ this.lastname

//     }
    
// }
// console.log(person.fullname());

// Comman methosd for call method
let person={
    fullname:function(){
             return this.firstname + " "+ this.lastname

    }
    
}

let person1={
    firstname:"John",
    lastname:"Whilliam",
}

let person2={
    firstname:"Max",
    lastname:"Robert"

}
console.log(person.fullname.call(person2))


// apply method-extra arguments can be passed
let individual={
    fullname:function(city ,country){
             return this.firstname + " "+ this.lastname+" "+city+" "+ country;

    }
    
}

let ind1={
    firstname:"John",
    lastname:"Whilliam",
}

let ind2={
    firstname:"Max",
    lastname:"Robert"

}
console.log(individual.fullname.apply(ind2,["Pune", "India"]))


// bind method
// let person={
//     firstname:"John",
//     lastname:"Willium",
//     fullname:function(){
//              return this.firstname + " "+ this.lastname

//     }
    
// }

// let member={
//     firstname:"Max",
//     lastname:"Robert",

// }
// let fullname = person.fullname.bind(member)
// console.log(fullname());