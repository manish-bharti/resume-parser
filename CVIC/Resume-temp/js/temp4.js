
//key skills
$("#skAdd-btn").click(()=>{
    // console.log("ok fine");
    let skillInp = document.createElement("input");
    skillInp.classList.add("form-control");
    skillInp.classList.add("mb-1");
    skillInp.classList.add("skillFieldTittle");
    skillInp.setAttribute("placeholder","Skill tittle");
    skillInp.setAttribute("type","text");
    document.getElementById("skilltUser").appendChild(skillInp);
  
  
  });
  
  $("#skRem-btn").click(()=>{
    let lastskill=document.getElementById("skilltUser");
    lastskill.removeChild(lastskill.lastElementChild);
  });


    //===============Education==============//
    let addEdu = document.querySelector("#education");

    let addEduBtn = document.querySelector('#eduAddbtn');
    let rmEduBtn = document.querySelector('#eduRem-btn');
    var countedu =1;

    $("#eduAddbtn").click(()=>{
        countedu++;
    console.log("ok add ");
  
  let outerdiv = document.createElement("div");
  let innerdiv = document.createElement("div");
  let input1 = document.createElement("input");
  let input2 = document.createElement("input");
  let input3 = document.createElement("input");
  let input4 = document.createElement("input");
  let input5 = document.createElement("input");
  let span1 =document.createElement("span");
  let span2 =document.createElement("span");
  span1.innerText="From";
  span2.innerText="To";
  innerdiv.style.display="inline-flex";

  outerdiv.setAttribute("id","edu");
  input1.setAttribute("type","text");
  input2.setAttribute("type","text");
  input3.setAttribute("type","date");
  input4.setAttribute("type","date");
  input5.setAttribute("type","number");

  input1.setAttribute("id","stream");
  input2.setAttribute("id","school");
  input3.setAttribute("id","startdate");
  input4.setAttribute("id","enddate");
  input5.setAttribute("id","score");


  input1.setAttribute("placeholder","Bachelor/Master of Tech");
  input2.setAttribute("placeholder","School/Institute Name");
  input5.setAttribute("placeholder","CGPA/Percentage");


  input1.classList.add("form-control");
  input2.classList.add("form-control");

  input1.classList.add("my-2");
  input2.classList.add("my-2");
  input5.classList.add("my-2");


  input3.classList.add("form-control");
  input4.classList.add("form-control");
  input5.classList.add("form-control");


  span1.classList.add("eduspan");
  span2.classList.add("eduspan");

  innerdiv.classList.add('ml-1');
  
  
  innerdiv.appendChild(span1);
  innerdiv.appendChild(input3);
  innerdiv.appendChild(span2);
  innerdiv.appendChild(input4);

  outerdiv.appendChild(input1);
  outerdiv.appendChild(input2);
  outerdiv.appendChild(innerdiv);
  outerdiv.appendChild(input5);



  console.log(innerdiv);
  console.log(outerdiv);
  addEdu.appendChild(outerdiv);



});

$("#eduRem-btn").click(()=>{
  let lastEdu=addEdu.lastElementChild;
  addEdu.removeChild(lastEdu);

});

//projects

let projtittle = document.getElementsByClassName("projectFieldTittle");
  let projdesc = document.getElementsByClassName("projectFieldDesc");

let tittleStr = "";
let descStr = "";
let countPro = 1;
$("#PAdd-btn").click(()=>{
  // console.log("ok fine");
  countPro++;
  let pro = document.createElement("div");
  pro.setAttribute("id","pro");
  let ProjectInp = document.createElement("input");
  let ProjectDesc = document.createElement("textarea");
  ProjectInp.classList.add("form-control");
  ProjectDesc.classList.add("form-control");
  ProjectInp.classList.add("projectFieldTittle");
  ProjectDesc.classList.add("projectFieldDesc");
  ProjectDesc.classList.add("my-2");
  ProjectDesc.setAttribute("rows","2");
  ProjectInp.setAttribute("type","text");

  
  ProjectInp.setAttribute("placeholder","Project tittle");
  ProjectDesc.setAttribute("placeholder","short description");
  pro.appendChild(ProjectInp);
  pro.appendChild(ProjectDesc);
  document.getElementById("projectUser").appendChild(pro);
  // document.getElementById("projectUser").appendChild(ProjectDesc);



});

$("#PRRem-btn").click(()=>{
  let lastproject=document.getElementById("projectUser");
  lastproject.removeChild(lastproject.lastElementChild);
  // lastproject.removeChild(lastproject.lastElementChild.lastElementSibling);

});

