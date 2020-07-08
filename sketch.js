var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var w1,w2,w3;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	w1=createSprite(200,590,20,100,{isStatic:true});
	w2=createSprite(260,650,140,25,{isStatic:true});
	w3=createSprite(320,590,20,100,{isStatic:true});

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	World.add(w1,w2,w3);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground,w1,w2,w3);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();

 
}

function keyPressed() {
	 if (keyCode === LEFT_ARROW) { 
		 helicopterSprite.x=helicopterSprite.x-20; 
		 translation={x:-20,y:0} 
		 Matter.Body.translate(packageBody, translation) 
		} else if (keyCode === RIGHT_ARROW) {
			 helicopterSprite.x=helicopterSprite.x+20; 
	translation={x:20,y:0}
 Matter.Body.translate(packageBody, translation) }
else if (keyCode === DOWN_ARROW) 
{ Matter.Body.setStatic(packageBody,false); } }


