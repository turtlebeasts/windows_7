function loading(){
    document.getElementById('profile_box').style.backgroundImage='none';
    document.getElementById('profile_box').style.boxShadow='none';
    document.getElementById('profile_box').innerHTML='Welcome';
    document.getElementById('profile_box').style.marginLeft+='720px';
    document.getElementById('profile_box').style.marginTop+='400px';
    document.getElementById('profile_box').style.color='white';
    document.getElementById('input').style.display='none';
    document.getElementById('user').style.display='none';
    document.getElementById('spinning-loader').style.display='block';
    
}