var randomno, activeplayer, roundscore, totalscore, finalscore;

init();

// ROLL BUTTON

document.querySelector('.btn-roll').addEventListener('click', function() {
    randomno = Math.floor(Math.random() * 6 +1);
    roundscore += randomno;
    document.querySelector('#dice-pic').style.display = 'block';
    document.querySelector('#dice-pic').src = 'dice-' + randomno + '.png';
    if(randomno !== 1) {
    document.querySelector('.current-' + activeplayer).textContent = roundscore;
    } else {
        nextplayer();
    }
});

// NEXT PLAYER
function nextplayer() {
    activeplayer === 0 ? activeplayer = 1 : activeplayer = 0;
    roundscore = 0;
    document.querySelector('.player-0-panal').classList.toggle('active');
    document.querySelector('.player-1-panal').classList.toggle('active');
    document.querySelector('.current-0').textContent = '0';
    document.querySelector('.current-1').textContent = '0';
    document.querySelector('#dice-pic').style.display = 'none';
}

// HOLD BUTTON 

document.querySelector('.btn-hold').addEventListener('click', function() {
    totalscore[activeplayer] += roundscore;
    document.querySelector('.score-' + activeplayer).textContent = totalscore[activeplayer];
    var n = document.querySelector('.final-score').value;
    n === '' ? finalscore = 20 : finalscore = n;

    if(totalscore[activeplayer] >= finalscore) {
        document.querySelector('.player-' + activeplayer + '-panal').classList.add('winner');
        document.querySelector('.player-' + activeplayer + '-panal').classList.remove('active');
        document.querySelector('.winner-text').style.display = 'block';
        document.querySelector('#dice-pic').style.display = 'none';
    } else {
        nextplayer();
    }
});

// NEW BUTTON 

document.querySelector('.btn-new').addEventListener('click', init );

// INIT FUNCTION
function init() {
    activeplayer = 0;
    roundscore = 0;
    totalscore = [0,0];
    
    document.querySelector('.score-0').textContent = '0';
    document.querySelector('.score-1').textContent = '0';
    document.querySelector('.current-0').textContent = '0';
    document.querySelector('.current-1').textContent = '0';
    document.querySelector('#dice-pic').style.display = 'none';
    document.querySelector('.player-0-panal').classList.remove('active');
    document.querySelector('.player-1-panal').classList.remove('active');
    document.querySelector('.player-0-panal').classList.remove('winner');
    document.querySelector('.player-1-panal').classList.remove('winner');
    
    document.querySelector('.player-0-panal').classList.add('active');
}