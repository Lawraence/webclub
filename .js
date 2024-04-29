imgArray = ["images/academic/bibsc_debate.png", "images/academic/dev.png", "images/academic/intschoolcup_debate.jpg", "images/academic/sismun_mun.png", "images/academic/tochamps_debate.jpg"];
index = 0;
function doBack(){
	if (index>0) {
		index--;
		document.picture.src = imgArray[index];
	}
}
function doNext(){
	if (index<imgArray.length-1) {
		index++;
		document.picture.src = imgArray[index];
	}
}