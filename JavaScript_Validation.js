function Validation()
{
    var mobileno=document.getElementById("mobileno").value
    if(mobileno.length==10)
    {
        alert('vaild MobileNo');
    }
    else
    {
        alert('MobileNo must be 10 digits')
    }
}