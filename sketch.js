var welcomeScreenImg, buttonImg, Start;
var gameState = 0;
var ScramblerImg;
var Shuffler, ShufflerImg;
var SCtile1, SCtile2, SCtile3, SCtile4, SCtile5, SCtile6, SCtile7, SCtile8, SCtile9;
var SCtiles = []
var leftTray, rightTray;
var leftTrayB, rightTrayB;
var LTtile1, LTtile2, LTtile3, LTtile4, LTtile5, LTtile6, LTtile7, LTtile8, LTtile9,LTtile10;
var LTtile11, LTtile12, LTtile13, LTtile14, LTtile15, LTtile16, LTtile17, LTtile18, LTtile19,LTtile20;
var LTtile21, LTtile22, LTtile23, LTtile24;
var RTtile1, RTtile2, RTtile3, RTtile4, RTtile5, RTtile6, RTtile7, RTtile8, RTtile9,RTtile10;
var RTtile11, RTtile12, RTtile13, RTtile14, RTtile15, RTtile16, RTtile17, RTtile18, RTtile19,RTtile20;
var RTtile21, RTtile22, RTtile23, RTtile24;
var controlledTile, click = 0;

var LeftTilesGroup = [];

function preload(){
	welcomeScreenImg = loadImage("Racing Flag.png")
	buttonImg = loadImage("Start.png")
	ScramblerImg = loadImage("Scrambler1.png")
	ShufflerImg = loadImage("Shuffler.png")
}

function setup() {
	createCanvas(1000, 900);  

	Start = createSprite(width/2, height/2)
	Start.addImage(buttonImg)
	Start.scale = 0.1 

	Scrambler = createSprite(600,150)
	Scrambler.addImage(ScramblerImg)
	Scrambler.scale = 3
	Scrambler.visible = false 

	Shuffler = createSprite(360,100)
	Shuffler.addImage(ShufflerImg)
	Shuffler.scale = 0.2
	Shuffler.visible = false
	scramblerTiles()

	leftTrayB = createSprite(width/2 - 220, height - 280,440,440)
	leftTrayB.shapeColor = color(41,43,64)
	leftTrayB.visible = false

	leftTray = createSprite(width/2 - 220, height - 280,400,400)
	leftTray.shapeColor = "black"
	leftTray.visible = false

	rightTrayB = createSprite(width/2 + 220, height - 280,440,440)
	rightTrayB.shapeColor = "darkgreen"
	rightTrayB.visible = false

	rightTray = createSprite(width/2 + 220, height - 280,400,400)
	rightTray.shapeColor = "black"
	rightTray.visible = false


}


function draw() {  
	if(gameState == 0){
		background(welcomeScreenImg)
	if(mousePressedOver(Start)){
		gameState = 1
		Start.visible = false 

	}
}
	if(gameState == 1){
		background("white")
		Shuffler.visible = true 
		Scrambler.visible = true
		leftTray.visible = true 
		leftTrayB.visible = true 
		leftTrayTiles()

		rightTray.visible = true 
		rightTrayB.visible = true 
		rightTrayTiles()
		
		if(mousePressedOver(Shuffler)){
			//shuffleScrambler()
		}


		for (var  i=0; i<LeftTilesGroup.length;i++){
			if(mousePressedOver(LeftTilesGroup[i])){
			controlledTile = i
			click  = 1
			}
		if(controlledTile!=undefined && click==1)	
		 break;
		}
		if(controlledTile!=undefined){
			moveLeftTile(controlledTile)
			click = 0;

		}


		drawSprites();
	}

  drawSprites();
 
}

