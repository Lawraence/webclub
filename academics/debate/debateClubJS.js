function toTop()
{
    window.scrollTo({top: 0, behavior: 'smooth'});
}
function toggleVisibility()
{
    var button = document.getElementById('top_button')
    if (window.scrollY > 0)
    {
        button.style.visibility = 'visible';
    }
    else
    {
        button.style.visibility = 'hidden';
    }
}
document.addEventListener('DOMContentLoaded', toggleVisibility);
document.addEventListener('scroll', toggleVisibility)