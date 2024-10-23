document.getElementById("mname").addEventListener("keyup", searchDisplay);
async function searchDisplay()
{
  let mname=document.getElementById("mname").value;
 let Table=`<table width="90%" border="1" bgcolor="pink">
              <tr">
               <th> Model Name</th>
                <th>Company </th>
                <th> Price </th>
                <th> Storage </th>
               </tr> 
           `

  let api="http://localhost:3000/mobile";

  let myObj= await fetch(api);
  let myData= await myObj.json();

   myData.map((key)=>{
     let str=key.Model;
     let myval=str.includes(mname);
     
             
     if (myval==true)
     {
       Table+=` <tr>
                  <td> ${key.Model} </td>
                  <td> ${key.Company} </td>
                  <td> ${key.Price} </td>
                  <td> ${key.Storage} </td>
                </tr>  
            `
     }       
   })
 Table+="</table>"
 document.getElementById("demo").innerHTML=Table;
}
// searchDisplay();
