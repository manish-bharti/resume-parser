
// document.getElementById("cv-form").style.display = "none";
// document.getElementById("temp").style.display = "none";

GenerateCV = ()=>{
    //name field
    console.log("eveything is ok");

    let fname = document.getElementById("nameField").value;
    let tname = document.getElementById("Tname");
    tname.innerHTML=fname;
    console.log(fname);
    document.getElementById("cv-form").style.display = "none";
}