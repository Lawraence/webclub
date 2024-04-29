imgArray = new Array(1);
imgArray[0] = new Image;
imgArray[0].src = "images/credits.jpeg";
imgArray[1] = new Image;
imgArray[1].src = "images/credits2.jpeg";
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
	if(index < 1)
	{
		index++;
		document.slider.src = imgArray[index].src;
	}
	return;
}