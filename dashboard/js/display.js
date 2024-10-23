

async function dataDisplay()
{
 let Table=`<table >
              <tr>
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
       Table+=` <tr>
                  <td> ${key.Model} </td>
                  <td> ${key.Company} </td>
                  <td> ${key.Price} </td>
                  <td> ${key.Storage} </td>
                </tr>  
            `

   })
 Table+="</table>"
 document.getElementById("demo").innerHTML=Table;

}

dataDisplay();