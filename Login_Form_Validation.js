function Validation()
{
    var username=document.getElementById('username').value
    var Password=document.getElementById('password').value
    if(username=="")
    {
        alert("Username can not be empty");
    }
    if(Password=="")
    {
        alert("Password can not be empty");
    }
    if((!username=="")&&(!Password==""))
    {
        alert(username+" "+Password);
    }
}
