

 let offset = 0;
 


export let Aboba = () => {
  let Men = document.getElementById('slider_items');
  offset= offset + 1275; 
  if ( offset > 2550 ) {
    offset = 0;
  } 
    Men.style.left = -offset + 'px';
}


export let Aboba2 = () => {
  let Men = document.getElementById('slider_items');
  offset= offset - 1275;   
  if ( offset < 0 ) {
    offset = 2550;
  } 
    Men.style.left = -offset + 'px';
}







