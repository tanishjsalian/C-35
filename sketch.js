var ball;
var database=firebase.database()

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    var location=database.ref('ball/position')
    position=location.on("value",read)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function read(data){
    pos=data.val()
    console.log(pos)
    ball.x=pos.x
    ball.y=pos.y
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
    var location=database.ref('ball/position')
    location.update({
        x:ball.x,
        y:ball.y,
    })
}
