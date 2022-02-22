
var audioPlayer = document.getElementById('audioplayer');
var loaded = false;
var playBtn = document.getElementById('playBtn');
var pauseBtn = document.getElementById('pauseBtn');


pauseBtn.addEventListener('click', (event) => {  /**/
    event.preventDefault();
    
    playBtn.style.display = "inline";                                       /*  aqui eu faço com que troque os simbolos assim que eu clickar em um deles*/
    pauseBtn.style.display= "none";
    
    
    return false;
});


function playSong(file){

    if(loaded == false){   /*se for false quer dizer que eh a primeira vez que estou carregando meu arquivo*/
        audioPlayer.innerHTML = `<source src ="`+file+`" type="audio/mp3" />`;
        loaded = true;
    }

    audioPlayer.play();
    playBtn.style.display = "none";                                       /*  aqui eu faço com que troque os simbolos assim que eu clickar em um deles*/
    pauseBtn.style.display= "inline";
}



let cards = document.querySelectorAll('.main__col');

console.log(cards);

cards.forEach(card => { 
    card.addEventListener('click', ()=>{ 
        alert('clicado')
        let image = card.getAttribute('data-image');
        let artist = card.getAttribute('data-artist');            let song = card.getAttribute('data-song');
        let file= card.getAttribute('data-file');

        let playerArtistComponent = document.querySelector('.player__artist'); /*na live ele usar getElementBtClassNames*/
        playerArtistComponent.innerHTML =`
            <img src="`+image+`"/>                                       <h3>`+artist+`<br/><span>`+song+`</span></hr>
        `;                                      /*talvez no exercicio que eu fiz o site dos instrumentos nao tenha dado certo as formas que eu tentei adicionar o nome da classe pq esquecdi de colocar dois '+' assim `badum_`+${nomeClasse}+``*/
        playSong(file);
            
        })
    })