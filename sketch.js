// Task: 1 - Create The Various elements of the game 
// 1.1 - Creation of Basic Elements
var tank, enemy, battlefield;
// 1.2 - Creation of obstacles
var hole, roadBlock, unknownEnemyLandmine;
// 1.3 - Creation of Arrays 
var enemyArray = [];

// 1.4 -  Creation of enemy Attacks
var enemyMissile;
// 1.5 - Creation of player Attacks
var playerMissile;
// 1.6 - Creation of all Asset Based variable
var tankImage;
var enemyImage;
var battlefieldImage;
var holeImage;
var roadBlockImage;
var unknownEnemyLandmineImage;
var missileImage;
// 1.7 - Creation of an invisible ground
var invisible_ground;

// task: 4 - Create a gameState System 
// task: 5 - Create Additional Misc Parts of the game Such as Score Board, Tank Controls, Enemy Spawning etc



function preload(){
// Task: 2 - Usage Of All Assets and Loading of all the images and animations
tankImage = loadImage("tank.png");
battlefieldImage = loadImage("background2.png");
holeImage = loadImage("hole.jpg");
unknownEnemyLandmineImage = loadImage("mine.png");
missileImage = loadImage("missile.png");
enemyImage = loadImage("plane.jpg");

}

function setup() {
 
createCanvas(800,580);

// Task: 3 - Create all the sprites and the creation of the infinite track 



// 3.2 - Creation of the tank sprite
tank = createSprite(100,480);
tank.addImage(tankImage);
tank.scale = 0.25;

// 3.3 - Creation of the invisible ground
invisible_ground = createSprite(width/2,height-60,width+200,22);
invisible_ground.velocityX= -2;
invisible_ground.visible = false;

unknownEnemyLandmine = createSprite(800,500);
unknownEnemyLandmine.addImage(unknownEnemyLandmineImage);
unknownEnemyLandmine.velocityX = -2;
unknownEnemyLandmine.scale = 0.25;

enemy = createSprite(800,100);
enemy.addImage(enemyImage);
enemy.velocityX = -2;
enemy.scale = 0.1;
enemy.destroy();


}

function draw() {
 background(battlefieldImage);

 tank.collide(invisible_ground);

 if(invisible_ground.x<290){

    invisible_ground.x = invisible_ground.width/2;
    

 }

drawSprites();
}