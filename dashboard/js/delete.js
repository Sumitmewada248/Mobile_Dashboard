function mydel(myid)
{
  let api=`http://localhost:3000/mobile/${myid}`

  fetch(api, { method: 'DELETE' }).then((res)=>{
    alert("Record Deleted!!!");
  })
  
}

async function display(){
    let table=`<table width='70%' >
        <tr>
            <th> ID </th>
            <th> Model </th>
            <th> Company </th>
            <th> Price </th>
            <th> Storage </th>
            <th id="last">  </th>
            `
            let api="http://localhost:3000/mobile";
            let mydata= await fetch(api);
        let data=await mydata.json();
        data.map((key)=>{
            table+=`<tr>
                <td> ${key.id} </td>
                <td> ${key.Model} </td>
                <td> ${key.Company} </td>
                <td> ${key.Price} </td>
                <td> ${key.Storage} </td>
                <td id="last" ><a href="#" onclick=" mydel('${key.id}')"> <i class="fa-solid fa-trash"></i></a>
          </td>
                </tr> `
            })
        table+="</table>"
        document.getElementById("remo").innerHTML=table;
        }
        setInterval(display,1000);