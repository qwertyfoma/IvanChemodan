var flag=true;

function zvuk(){
    if (flag) {
        audio.play();
    }        
}

function zvuk1(){
    if (flag) {
        audio.pause();
    }        
}

var audio = document.getElementById('audio');

function PlayAudio() {
  audio.play();
}

function StopAudio() {
  audio.pause();
  audio.volume = 0.1;
}

let na = document.getElementById('name');
$('#btn_start').on('click', function startGame() {
    var username = na.value;
    if(!username) 
    {
        return false;
    }
    else
    {
        document.getElementsByClassName('user_info')[0].innerHTML += username;
    $('#screen').slideUp();
    
    $('#canvas').slideDown();
    setTimeout(() => {
      main();
    }, 400);
 PlayAudio();
 tiktak();
 loadResources();
 game.state = "start";
 hp.innerHTML += hpp;
 point.innerHTML += ppoint;
}


});



let hp = document.getElementById('hpp');
var hpp = 5;

let point = document.getElementById('ppoint');
var ppoint = 0;

var game = {
    state: "",
};

var overlay = {
    counter: -1,
    title: "foo",
    subtitle: "bar",
};

var player = {
	x:250,
	y:320,
	width: 20,
	height: 50,
	counter: 0,
};
var keyboard = { };

var playerBullets = [];
var enemies = [];
var enemyBullets = [];


function updateGame() {
    if(game.state == "playing" && enemies.length == 0) {
        game.state = "won";
        overlay.title = "YOU-WINNER";
        overlay.subtitle = "press the spacebar to restarted";
        overlay.counter = 0;
        second = 0;
        ppoint = ppoint + 1;
        point.innerHTML = ppoint;
        if(ppoint == 5){
            alert('Поздравляем, Вы уже набрали 5 очков!');
        }
    }
    if(game.state == "over" && keyboard[32]) {
        game.state = "start";
        player.state = "alive";
        overlay.counter = -1;
        second = 20;
        tiktak();
    }
    if(game.state == "won" && keyboard[32]) {
        game.state = "start";
        player.state = "alive";
        overlay.counter = -1;
        second = 20;
        tiktak();
    }

    
    if(overlay.counter >= 0) {
        overlay.counter++;
    }
    
}
function updatePlayer() {
    if(player.state == "dead") return;
    

	if(keyboard[37])  { 
	    player.x -= 10; 
	    if(player.x < 0) player.x = 0;
	}	

	if(keyboard[39]) { 
	    player.x += 10;	
	    var right = canvas.width - player.width;
	    if(player.x > right) player.x = right;
	}	
	

	if(keyboard[32]) {
		if(!keyboard.fired) { 
			firePlayerBullet(); 
			keyboard.fired = true;
		}
	} else {
		keyboard.fired = false;
	}
	
	if(player.state == "hit") {

	    player.counter++;
	    if(player.counter >= 40) {
	        player.counter = 0;
	        player.state = "dead";
	        game.state = "over";
	        overlay.title = "GAME OVER";
	        overlay.subtitle = "press the spacebar to restart";
	        overlay.counter = 0;
            hpp = hpp - 1;
            hp.innerHTML = hpp;
            second = 0;
            if(hpp == 0){
                alert('У вас закончились жизни, если хотите увеличить запас жизней, просьба связаться с разработчиком игры и заплатить ему сумму, равную схеме: 1HP = 100рублей.');
                $('#canvas').slideUp();
                audio.pause();
            }
	    }
	}
}


function updatePlayerBullets() {

	for(i in playerBullets) {
		var bullet = playerBullets[i];
		bullet.y -= 5;
		bullet.counter++;
	}

	playerBullets = playerBullets.filter(function(bullet){
		return bullet.y > 0;
	});
}

function updateBackground() {
}


function updateEnemies() {

    if(game.state == "start") {
        enemies = [];
        enemyBullets = [];
        for(var i=0; i<10; i++) {
            enemies.push({
                    x: 50+ i*55,
                    y: 10,
                    width: 30,
                    height: 30,
                    state: "alive", 
                    counter: 0, 
                    phase: Math.floor(Math.random()*50), 
                    shrink: 35,
            });
        }
        game.state = "playing";
    }
    

    for(var i=0; i<10; i++) {
        var enemy = enemies[i];
        if(!enemy) continue;
        
     
        if(enemy && enemy.state == "alive") {
            enemy.counter++;
            enemy.x += Math.sin(enemy.counter*Math.PI*2/100)*2;
           
            if((enemy.counter + enemy.phase) % 150 == 0) {
                enemyBullets.push(createEnemyBullet(enemy));
            }
        }
        
       
        if(enemy && enemy.state == "hit") {
            enemy.counter++;
            
            if(enemy.counter >= 20) {
                enemy.state = "dead";
                enemy.counter = 0;
            }
        }
    }
    
    
    enemies = enemies.filter(function(e) {
            if(e && e.state != "dead") return true;
            return false;
    });
}


function updateEnemyBullets() {
    for(var i in enemyBullets) {
        var bullet = enemyBullets[i];
        bullet.y += 4;
        bullet.counter++;
    }
}


function checkCollisions() {
    for(var i in playerBullets) {
        var bullet = playerBullets[i];
        for(var j in enemies) {
            var enemy = enemies[j];
            if(collided(bullet,enemy)) {
                bullet.state = "hit";
                enemy.state = "hit";
                enemy.counter = 0;
            }
        }
    }
    
    if(player.state == "hit" || player.state == "dead") return;
    for(var i in enemyBullets) {
        var bullet = enemyBullets[i];
        if(collided(bullet,player)) {
            bullet.state = "hit";
            player.state = "hit";
            player.counter = 0;
        }
    }
}

function collided(a, b) {
    
   
    if(b.x + b.width >= a.x && b.x < a.x + a.width) {
       
        if(b.y + b.height >= a.y && b.y < a.y + a.height) {
            return true;
        }
    }
    
  
    if(b.x <= a.x && b.x + b.width >= a.x+a.width) {
        if(b.y <= a.y && b.y + b.height >= a.y + a.height) {
            return true;
        }
    }
    
 
    if(a.x <= b.x && a.x + a.width >= b.x+b.width) {
        if(a.y <= b.y && a.y + a.height >= b.y+b.height) {
            return true;
        }
    }
    
    return false;
}



function doSetup() {
	attachEvent(document, "keydown", function(e) {
		keyboard[e.keyCode] = true;
	});
	attachEvent(document, "keyup", function(e) {
		keyboard[e.keyCode] = false;
	});
}

function attachEvent(node,name,func) {
    if(node.addEventListener) {
        node.addEventListener(name,func,false);
    } else if(node.attachEvent) {
        node.attachEvent(name,func);
    }
};
