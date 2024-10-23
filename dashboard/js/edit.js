async function myed(id) {
  let Model = document.getElementById("Model").value;
  let Company = document.getElementById("Company").value;
  let Price = document.getElementById("Price").value;
  let Storage = document.getElementById("Storage").value;

  let api = `http://localhost:3000/mobile/${id}`;

    const response = await fetch(api, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Model,
        Company,
        Price,
        Storage,
      }),
    });
  alert("Data Updated ")
}

async function editDisplay(myid) {
  let api = `http://localhost:3000/mobile/${myid}`;

  
    const response = await fetch(api);
    const Data = await response.json();

    document.getElementById("show").style.display = "block";

    const myForm = `
      Edit Model: <input type="text" id="Model" value="${Data.Model}">
      <br>
      Edit Company: <input type="text" id="Company" value="${Data.Company}">
      <br>
      Edit Price: <input type="text" id="Price" value="${Data.Price}">
      <br>
      Edit Storage: <input type="text" id="Storage" value="${Data.Storage}">
      <br>
      <button id="editSaveBtn">Edit Save!</button>
    `;

    document.getElementById("show").innerHTML = myForm;

    document.getElementById("editSaveBtn").addEventListener("click", () => {
      myed(Data.id); 
    });
  } 

async function displayed() {
  let table = `<table width='70%'>
    <tr>
      <th>ID</th>
      <th>Model</th>
      <th>Company</th>
      <th>Price</th>
      <th>Storage</th>
      <th>Actions</th>
    </tr>`;

    const api = "http://localhost:3000/mobile";
    const response = await fetch(api);
    const data = await response.json();

    data.forEach((key) => {
      table += `
        <tr>
          <td>${key.id}</td>
          <td>${key.Model}</td>
          <td>${key.Company}</td>
          <td>${key.Price}</td>
          <td>${key.Storage}</td>
          <td><a href="#" onclick="editDisplay('${key.id}')"><i class="fa-regular fa-pen-to-square"></i></a></td>
        </tr>
      `;
    });

    table += "</table>";
    document.getElementById("ed").innerHTML = table;
  
}
displayed();