const balls = document.getElementsByClassName('ball');


document.onmousemove = (event) => {
  const x = (event.clientX * 100) / window.innerWidth + '%';
  const y = (event.clientY * 100) / window.innerHeight + '%';

//single ball
//   balls[0].style.left = x;
//   balls[0].style.top = y;
//   balls[0].transform = 'translate(-' + x + ',-' + y + ')';

//two eye ball movement
for (let i = 0; i < balls.length; i++) {
    balls[i].style.left = x;
    balls[i].style.top = y;
    balls[i].style.transform = 'translate(-' + x + ',-' + y + ')';
  }
};