function scramblerTiles(){
	//First Row
	SCtile1 = createSprite(Scrambler.x - 80,140,62,56)
	SCtile1.shapeColor = "red"
	SCtile2 = createSprite(Scrambler.x - 18,140,62,56)
	SCtile2.shapeColor = "blue"
	SCtile3 = createSprite(Scrambler.x + 45,140,62,56)
	SCtile3.shapeColor = "white"

	//Second Row
	SCtile4 = createSprite(Scrambler.x - 80,188,62,56)
	SCtile4.shapeColor = "green"
	SCtile5 = createSprite(Scrambler.x - 18,188,62,56)
	SCtile5.shapeColor = "yellow"
	SCtile6 = createSprite(Scrambler.x + 45,188,62,56)
	SCtile6.shapeColor = "red"

	//Fourth Row
	SCtile7 = createSprite(Scrambler.x - 80,244,62,56)
	SCtile7.shapeColor = "yellow"
	SCtile8 = createSprite(Scrambler.x - 18,244,62,56)
	SCtile8.shapeColor = "green"
	SCtile9 = createSprite(Scrambler.x + 45,244,62,56)
	SCtile9.shapeColor = "blue"
	
	SCtiles = [SCtile1, SCtile2, SCtile3, SCtile4, SCtile5, SCtile6, SCtile7, SCtile8, SCtile9]


}

function moveTile(tile_number){
	if(keyDown("up")){
		LeftTilesGroup[tile_number].y -= 80
	}
}

function leftTrayTiles(){
	//First Row
	LTtile1 = createSprite(leftTray.x - 160,leftTray.y - 160,80,80)
	LTtile1.shapeColor = "red"
	LTtile2 = createSprite(leftTray.x - 80,leftTray.y - 160,80,80)
	LTtile2.shapeColor = "blue"
	LTtile3 = createSprite(leftTray.x,leftTray.y - 160,80,80)
	LTtile3.shapeColor = "green"
	LTtile4 = createSprite(leftTray.x + 80,leftTray.y - 160,80,80)
	LTtile4.shapeColor = "white"

	//Second Row
	LTtile5 = createSprite(leftTray.x - 160,leftTray.y - 80,80,80)
	LTtile5.shapeColor = "yellow"
	LTtile6 = createSprite(leftTray.x - 80,leftTray.y - 80,80,80)
	LTtile6.shapeColor = "red"
	LTtile7 = createSprite(leftTray.x,leftTray.y - 80,80,80)
	LTtile7.shapeColor = "yellow"
	LTtile8 = createSprite(leftTray.x + 80,leftTray.y - 80,80,80)
	LTtile8.shapeColor = "green"
	LTtile9 = createSprite(leftTray.x + 160,leftTray.y - 80,80,80)
	LTtile9.shapeColor = "blue"

	//Fourth Row
	LTtile10 = createSprite(leftTray.x - 160,leftTray.y + 80,80,80)
	LTtile10.shapeColor = "blue"
	LTtile11 = createSprite(leftTray.x - 80,leftTray.y + 80,80,80)
	LTtile11.shapeColor = "green"
	LTtile12 = createSprite(leftTray.x,leftTray.y + 80,80,80)
	LTtile12.shapeColor = "red"
	LTtile13 = createSprite(leftTray.x + 80,leftTray.y + 80,80,80)
	LTtile13.shapeColor = "blue"
	LTtile14 = createSprite(leftTray.x + 160,leftTray.y + 80,80,80)
	LTtile14.shapeColor = "yellow"

	//Third Row
	LTtile15 = createSprite(leftTray.x - 160,leftTray.y - 0,80,80)
	LTtile15.shapeColor = "green"
	LTtile16 = createSprite(leftTray.x - 80,leftTray.y - 0,80,80)
	LTtile16.shapeColor = "white"
	LTtile17 = createSprite(leftTray.x,leftTray.y - 0,80,80)
	LTtile17.shapeColor = "green"
	LTtile18 = createSprite(leftTray.x + 80,leftTray.y - 0,80,80)
	LTtile18.shapeColor = "red"
	LTtile19 = createSprite(leftTray.x + 160,leftTray.y - 0,80,80)
	LTtile19.shapeColor = "white"


	//Fifth Row
	LTtile20 = createSprite(leftTray.x - 160,leftTray.y + 160,80,80)
	LTtile20.shapeColor = "red"
	LTtile21 = createSprite(leftTray.x - 80,leftTray.y + 160,80,80)
	LTtile21.shapeColor = "white"
	LTtile22 = createSprite(leftTray.x,leftTray.y + 160,80,80)
	LTtile22.shapeColor = "blue"
	LTtile23 = createSprite(leftTray.x + 80,leftTray.y + 160,80,80)
	LTtile23.shapeColor = "yellow"
	LTtile24 = createSprite(leftTray.x + 160,leftTray.y + 160,80,80)
	LTtile24.shapeColor = "white"


	LeftTilesGroup = [LTtile1, LTtile2, LTtile3, LTtile4, LTtile5, LTtile6, LTtile7, LTtile8, LTtile9,LTtile10,LTtile11, LTtile12, 
					  LTtile13, LTtile14, LTtile15, LTtile16, LTtile17, LTtile18, LTtile19,LTtile20,LTtile21, LTtile22, LTtile23, LTtile24]

}

