import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const l="feedback-form-state";let e={email:"",message:""};const a=document.querySelector(".feedback-form");document.addEventListener("DOMContentLoaded",()=>{const t=localStorage.getItem(l);t&&(e=JSON.parse(t),a.elements.email.value=e.email,a.elements.message.value=e.message)});a.addEventListener("input",t=>{e[t.target.name]=t.target.value.trim(),localStorage.setItem(l,JSON.stringify(e))});a.addEventListener("submit",t=>{if(t.preventDefault(),!e.email||!e.message){alert("Fill please all fields");return}console.log(e),localStorage.removeItem(l),e={email:"",message:""},a.reset()});
//# sourceMappingURL=2-form.js.map
