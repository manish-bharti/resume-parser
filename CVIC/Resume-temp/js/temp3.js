
let addEdu = document.querySelector("#education");

let addEduBtn = document.querySelector('#eduAddbtn');
let rmEduBtn = document.querySelector('#eduRem-btn');
var countedu =1;

addEduBtn.addEventListener('click',()=>{
  countedu++;
  console.log("ok add ");
  // let eduTextArea = document.createElement("textarea");
  // eduTextArea.classList.add("form-control");
  // eduTextArea.classList.add("EdField");
  // eduTextArea.classList.add("mt-3");

  // eduTextArea.setAttribute("rows",2);
  // eduTextArea.setAttribute("placeholder","Enter here");
  // addEdu.appendChild(eduTextArea);
  let outerdiv = document.createElement("div");
  let innerdiv = document.createElement("div");
  let input1 = document.createElement("input");
  let input2 = document.createElement("input");
  let input3 = document.createElement("input");
  let input4 = document.createElement("input");
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

  input1.setAttribute("placeholder","Bachelor/Master of Tech");
  input2.setAttribute("placeholder","School/Institute Name");

  input1.classList.add("form-control");
  input2.classList.add("form-control");

  input1.classList.add("my-2");
  input2.classList.add("my-2");

  input3.classList.add("form-control");
  input4.classList.add("form-control");

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



  console.log(innerdiv);
  console.log(outerdiv);
  addEdu.appendChild(outerdiv);




});

rmEduBtn.addEventListener('click',()=>{
  
  // let parentNode = totalEdu.parentElement;
  // console.log(parentNode); 
  let lastEdu=addEdu.lastElementChild;

  // console.log(lastEdu);
  // if(parentNode===lastEdu){
  //   window.alert("You can't remove education");
  //   return;
  // }
  // else{
    
  //   addEdu.removeChild(lastEdu);
  // } 
  addEdu.removeChild(lastEdu);
});

$("#ITAdd-btn").click(()=>{
  // console.log("ok fine");
  let textarea = document.createElement("textarea");
  textarea.classList.add("form-control");
  textarea.classList.add("mb-1");
  textarea.classList.add("interestField");
  textarea.setAttribute("placeholder","Enter here");
  textarea.setAttribute("rows","1");
  document.getElementById("interest").appendChild(textarea);


});

$("#ITRem-btn").click(()=>{
  let lastint=document.getElementById("interest");
  lastint.removeChild(lastint.lastElementChild);
});


//skills section
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









GenerateCV = ()=>{
    console.log("ok");
    document.body.style.background = 'white';    
    //name field
    let nameField = document.getElementById("nameField").value;
    document.getElementById("Tname").innerText=nameField;

    //personal details
    
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

    //education
    let edudet = document.getElementById("edudet");//template
    let totalEdu=document.getElementById("edu");

    let n=1;
    let str="";
    let x=true;
    let stre="";
    while(countedu){
      let nd = addEdu.children[n];
      let stream = nd.children[0].value;
      if(x){
        stre = stream;
        x=false;
      }
      let sch = nd.children[1].value
      let from = nd.children[2].children[1].value.split("-")[0];
      let to = nd.children[2].children[3].value.split("-")[0];
     
      str+=`<li>
      <strong><h4>${stream}</h4></strong>
      <h6>${sch}</h6>
      <h6>${from}-${to}</h6>
      </li>`
      countedu--;
      n++;
    }
    edudet.innerHTML=str;
    console.log("asffd",stre);
    document.getElementById("stre").innerText=stre;

    //===============languages==============//
    let native = document.getElementById("NatLField").value;
    // document.getElementById("Taddress").innerText=native;

    let professional = document.getElementById("proLField").value;
    //document.getElementById("Taddress").innerText=professional;

    let langStr="";
    langStr+=`<li>${native}</li>
    <li>${professional}</li>`;
    document.getElementById("Tlang").innerHTML=langStr;

    //===============interests==============//
    let interestField = document.getElementsByClassName("interestField");
    let interStr = "";
    // console.log(interestField);
    for(let val of interestField){
      // console.log(val);
      interStr+=`<span class="badge badge-secondary mr-2 mb-2"><h5>${val.value}</h5></span>`;
    }
    document.getElementById("Tinterest").innerHTML=interStr;

    //===============skills==============//
    let skillField = document.getElementsByClassName("skillFieldTittle");
    let skillStr = "";
    // console.log(interestField);
    for(let val of skillField){
      // console.log(val);
      skillStr+=`<span class="badge badge-secondary mr-2 mb-2"><h5>${val.value}</h5></span>`;
    }
    document.getElementById("Tskill").innerHTML=skillStr;

    //===============projects==============//
    let prodet = document.getElementById("pro");
    let prostr="";
    while(countPro){
      prostr+=`<li class="projects">
      <span class="title">${prodet.children[0].value}</span>
      <p class="project-desc">${prodet.children[1].value}</p>
  </li>`;
    countPro--;
    }
    document.getElementById("Tproject").innerHTML=prostr;


    document.getElementById("cv-form").style.display="none";
    document.getElementById("temp3").style.display="block";
}


PrintCV = () => {
    window.print();
  };
  
  EditBack = () => {
    document.getElementById("temp3").style.display = "none";
    document.getElementById("cv-form").style.display = "block";
    document.body.style.background = '#343F56';
    countedu=1;
    countPro=1;
  };
  