function rightTrayTiles(){
	//First Row
	RTtile1 = createSprite(rightTray.x + 80,rightTray.y - 160,80,80)
	RTtile1.shapeColor = "red"
	RTtile2 = createSprite(rightTray.x + 80,rightTray.y - 160,80,80)
	RTtile2.shapeColor = "blue"
	RTtile3 = createSprite(rightTray.x,rightTray.y - 160,80,80)
	RTtile3.shapeColor = "green"
	RTtile4 = createSprite(rightTray.x - 80,rightTray.y - 160,80,80)
	RTtile4.shapeColor = "white"

	//Second Row
	RTtile5 = createSprite(rightTray.x - 160,rightTray.y - 80,80,80)
	RTtile5.shapeColor = "White"
	RTtile6 = createSprite(rightTray.x - 80,rightTray.y - 80,80,80)
	RTtile6.shapeColor = "red"
	RTtile7 = createSprite(rightTray.x,rightTray.y - 80,80,80)
	RTtile7.shapeColor = "yellow"
	RTtile8 = createSprite(rightTray.x + 80,rightTray.y - 80,80,80)
	RTtile8.shapeColor = "green"
	RTtile9 = createSprite(rightTray.x + 160,rightTray.y - 80,80,80)
	RTtile9.shapeColor = "blue"

	//Fourth Row
	RTtile10 = createSprite(rightTray.x - 160,rightTray.y + 80,80,80)
	RTtile10.shapeColor = "blue"
	RTtile11 = createSprite(rightTray.x - 80,rightTray.y + 80,80,80)
	RTtile11.shapeColor = "green"
	RTtile12 = createSprite(rightTray.x,rightTray.y + 80,80,80)
	RTtile12.shapeColor = "red"
	RTtile13 = createSprite(rightTray.x + 80,rightTray.y + 80,80,80)
	RTtile13.shapeColor = "blue"
	RTtile14 = createSprite(rightTray.x + 160,rightTray.y + 80,80,80)
	RTtile14.shapeColor = "yellow"

	//Third Row
	RTtile15 = createSprite(rightTray.x - 160,rightTray.y - 0,80,80)
	RTtile15.shapeColor = "green"
	RTtile16 = createSprite(rightTray.x - 80,rightTray.y - 0,80,80)
	RTtile16.shapeColor = "white"
	RTtile17 = createSprite(rightTray.x,rightTray.y - 0,80,80)
	RTtile17.shapeColor = "green"
	RTtile18 = createSprite(rightTray.x + 80,rightTray.y - 0,80,80)
	RTtile18.shapeColor = "red"
	RTtile19 = createSprite(rightTray.x + 160,rightTray.y - 0,80,80)
	RTtile19.shapeColor = "white"


	//Fifth Row
	RTtile20 = createSprite(rightTray.x - 160,rightTray.y + 160,80,80)
	RTtile20.shapeColor = "red"
	RTtile21 = createSprite(rightTray.x - 80,rightTray.y + 160,80,80)
	RTtile21.shapeColor = "white"
	RTtile22 = createSprite(rightTray.x,rightTray.y + 160,80,80)
	RTtile22.shapeColor = "blue"
	RTtile23 = createSprite(rightTray.x + 80,rightTray.y + 160,80,80)
	RTtile23.shapeColor = "yellow"
	RTtile24 = createSprite(rightTray.x + 160,rightTray.y + 160,80,80)
	RTtile24.shapeColor = "white"

}


