


export let Menuu2 = () => {
    let Opacity = document.getElementById( 'opacity');
    let Men3 = document.getElementById('Menu3');
    let Men2 = document.getElementById('Menu2');
    let Men = document.getElementById('Men');
    let Profile = document.getElementById('HeaderProfile');
    let Message = document.getElementById('DialogueContainer');
    let OpenIcon = document.getElementById('OpenIcon');
    let CloseIcon = document.getElementById('CloseIcon');

    Men.style.display = 'none';
    Men2.style.display = 'none'; 
    Men3.style.display = 'block';
    Opacity.style.display= 'none';
    Profile.style.display= 'none';
    Message.style.display= 'none';
    OpenIcon.style.display= 'inline';
    CloseIcon.style.display= 'none';
}





export let Menuu = () => {
    let Opacity = document.getElementById( 'opacity');
    let Men3 = document.getElementById('Menu3');
    let Men2 = document.getElementById('Menu2');
    let Men = document.getElementById('Men');
    let Profile = document.getElementById('HeaderProfile');
    

    Men.style.display = 'block'; 
    Men2.style.display = 'block'; 
    Men3.style.display = 'none';
    Opacity.style.display= 'block'
    Profile.style.display= 'inline';
}
   


