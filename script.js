function compute()
{
    var principal = document.getElementById("principal").nodeValue;
    if(principal<1){
         alert("Enter a positive number");
         return false;
         console.log(principal)

}
    var rate = document.getElementById("rate").nodeValue;
    console.log(rate);
    var years = document.getElementById("years");
    console.log(years);
    var interest = principal*years*rate/100;
    console.log(interest);
    var year = new Date().getFullYear()+parseInt(years);
    console.log(year);
}

function updateRate()
{
    var rateval = document.getElementById("rate").nodeValue;
    document.getElementById("rate_val").innerText=rateval;
}
        