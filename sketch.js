var goku
var frieza
var kamehameha,beam,kiBlast,deathBeam
var gokuPose
var gokuSuperSaiyan
var gokuAttack
var gokuKamehameha
var gokuSaiyanKamehameha

var friezaPose
var friezaBeam
var goldenFriezaPose
var friezaDeathBeam
var friezaGoldenBeam


function preload(){
  gokuPose=loadAnimation("gokupose.png")
  gokuSuperSaiyan=loadAnimation("gokusupersaiyan.png")
  gokuAttack=loadAnimation("gokuattack.png")
  gokuKamehameha=loadAnimation("gokukamehameha.png")
  gokuSaiyanKamehameha=loadAnimation("gokusaiyankamehameha.png")
  friezaPose=loadAnimation("friezapose.png")
  friezaBeam=loadAnimation("friezabeam.png")
  goldenFriezaPose=loadAnimation("goldenfriezapose.png")
  friezaGoldenBeam=loadAnimation("friezagoldenbeam.png")
  friezaDeathBeam=loadAnimation("friezadeathbeam.png")

  
}

function setup(){
  createCanvas(displayWidth,displayHeight)
  background("white");
  goku=createSprite(100,50,35,50);
}



function draw(){


  drawSprites();
  
}
