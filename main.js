imgArray = ["images/homepage/comicbookteacher.jpg",
            "ClubImage/Choir.jpg",
            "ClubImage/Sewing.jpg",
            "ClubImage/debate2.jpg"
            ];
textArray = ["The Comic Book Creations club is a club where students are encouraged to explore their interests and talents in the creation of comics though their own drawing. In this course, students would learn techniques including drawing, painting, and captionalizing their own creation of comic."];
linkArray = ["Comic Book Creation.html"];
index = 0;
function doBack(){
	index--;
    index = (index + imgArray.length) % (imgArray.length);
    document.picture.src = imgArray[index];
    document.getElementById("text").innerHTML = textArray[index];
    document.link.href = linkArray[index];
}
function doNext(){
	index++;
    index %= imgArray.length;
    document.picture.src = imgArray[index];
    document.getElementById("text").innerHTML = textArray[index];
    document.link.href = linkArray[index];
}

//Change color and text