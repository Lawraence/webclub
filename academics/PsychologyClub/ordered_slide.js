imgArray = new Array(2);
imgArray[0] = new Image;
imgArray[0].src = "images/law.jpeg";
imgArray[1] = new Image;
imgArray[1].src = "images/can't.png";
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
	if(index < 2)
	{
		index++;
		document.slider.src = imgArray[index].src;
	}
	return;
}