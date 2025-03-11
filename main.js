let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river5 = document.getElementById('river5');
let boat6 = document.getElementById('boat6');
let mountains7 = document.getElementById('mountains7');
let abdelaal  = document.querySelector('.abdelaal');

window.onscroll = function()
{
    let value = scrollY;
    stars.style.left= value + 'px';
    moon.style.top= value * 4 + 'px';
    mountains3.style.top= value * 2 + 'px';
    mountains4.style.top= value * 1.5 + 'px';
    river5.style.top= value + 'px';
    boat6.style.top= value + 'px';
    boat6.style.left= value * 3 + 'px';
    abdelaal.style.fontSize= value + 'px';

    if(scrollY >= 100 ) 
        {
            abdelaal.style.fontSize= 85 + 'px';
            abdelaal.style.position= 'fixed';
            if(scrollY  >= 560){
                abdelaal.style.display= 'none';

            }else{
                abdelaal.style.display= 'block';
            }
            if (scrollY >= 162)
                {
                    document.querySelector('.main').style.background = 'linear-gradient(#2a909f, #2e003d)'
                }else{
                    document.querySelector('.main').style.background = ''

                }

            

        }


}

