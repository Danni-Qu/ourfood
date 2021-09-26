


function search_animal() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('animals');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}


const cursorTag = document.querySelector("div.cursors")
  const balls = cursorTag.querySelectorAll("div")

  let aimX = 0
  let aimY = 0

  balls.forEach((ball,index) => {
    let currentX = 0
    let currentY = 0
  
    let speed = 0.3 - index * 0.17

    const animate = function(){
        currentX += (aimX-currentX) * speed
        currentY += (aimY-currentY) * speed
        
        ball.style.left = currentX + "px";
        ball.style.top = currentY + "px";
        
        requestAnimationFrame(animate)
        }
        animate()

  })

  

  document.addEventListener("mousemove", function(event){
    aimX = event.pageX
    aimY = event.pageY
  })
