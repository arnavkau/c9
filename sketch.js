var box 

function setup()
{
  createCanvas(402, 402)
  box = createSprite(201, 201, 10, 10)
}

function draw()
{
  background("white")

  drawSprites()

  if(keyIsDown(LEFT_ARROW))
  {
    box.position.x = box.position.x - 5
  }
  if(keyIsDown(RIGHT_ARROW))
  {
    box.position.x = box.position.x + 5
  }
  if(keyIsDown(UP_ARROW))
  {
    box.position.y = box.position.y - 5
  }
  if(keyIsDown(DOWN_ARROW))
  {
    box.position.y = box.position.y + 5
  }
}