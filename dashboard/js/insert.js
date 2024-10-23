
document.getElementById("btnsave").addEventListener("click", bookSave);


async function bookSave(){
    let model=document.getElementById("mname").value;
    let companyname=document.getElementById("companyname").value;
    let price=document.getElementById("price").value;
    let storage=document.getElementById("storage").value;


    let api="http://localhost:3000/mobile";

    const response= await fetch(api, {
        method: "POST",
        body: JSON.stringify({ 
          "Model":model,
          "Company":companyname,
          "Price":price,
          "Storage":storage   
         }),
         headers: {
            "Content-Type": "application/json",
          }
    });

    console.log(response);
    alert("data save!!!");


}