    // let display=new Date('2020-02-01')
    let display=new Date()
    document.write(display + "<br>")
    document.write(typeof(display) + "<br>")
    document.write(display.getDate(),'<br>')
    document.write(display.getDay(),'<br>')
    document.write(display.getMonth(),'<br>') // from 0 to 11
    document.write(display.getFullYear(),'<br>')
    document.write(display.getMinutes(),'<br>')
    document.write(display.getHours(),'<br>')

    display.setDate(23)
    document.write(display + '<br>')