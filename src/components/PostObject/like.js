


export let likecounter = () => {
    let Biba = document.getElementById('img');
    let Biba2 = document.getElementById('img2');
    
    Biba.style.display = 'none';
    Biba2.style.display = 'inline';


    let Men = 0;
    Men++;

    document.getElementById("PostLikeNumber").innerHTML = Men;
}


export let likecounter2 = () => {
    let Biba = document.getElementById('img');
    let Biba2 = document.getElementById('img2');
    
    Biba.style.display = 'inline';
    Biba2.style.display = 'none';


    let Men = 0;
    

    document.getElementById("PostLikeNumber").innerHTML = Men;
}

