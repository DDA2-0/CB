// *** CAST 탭 메뉴 기능 활용

var castMenuEl = document.querySelector('#cast-menu'), //아이디가 cast-menu인 요소를 찾아서 선택
    btncastMenuEl = castMenuEl.querySelectorAll('a'), //cast-menu에서 a태그를 모두 찾아 선택
    castContainerEl = document.querySelector('.cast-container'), //클래스가 cast-container인 요소를 찾아 선택
    castContentEl = castContainerEl.querySelectorAll('.cast'), //cast-container에서 클래스가 cast인 요소를 모두 찾아 선택
    cuId = 0,
    exId = null;

btncastMenuEl = Array.prototype.slice.call(btncastMenuEl); //요소 노드 목록을 배열로 치환.[요소, 요소, ...]

function onClickcastMenu(e) {
    e.preventDefault();//기본 이벤트를 방지하는 메서드.(해당 태그(요소)가 기본으로 가지고 있는 이벤트가 동작되지 않도록)
    var el = e.currentTarget, //e.currentTarget - 해당 이벤트가 발생된 요소 노드.
        index = btncastMenuEl.indexOf(el); // 이벤트가 발생된 요소 노드의 순번.
    if(!el.classList.contains('selected')) {
        //selected 클래스를 가지고 있지 않다면 활성화 가능한 요소들
        //selected 로 되어있는 메뉴와 콘텐츠를 원래대로 복귀.
        btncastMenuEl[exId].classList.remove('selected'); //exId 번째 요소 노드일 때, btncastMenuEl(아이디가 side-menu인 요소)에 selected class 제거.
        castContentEl[exId].classList.remove('selected'); //exId 번째 요소 노드일 때, castContentEl(아이디가 side-menu인 요소)에 selected class 제거.
        
        //현재 클릭된 탭 메뉴로 상태 변경.
        cuId = index;
        el.classList.add('selected'); 
        castContentEl[cuId].classList.add('selected');//castContentEl(아이디가 side-menu인 요소)에 selected class 추가
        
        
        exId = cuId; // *** 다음번 클릭이 될 때, 이전에 선택된 index 값을 확인하여 복귀시킬 수 있도록 꼭 변경해야함.
        //*** 이벤트에 따라 변화가 일어나고, 끝 부분에서 값을 변경.
    }
}

//------
//이벤트가 바인딩되는 기능들
function addEvent() {
    for(var i = 0; i < btncastMenuEl.length; i++) {
        btncastMenuEl[i].addEventListener("click", onClickcastMenu); //메뉴 버튼을 클릭했을 때, onClickcastMenu 함수(이벤트) 발생.
    }
}
//초기화 기능 (unity Start와 비슷한 기능)
function init() {
    exId = cuId;
    addEvent();
}
// 초기화 함수 호출.
init();