//================interests===================//
// $("#ITAdd-btn").click(()=>{
//     // console.log("ok fine");
//     let textarea = document.createElement("textarea");
//     textarea.classList.add("form-control");
//     textarea.classList.add("mb-1");
//     textarea.classList.add("interestField");
//     textarea.setAttribute("placeholder","Enter here");
//     textarea.setAttribute("rows","1");
//     document.getElementById("interest").appendChild(textarea);
  
  
//   });
  
//   $("#ITRem-btn").click(()=>{
//     let lastint=document.getElementById("interest");
//     lastint.removeChild(lastint.lastElementChild);
//   });
  


  

GenerateCV=()=>{
    console.log("ok")
    //===============personal details=============//
    let nameField = document.getElementById("nameField").value;
    document.getElementById("Tname").innerText=nameField;

    //email
    let emailField = document.getElementById("emailField").value;
    document.getElementById("Temail").innerText=emailField;

    //linkedin
    let linkedinField = document.getElementById("linkedinField").value;
    document.getElementById("Tlinkedn").innerText=linkedinField;

    //address
    let addressField = document.getElementById("addressField").value;
    document.getElementById("Taddress").innerText=addressField;

    //github
    let gitField = document.getElementById("gitField").value;
    document.getElementById("Tgit").innerText=gitField;

    //mobile
    let contactField = document.getElementById("contactField").value;
    document.getElementById("Tmobile").innerText=contactField;

    //career objective
    let summry = document.getElementById("Objective").value;
    // console.log(summry);
    document.getElementById("summryDesc").innerText=summry;

    //===============skills==============//
    let skillField = document.getElementsByClassName("skillFieldTittle");
    let skillStr = "";
    // console.log(interestField);
    for(let val of skillField){
    //   console.log(val.value);
      skillStr+=`<span class="badge badge-secondary mr-2 mb-2"><h5>${val.value}</h5></span>`;
    }
    document.getElementById("Tskill").innerHTML=skillStr;

    //===============Education==============//
    


    let edu = document.getElementById("education");
    
    // console.log(edu1);
    let res="";
    let n=1;
    let x=true;
    let stre = "";
    // console.log(countedu);
    while(countedu){
        let edu1 = edu.children[n];
        let stream = edu1.children[0].value;
        // console.log(stream);
        if(x) {
          stre = stream;
          x=false;
        }
        let sch = edu1.children[1].value;
        // console.log(sch);
        let scr = edu1.children[3].value;
        // console.log(scr);
        let from=edu1.children[2].children[1].value.split("-")[0];
        let to=edu1.children[2].children[3].value.split("-")[0];
        res+=`<li class="row w-100">
                <div class="eduleft br-primary col-md-4">
                    <h5 id="stream">${stream}</h5>
                    <h5>${sch}</h5>
                    
                </div>
                <div class="eduright br-secondary col-md-8">
                    <h6>${from}-${to}</h6>
                    <h6>${scr}</h6>
                    
                </div>
            </li>`;   

        n++;
        countedu--;
    }
    let label = `<h5 id="headings">EDUCATION</h5>`;
    document.getElementById("Tedu1").innerHTML=label+res;
    console.log(stre);
    document.getElementById("Tstream").innerText=stre;

     //===============projects==============//
     let prodet = document.getElementById("projectUser");
     
     let prostr="";
     let pn=1;
     while(countPro){
        let pnode = prodet.children[pn];
        // console.log(pnode)
       prostr+=`<li>
       <span id="protitle">${pnode.children[0].value}</span>
       <p id="prodesc">${pnode.children[1].value}</p>
   </li>`;
     countPro--;
     pn++;
     }
     document.getElementById("Tproject").innerHTML=prostr;

     //===============interests==============//
    
     
     let interestField = document.getElementsByClassName("interestField");
    
    
    document.getElementById("language").innerHTML=`<span>Languages-</span>${interestField.value}`;
    document.getElementById("hobbies").innerHTML=`<span>Interests-</span>${document.getElementById("proLField").value}`;



    document.getElementById("cv-form").style.display="none";
    document.getElementById("temp4").style.display="block";
    document.body.style.background = 'white';



}
PrintCV = () => {
    window.print();
  };
  
  EditBack = () => {
    document.getElementById("temp4").style.display = "none";
    document.getElementById("cv-form").style.display = "block";
    document.body.style.background = '#343F56';
    countPro=1;
    countedu=1;
  };