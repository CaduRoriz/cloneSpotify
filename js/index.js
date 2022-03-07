var audioPlayer = document.getElementById('audioplayer');
var loaded = false;
var playBtn = document.getElementById('playBtn');
var pauseBtn = document.getElementById('pauseBtn');


pauseBtn.addEventListener('click', (event) => {  /**/
    event.preventDefault();
    
    playBtn.style.display = "inline";                                       /*  aqui eu faço com que troque os simbolos assim que eu clickar em um deles*/
    pauseBtn.style.display= "none";
    audioPlayer.pause();
    
    return false;
});

playBtn.addEventListener('click', (event) => {  /**/
    event.preventDefault();
    
    playBtn.style.display = "none";                                       /*  aqui eu faço com que troque os simbolos assim que eu clickar em um deles*/
    pauseBtn.style.display= "inline";
    audioPlayer.play();
    
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

cards.forEach(card => { 
    card.addEventListener('click', ()=>{ 
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


const barraProgresso = document.querySelector('.player__control__progress2');
    
setInterval(atualizaBarra, 50); /*essa funcao vai chamar a atualizaBarra a cada meio segundo(500)*/ 

function atualizaBarra () {
    if(!audioPlayer.paused){

        var progressoAudio = (audioPlayer.currentTime/audioPlayer.duration) * 100;

        barraProgresso.style.width = `${progressoAudio}%`
    }
}

alert("Amigos o site ta bem simplório, só implementei as funcionalidades relacionadas as músicas... então apesar de ter 'buscar' 'bioblioteca' 'criar playlist' e 'musiscas curtidas' esses links não fazem nada ");
