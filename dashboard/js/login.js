document.getElementById("btnLogin").addEventListener("click",login);



function login(){
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

  if(username=='sumit' && password=='1234'){
    alert(`Login successful, welcome ${username}`);

   window.location.href="index.html";

  }
else{
    alert('Indalid Username or Password')
}

}