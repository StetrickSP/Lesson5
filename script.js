var ten = document.getElementById('name').value;
var matkhau = document.getElementById('password').value;
document.getElementById("myButton").addEventListener("click", 
function myFunction() 
{
if (ten == "Tai" && matkhau == "123")
{
    localStorage.setItem("username","Tai");
    localStorage.setItem("password","123");
    console.log("Dung cmnr");
} 
  else
  {
    alert(document.getElementById('name'));
  }
}
)





