var dog,dog1,dog2;
var database,foodS,foodStock;

function preload()
{
  dog1 = loadImage("images/dogImg.png");
  dog2 = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500,500);
  database = firebase.database();
  
  dog = createSprite(250,300,10,10);
  dog.addImage(dog1);
  
  foodStock = database.ref('Food');
  foodStock.on("value",readStock)
}


function draw() {  
  background(46,139,87);
 
  if(keyWentDown(UP_ARROW)){
   writeStock(foodS);
   dog.addImage(dog2);
 }
 drawSprites();
textSize(15);
fill("white");
text("Press Up Arrow To Feed Mickey!",150,30);

}
function readStock(data){
  foodS = data.val;
}
function writeStock(){
  database.ref('/').update({
    Food: 20
  })
}



