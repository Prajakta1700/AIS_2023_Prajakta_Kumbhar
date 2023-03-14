function ValidateEmail(email)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(email.value.match(mailformat))
{
    alert(" Email Id add Successfully!");
}
else
{
    alert(" invalid Email Id address!");
}
}

