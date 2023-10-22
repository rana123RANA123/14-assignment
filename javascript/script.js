// clear input 
function clearInput() {
        document.getElementById("textinput").value = "";
}



// clear output 
function clearOutput() {
        document.getElementById("textoutput").innerHTML = "";
}



// Original Date - Time - Second 
let originalDate = new Date();
document.getElementById("originaltext").innerHTML = originalDate


// Array of Days
let dayNames = ["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday"];

// short input Function
function showInput(textinput){
        document.getElementById("textinput").innerHTML = textinput
        
}

// short output Function
function showOutput(textoutput){
        document.getElementById("textoutput").innerHTML = textoutput
}


// function tell time 
function tellTime(){
        let now = new Date();
        let theHr = now.getHours();
        let theMin = now.getMinutes();
        let theSec = now.getSeconds();

        textoutput.innerHTML +="<br> You clicked the button @ " + theHr + ":" + theMin + ":" + theSec + "<br />";
}



// Get Name of Today
function getName(){
        let rightNow = new Date();
        console.log(rightNow)
        let theDay = rightNow.getDay();
        console.log(theDay)
        let nameToday = dayNames[theDay];
        console.log(nameToday)
        showOutput(nameToday)

        tellTime();
}







// Calculate Days passed since i born
function iBorn(){
        let dob = document.getElementById("textinput").value;
        if(!dob){
                alert("Please enter your date of birth")
                return;
        }

        let today = new Date();
        let bornDate = new Date(dob);
        console.log(today)
        console.log(bornDate)

        let todayTime = today.getTime();
        let bornDateTime = bornDate.getTime();
        console.log(todayTime)
        console.log(bornDateTime)

        let msDiff = todayTime - bornDateTime;
        console.log("msDiff = ", msDiff)
        let daysDiff = msDiff / (1000 * 60 * 60 * 24);
        console.log(daysDiff)

        let html = Math.floor(daysDiff) + " days has been passed since you born";
        showOutput(html);

        tellTime();

}





// When is your next birthday
function birthday(){
        let dob = document.getElementById("textinput").value;
        if(!dob){
                alert("Please enter your date of birth")
                return;
        }

        let today = new Date();
        let nextBirth = new Date(dob);
        let msDiff = nextBirth.getTime() - today.getTime();
        let daysDiff = msDiff / (1000 * 60 * 60 * 24);
        let allDays = Math.floor(daysDiff);
        
        let html = "Your next birthday is '" + allDays + "'days away"; 
        document.getElementById("textoutput"),innerHTML = html;
        showOutput(html)
        tellTime();
}






// greek user
function greetUser(msg){
        document.getElementById("greekName").innerHTML = msg
        tellTime()
}
function greek(){
        let userName = prompt("Enter your name")

        let now = new Date();
        let hour = now.getHours
        console.log(hour)

        let greetingMessage = "Good "
        
        if(hour >= 4 && hour < 12){
                greetingMessage += "Morning"
        }
        else if(hour >= 12 && hour < 17 ){
                greetingMessage += "Afternoon"
        }
        else if(hour >= 17 && hour < 20){
                greetingMessage += "Evening"
        }
        else{
                greetingMessage += "Night"
        }


        let msg = greetingMessage + " " + userName
        greetUser(msg)
        
}




// tell time 1
function time1(){
          tellTime()
      
}






// tell time 2
function time2(){
        tellTime()
}







// tell time 3
function time3(){
        tellTime()
}






// calculate tax
function calculateTax(){
        let amount = +prompt("Enter Your Amount")
    
    if(!amount){
        alert("Enter Your Amount")
        return
    }
    let taxPer = +prompt("Enter Your Tax Percentage")

    let tax = amount*(taxPer/100)
         tax = Math.round(tax)

    let html =  'Your Tax Amount is ' + '<span style="color:green;font-size:20px">' + tax+ '</span>'
    showOutput(html)

}





// calculate total = price = tax
function calculateTotal(){
        let amount = +prompt("Enter Your Amount")
    
    if(!amount){
        alert("Enter Your Amount")
        return
    }
    let taxPer = +prompt("Enter Your Tax Percentage")

    let tax = amount*(taxPer/100)
    let taxRound = Math.round(tax)

    let totalAmount = taxRound + amount ;


    let html = 'Your Amount '+': '+'<span style = font-size:21px>'+amount+'</span>'+'<br>'+'Your Tax is '+': ' +'<span style = font-size:21px>'+ taxRound+'</span>'+'<br>'+'Total Amount '+': '+'<span style = font-size:21px>'+ totalAmount+'</span>'
    showOutput(html)


}