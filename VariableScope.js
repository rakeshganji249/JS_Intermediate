
//global variable accessed all over the code
let companyName="Cognine"

function GetEmployeesUnder(value){
    //function scope variable
    let RPA =["Sravanthi","Madhan","Ramana","Rakesh"]
    if (value === "RPA" && companyName === "Cognine"){
        console.log(RPA);
    }
}

GetEmployeesUnder("RPA")  

{
    //block scope variable
    let companyName = "CognineTech"
    console.log(companyName);
}
console.log(companyName);