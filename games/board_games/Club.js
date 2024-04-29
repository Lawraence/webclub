function validateText(myform)
{
    if(myform.name.value == "")
    {
        return false;
    }
    if(myform.ID.value == "")
    {
        return false;
    }
    if(myform.phone.value == "")
    {
        return false;
    }
    if(myform.email.value == "")
    {
        return false;
    }
    return true;
}
function doSubmit(myform)
{
    if(validateText(myform) == false)
    {
        alert("Hey! You didn't complete the form!");
        return;
    }
    alert("Your form had been submitted!");
}
function doClear(myform)
{
    myform.name.value = "";
    myform.ID.value = "";
    myform.phone.value = "";
    myform.email.value = "";
}
imgArray = new Array(5);
imgArray[0] = new Image;
imgArray[0].src = "images/photo1.png";
imgArray[1] = new Image;
imgArray[1].src = "images/photo2.png";
imgArray[2] = new Image;
imgArray[2].src = "images/photo3.png";
imgArray[3] = new Image;
imgArray[3].src = "images/photo4.png";
imgArray[4] = new Image;
imgArray[4].src = "images/photo5.png";
index = 0;

 
function doBack()
{
    if(index > 0)
    {
        index--;
        document.slider.src = imgArray[index].src;
     }
    return;
}
function doNext()
{
    if(index < 4)
    {
        index++;
        document.slider.src = imgArray[index].src;
    }
    return;
}