function scrollToTop()
{
    window.scrollTo({top: 0, behavior: 'smooth'});
}
function btnVis()
{
    var button =document.getElementsById('topBtn');
    if(window.scrollY >0)
    {
        button.style.visibility = 'visible';
    }
    else
    {
        button.style.visibility = 'hidden';
    }
}
document.addEventListener('DOMContentLoaded',btnVis);
window.addEventListener('scroll', btnVis);