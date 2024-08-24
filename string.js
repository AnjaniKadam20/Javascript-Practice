
        let a ="javascript is easy.javascript is cool"
        document.write(a,"<br>")
        // document.write(typeof(a),"<br>")
        // document.write(a.length)
        // let result=a.replace("easy","Hard")
        // document.write(result+"<br>")
        let pattern=/javascript/g 
        // for case sensitive gi
        // document.write(a.replace(pattern,"happy"))

        let str1="Hello"
        let str2="world"
        // document.write(str1,",",str2,"!")    
        // document.write("".concat(4,5)) //  type is string

        // extraction string parts 
        const msg="Javascript is fun"
        document.write(msg+'<br>')
        // document.write(msg.slice(1))// indexing is allowed
        // document.write(msg.slice(0,9))
        //  document.write(msg.slice(-9))
        // document.write(msg.slice(-9,-1))

        // doument.write(msg.substring(0,10))// in substring -ve indexing cannot work
        document.write(msg.substr(3,9),"<br>") 
        document.write()


        // String to lowercase
        const msg1 ="HAPPY DAYS"
        document.write(msg1+"<br>")
        document.write(msg1.toLowerCase(),"<br>")


         // trim()
        // trimstart()
        // trimend()

        const msg2="  Javascript is Fun  "
        document.write(msg2+"<br>")
        document.write(msg2.length+"<br>")
        let ab = msg2.trimEnd()    // white spaces removed
        document.write(ab.length+"<br>")
   

    //    Add padding 
    // PadStart , PadEnd
    let str="DONE"  
    document.write(str+"<br>")
    document.write(str.padStart(10,"js"),"<br>")

    let msg3="Javascript is fun"
    document.write(msg3+"<br>") 
    document.write(msg3.indexOf("t"),"<br>")
    document.write(msg3.lastIndexOf("a"),"<br>")

    document.write(msg3.repeat(2)+"<br>")
    document.write(msg3.startsWith("J"),"<br>")
    document.write(msg3.endsWith("J"),"<br>")

    // literals template
    let data='Hello world...don"t'
    document.write(data)

    // expression
    const name1="jack"
    const age='12'
    const result=`My name is ${name1} and my id is ${age}`
    document.write("<br>",result)





