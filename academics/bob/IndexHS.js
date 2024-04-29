imgArray = new Array(9);
imgArray[0] = new Image;
imgArray[0].src = "HSfront.jpg";

imgArray[1] = new Image;
imgArray[1].src = "HS1.jpg";

imgArray[2] = new Image;
imgArray[2].src = "HS2.jpg";

imgArray[3] = new Image;
imgArray[3].src = "HS3.jpg";

imgArray[4] = new Image;
imgArray[4].src = "HS4.jpg";

imgArray[5] = new Image;
imgArray[5].src = "HS5.jpg";

imgArray[6] = new Image;
imgArray[6].src = "HS6.jpg";

imgArray[7] = new Image;
imgArray[7].src = "HS7.jpg";

imgArray[8] = new Image;
imgArray[8].src = "HS8.jpg";
index = 0;

function doBack()
{
	if(index > 0)
	{
		index--;
		document.clicking.src = imgArray[index].src;
	}
	return;
}
function doNext()
{
	if(index < 8)
	{
		index++;
		document.clicking.src = imgArray[index].src;
	}
	return;
}
