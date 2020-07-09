/* Cursor */

var cursorDotEl = document.querySelector('#cursor-dot'),
    cursorBGEL = document.querySelector('#cursor-bg'),
    bodyEl = document.querySelector('body'),
    btnListEl = bodyEl.querySelectorAll('a');

btnListEl = Array.prototype.slice.call(btnListEl); // 노드 목록을 배열로 사용 가능하도록 치환.
function onMouseMove(e){
    // console.log(e.clientX, e.clientY);
    // console.log(e.pageX, e.pageY);
    // 마우스의 좌표를 받아올 수 있다.
    // clientX - 브라우저를 기준으로 마우스 좌표를 찾아온다. (스크롤이 되어도 같은 값 - 현재 보이는 브라우저의 고정값)
    // page - 문서 상단을 기준으로 마우스 좌표를 찾아온다. (스크롤이 되면 다른 값 - 현재 문서의 스크롤에 영향을 받아 값이 변형)

    var posX = e.clientX, posY = e.clientY;
      //마우스 좌표의 위치 값.
      /*
      //고정값으로 적용됨
      */
     // gsap 애니메이션 처리.
     // to(param1,param2);
     // param1 = 요소를 기입.
     // param2 = gsap 문서 형식에 따라 옵션 값을 기입 (object)
     
     gsap.killTweensOf(cursorDotEl);
     gsap.killTweensOf(cursorBGEL);
     // 요소에서 애니메이션을 제거.
     
     gsap.to(cursorDotEl, {
         top: posY, 
         left: posX,
         duration: 0.1, // s - 0.1 : 100ms, 1.0 : 1000ms 
         ease: 'sine.out' // 기본값은 linear
     });
    //  duration값으로 마우스 커서가 따라오는 시간을 차이를 줌
     gsap.to(cursorBGEL, {top: posY, left: posX, duration: 0.15, ease: 'sine.out'}); 
}

// a태그에 마우스가 들어갔을 때, active class를 cursor-bg에 추가
function onMouseEnterList(e){
    console.log('enter');
    if(!cursorBGEL.classList.contains('active')){
        cursorBGEL.classList.add('active');
    }
}
// a태그에서 마우스가 나갔을 때, active class를 cursor-bg에 제거
function onMouseLeaveList(e){
    console.log('leave');
    if(cursorBGEL.classList.contains('active')){
        cursorBGEL.classList.remove('active');
    }
}
// 마우스가 창 안에서 움직일 때, onMouseEnterList와 onMouseLeaveList호출
window.addEventListener('mousemove', onMouseMove);
for(var i = 0; i < btnListEl.length; i++){
    btnListEl[i].addEventListener('mouseenter', onMouseEnterList);
    btnListEl[i].addEventListener('mouseleave', onMouseLeaveList);
}