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
                {type: 'bananaBoy',x:400,y:groundY},
                {type: 'bananaBoy',x:600,y:groundY},
                {type: 'bananaBoy',x:900,y:groundY},
        ],
            enemies: [
                {type: 'floatingheads',x:1000,y:groundY - 50,speed:10},
            	{type: 'floatingheads',x:2000,y:groundY - 50,speed:10},
            	{type: 'floatingheads',x:3000,y:groundY - 50,speed:10},
            ], 
           rewards: [ 
               {type: 'portalgun', x:700,y:groundY -70}]
        };
        
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // BEGIN EDITING YOUR CODE HERE
        function createbananaBoy (x,y) {
            var hitZoneSize = 25;
var damageFromObstacle = 10;
var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
myObstacle.x = x;
myObstacle.y = y;
game.addGameItem(myObstacle); 
var obstacleImage = draw.bitmap('img/bana.png');
myObstacle.addChild(obstacleImage);
obstacleImage.x = -100;
obstacleImage.y = -250;
myObstacle.scaleX = .2
myObstacle.scaleY = .2
}

for (var i = 0; i < levelData.gameItems.length; i++) {
    var gameItemsX = levelData.gameItems[i].x
    var gameItemsY = levelData.gameItems[i].y
    createbananaBoy(gameItemsX, gameItemsY)
}

function createEnemy (x, y) {
var enemy =  game.createGameItem('enemy',25,);
var floatingheads = draw.bitmap('img/head.png')
floatingheads.x = -300;
floatingheads.y = -300;
enemy.addChild(floatingheads);
enemy.x = x
enemy.y = y
game.addGameItem(enemy);
enemy.velocityX = -1;
enemy.scaleX = .3;
enemy.scaleY = .3;

enemy.onPlayerCollision = function () {
    console.log("The enemy has hit Halle");
    game.changeIntegrity(-10)
}
enemy.onProjectileCollision = function () {
    console.log( "Halle has hit the enemy")
    game.increaseScore(1000);
    enemy.fadeOut();
}


};
for (var i = 0; i < levelData.enemies.length; i++) {
    var gamezItemsX = levelData.enemies[i].x
    var gamezItemsY = levelData.enemies[i].y
    var newvar = levelData.enemies[i].speed;
    createEnemy(gamezItemsX, gamezItemsY, newvar)
}
function createPortalGun (x, y) {
    var rewards = game.createGameItem('reward', 16);
    var portalgun = draw.bitmap('img/ giphy.png')
    portalgun.x = -15
    portalgun.y = -15
    rewards.addChild(portalgun);
    rewards.x = x
    rewards.y = y
    game.addGameItem(rewards);
    rewards.velocityX = -2;
    
    rewards.onPlayerCollision = function () {
        game.increaseScore(7000);
        rewards.fadeOut();
    }
    
}
createPortalGun(100, 100);
}


    
};
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}