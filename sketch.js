var bullet, wall;
var speed, mass, thickness;
var dmg;

function setup() {
    createCanvas(1600,400);
    frameRate = 120;

    speed = random(223,321);
    mass = random(30,52);
    thickness = random(22,83)
    bullet = createSprite(50,200,25,10);
    bullet.shapeColor = "rgb(255,255,255)"
    wall = createSprite(1200,200,thickness,height/2);
    wall.shapeColor = "rgb(80,80,80)";
    bullet.velocityX = speed / 7.5;

    dmg = (mass * speed * speed * 0.5)/(thickness * thickness * thickness)
}

function draw() {
    background(0,0,0);

    if (dmg < 10)
    {
        Collide(bullet,wall);
    }
    

    if (isTouching(bullet,wall))
    {
        console.log(dmg)

        if (dmg > 10)
        {
            wall.shapeColor = "rgb(255,0,0)";
        }
        else
        {
            wall.shapeColor = "rgb(0,255,0)";
        }
    }

    drawSprites();
}

function isTouching(object1, object2)
{
    if (object1.x - object2.x < object2.width/2 + object1.width/2
        && object2.x - object1.x < object2.width/2 + object1.width/2
        && object1.y - object2.y < object2.height/2 + object1.height/2
        && object2.y - object1.y < object2.height/2 + object1.height/2)
    {
        return true;
    } 
    else {
        return false;
    } 
}

function Collide(object1, object2)
{
    hasDecreased = false;

    if (isTouching(object1, object2)) {
        object1.velocityX = 0;
        object1.velocityY = 0;
        object2.velocityX = 0;
        object2.velocityY = 0;

        if (hasDecreased == false)
        {
            object1.x -= 1
            hasDecreased = true
        }
    }
}