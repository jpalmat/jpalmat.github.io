var puzzleSizeX = 400;
var puzzleSizeY = 400;
var pieceX = 100;
var pieceY = 100;
var wbX = puzzleSizeX - pieceX;
var wbY = puzzleSizeY - pieceY;

var specialPositions;

$(document).ready(function(){
	$("#puzzlearea div").addClass("puzzlepiece");
	refreshPositions();

	$("#puzzlearea div").each(function(idx){
		var piecenumber = idx;//$(this).text();
		var posX = ((piecenumber)*pieceX)%puzzleSizeX;
		var posY = (parseInt((piecenumber)/(puzzleSizeY/pieceY)))*pieceY;

		setPosition($(this), {posX, posY}, true);
	});

	$("#shufflebutton").click(function(){
		//shuffle();
		var timer = setInterval(shuffle,10);
		setTimeout(function(){
			clearTimeout(timer);
			showMovables();
		},1000);
		
	});
	
});

function setPosition(element, position, changebg){
	var bgX = -position.posX;
	var bgY = -position.posY;

	element.css("left", position.posX);
	element.css("top", position.posY);

	if(changebg){
		element.css("background-position-x", bgX);
		element.css("background-position-y", bgY);
	}
}

function setWBPosition(position){
	wbX = position.posX;
	wbY = position.posY;
}

function getElement(position){
	var found = null;
	$("#puzzlearea div").each(function(idx){
		
		//console.log( parseInt($(this).css("top")) + "==" + position.posY + ", " + parseInt($(this).css("left")) + "==" +  position.posX);
		if(parseInt($(this).css("top")) == parseInt(position.posY) && parseInt($(this).css("left")) == parseInt(position.posX)){
			found = $(this);
			return false;
		}
	});
	return found;
}

function refreshPositions(){
	wbX = parseInt(wbX);
	wbY = parseInt(wbY);
	var left = {posX: wbX-pieceX, posY: wbY};
	var right = {posX: wbX+pieceX, posY: wbY};
	var above = {posX: wbX, posY: wbY-pieceY};
	var below = {posX: wbX, posY: wbY+pieceY};
	specialPositions = {
		top_left: [right, below ],		//right, below
		top_right: [left, below ],		//left, below
		bottom_right: [left, above ],		//left, above
		bottom_left: [right, above ],		//right, above
		right: [left, above, below ],		//left, above, below
		left: [right, above, below ],		//right, above, below
		top: [right, left, below ],		//right, left, below
		bottom: [right, left, above ],		//right, left, above
		center: [right, left, below , above],		//right, left, above, below
	};
}

function shuffle(){
	

	function move(positions){
		var min = 0;
		var elements = [];		
		var max = positions.length-1;
		var idx = Math.floor(Math.random()*(max-min+1)+min);

		for (var i = max; i >= 0; i--) {
			elements[i] = getElement(positions[i]);
		}

		setPosition(elements[idx],{posX:wbX, posY: wbY});
		setWBPosition(positions[idx]);
	}
	//if the whitebox is on the top left corner
	if(wbX == 0 && wbY == 0){
		move(specialPositions.top_left);
	}
	//if the whitebox is on the top right corner
	else if(wbX == (puzzleSizeX - pieceX) && wbY == 0){
		move(specialPositions.top_right);
	}
	//if the whitebox is on the bottom left corner
	else if(wbX == 0 && wbY == (puzzleSizeY - pieceY)){
		move(specialPositions.bottom_left);
	}
	//if the whitebox is on the bottom right corner
	else if(wbX == (puzzleSizeX - pieceX) && wbY == (puzzleSizeY - pieceY)){
		move(specialPositions.bottom_right);
	}
	//if the whitebox is on the right column
	else if(wbX == (puzzleSizeX - pieceX)){
		move(specialPositions.right);
	}
	//if the whitebox is on the left column
	else if(wbX == 0){
		move(specialPositions.left);
	}
	//if the whitebox is on the top row
	else if(wbY == 0){
		move(specialPositions.top);
	}
	//if the whitebox is on the bottom row
	else if(wbY == (puzzleSizeY - pieceY)){
		move(specialPositions.bottom);
	}
	//if the whitebox is in other position
	else{
		move(specialPositions.center);
	}
	refreshPositions();
}

function showMovables(){
	$(".movablepiece").each(function(){$(this).unbind("click")});
	$(".movablepiece").each(function(){$(this).removeClass("movablepiece")});

	function show(positions){
		for (var i = positions.length-1; i >= 0; i--) {
			getElement(positions[i]).addClass("movablepiece");
		}
	}
	//if the whitebox is on the top left corner
	if(wbX == 0 && wbY == 0){
		show(specialPositions.top_left);
	}
	//if the whitebox is on the top right corner
	else if(wbX == (puzzleSizeX - pieceX) && wbY == 0){
		show(specialPositions.top_right);
	}
	//if the whitebox is on the bottom left corner
	else if(wbX == 0 && wbY == (puzzleSizeY - pieceY)){
		show(specialPositions.bottom_left);
	}
	//if the whitebox is on the bottom right corner
	else if(wbX == (puzzleSizeX - pieceX) && wbY == (puzzleSizeY - pieceY)){
		show(specialPositions.bottom_right);
	}
	//if the whitebox is on the right column
	else if(wbX == (puzzleSizeX - pieceX)){
		show(specialPositions.right);
	}
	//if the whitebox is on the left column
	else if(wbX == 0){
		show(specialPositions.left);
	}
	//if the whitebox is on the top row
	else if(wbY == 0){
		show(specialPositions.top);
	}
	//if the whitebox is on the bottom row
	else if(wbY == (puzzleSizeY - pieceY)){
		show(specialPositions.bottom);
	}
	//if the whitebox is in other position
	else{
		show(specialPositions.center);
	}

	//$(".movablepiece").unbind("click");

	$(".movablepiece").click(function(){
		
		//$(".movablepiece").each(function(){$(this).removeClass("movablepiece")});
		
		var wb = {posX:wbX, posY: wbY};
		
		setWBPosition({posX: $(this).css("left"), posY: $(this).css("top")});
		setPosition($(this),wb);
		refreshPositions();
		showMovables();
	});
}