var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            name: "Robot Romp",
            number: 1, 
            speed: -3,
            gameItems: [
                {type: 'banana',x:400,y:groundY-40},
                {type: 'banana',x:600,y:groundY-115},
                {type: 'banana',x:900,y:groundY-40}
            ],
            enemies: [
                {type: 'head',x:3000,y:groundY - 40,speed:5},
                {type: 'head',x:5000,y:groundY - 40,speed:5},
            ],
            rewards: [
                {type: 'cook', x:975,y:groundY - 145},
                {type: 'cook', x:1475,y:groundY - 150},
                {type: 'cook', x:1725,y:groundY - 145},
        ],    
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(false);

        // BEGIN EDITING YOUR CODE HERE
        function createBanana (x,y) {
var hitZoneSize = 5;
var damageFromObstacle = 10;
var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
myObstacle.x = x;
myObstacle.y = y;
game.addGameItem(myObstacle); 
var obstacleImage = draw.bitmap('img/bana.png');
myObstacle.addChild(obstacleImage);
obstacleImage.x = -25;
obstacleImage.y = -25;
myObstacle.scaleX = .20;
myObstacle.scaleY = .2
}

function createEnemy (x, y, speed) {
var enemy =  game.createGameItem('enemy',25);
var head = draw.bitmap('img/head.png');
head.x = -25;
head.y = -25;
enemy.addChild(head);
enemy.x = x;
enemy.y = groundY-50;
game.addGameItem(enemy);
enemy.scaleX = .4;
enemy.scaleY = .4;

enemy.velocityX  = -speed


        enemy.onPlayerCollision = function() {
         game.changeIntegrity(-10);
        };

         enemy.onProjectileCollision = function() {
         game.increaseScore(3500);
         enemy.fadeOut();
    };
}
function createReward(x,y){
    var reward = game.createGameItem('reward',16);    
    var cook = draw.bitmap('img/pg.png');
    cook.x = -300;
    cook.y = -300;
    reward.addChild(cook);
    reward.x = x;
    reward.y = y;
    game.addGameItem(reward);
    reward.scaleX = .1;
    reward.scaleY = .1;
    
    reward.velocityX = -2;
    reward.onPlayerCollision = function() {
        game.increaseScore(1000);
        reward.fadeOut();
    };

}    

      
    for (var yeet = 0; yeet < levelData.gameItems.length; yeet++) {
        var gameItemX = levelData.gameItems[yeet].x;
        var gameItemY = levelData.gameItems[yeet].y;
        createBanana(gameItemX, gameItemY);
    }
    
    for (yeet = 0; yeet < levelData.enemies.length; yeet++){
        var enemieX = levelData.enemies[yeet].x;
        var enemieY = levelData.enemies[yeet].y;
        var oop = levelData.enemies[yeet].speed;
        createEnemy(enemieX,enemieY,oop);
    
}   
    for (yeet = 0; yeet < levelData.rewards.length; yeet++){
    var rewardX = levelData.rewards[yeet].x;
    var rewardY = levelData.rewards[yeet].y;
    createReward(rewardX,rewardY);
}


};
}
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}