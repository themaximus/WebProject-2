


export let Menuu2 = () => {
   // let MenuOpacity = document.getElementById( 'MenuOpacity');
    let Men3 = document.getElementById('Menu3');
    let Men2 = document.getElementById('Menu2');
    let Men = document.getElementById('Men');
    let Profile = document.getElementById('HeaderProfile');
    let Message = document.getElementById('DialogueContainer');
    let OpenIcon = document.getElementById('OpenIcon');
    let CloseIcon = document.getElementById('CloseIcon');
    
    Men.style.height = '0px';
    Men2.style.display = 'none'; 
    Men3.style.display = 'block';
   // MenuOpacity.style.height = '0%';
    Profile.style.width= '0px';
    Message.style.display= 'none';
    OpenIcon.style.display= 'inline';
    CloseIcon.style.display= 'none';
}





export let Menuu = () => {
  //  let MenuOpacity = document.getElementById( 'MenuOpacity');
    let Men3 = document.getElementById('Menu3');
    let Men2 = document.getElementById('Menu2');
    let Men = document.getElementById('Men');
    let Profile = document.getElementById('HeaderProfile');
    

    //Men.style.display = 'block'; 
    Men2.style.display = 'block'; 
    Men3.style.display = 'none';
   // MenuOpacity.style.cssText = 'display: inline; transition-timing-function: linear; transition-duration: 0.5s; height: 100%';
    //Profile.style.width= '200px';

    Men.style.cssText = 'display: inline; transition-timing-function: ease-out; transition-duration: 0.2s; height: 700px ';

    Profile.style.cssText= 'display: inline; transition-timing-function: linear; transition-duration: 0.1s; width: 200px ';
    
    
}
   


