// sub-1.html acoordion 에 사용되는 자바스크립트
var accordionEl = document.querySelector('#accordion'),
    viewEl = accordionEl.querySelector('.view'),
    viewItemEls = viewEl.querySelectorAll('.view-item'),
    btnCloseEls = viewEl.querySelectorAll('.btn-close'),

    _cuId = null,
    _exId = null;

viewItemEls = Array.prototype.slice.call(viewItemEls); //요소 노드 목록을 배열로 치환.
//이벤트 핸들러.
// viewItem을 클릭했을 때, 발생될 이벤트
function onClickViewItem(e) {
      e.preventDefault();//기본 이벤트를 방지하는 메서드.(해당 태그(요소)가 기본으로 가지고 있는 이벤트가 동작되지 않도록)
      var el = e.currentTarget, //e.currentTarget - 해당 이벤트가 발생된 요소 노드.
      index = viewItemEls.indexOf(el); // 이벤트가 발생된 요소 노드의 순번.
      if(!el.classList.contains("selected")){
            //selected 클래스를 가지고 있지 않다면 활성화 가능한 요소들
            //현재 클릭된 탭 메뉴로 상태 변경.
            _cuId = index;
            if(_exId !== null){
                  // 처음부터 열려있는 아코디언 메뉴가 없기 때문에 _exId 의 값은 처음에 null 이다.
                  // 따라서 null 이 아닌 경우 부터 이전 항목에 대한 체크가 가능하다.
                  viewItemEls[_exId].classList.remove("selected");//viewItemEls(클래스가 view-item인 요소)에 selected class 제거
            }
            
            el.classList.add("selected"); //해당 이벤트가 발생된 요소 노드에 selected class 추가
            _exId = _cuId; // *** 다음번 클릭이 될 때, 이전에 선택된 index 값을 확인하여 복귀시킬 수 있도록 꼭 변경해야함.
            //*** 이벤트에 따라 변화가 일어나고, 끝 부분에서 값을 변경.
      }
}
// 닫힘 버튼을 클릭했을 떄, 발생될 이벤트.
function onClickClose(e){
      e.preventDefault();//기본 이벤트를 방지하는 메서드.(해당 태그(요소)가 기본으로 가지고 있는 이벤트가 동작되지 않도록)

      // ***** 중요 *****
      e.stopPropagation();
      // 이벤트 버블링이 일어나면 아코디언 메뉴가 비활성화 되었다가 (close),
      // 부모 요소인 view-item 의 이벤트가 한번 더 발생되기 때문에 해당 메뉴가 다시 활성화 된다.(viewItem 이벤트)
      //<---- 버블링이 일어나기 때문에 
      // 꼭 작성해주어야 함.

      var el = e.currentTarget,//e.currentTarget - 해당 이벤트가 발생된 요소 노드.
      itemEl = el.parentElement;//e.currentTarget - 해당 이벤트가 발생된 부모 요소 노드.
      if(itemEl.classList.contains("selected")){ // selected 클래스를 가지고 있지 않다면 활성화 가능한 요소들
           if(_exId !== null) {
                  // 처음부터 열려있는 아코디언 메뉴가 없기 때문에 _exId 의 값은 처음에 null 이다.
                  // 따라서 null 이 아닌 경우 부터 이전 항목에 대한 체크가 가능하다.
                  viewItemEls[_exId].classList.remove("selected"); //닫힘 버튼이기 때문에 selected class 제거.
                  _cuId = null; //아코디언이 닫혔기 때문에 값도 null로 변환
                  _exId = null;  //아코디언이 닫혔기 때문에 값도 null로 변환
           }
      }
}

//------
//이벤트가 바인딩되는 기능들
function addEvent(){
      for (var i = 0; i < viewItemEls.length; i++){
            viewItemEls[i].addEventListener("click", onClickViewItem); //요소를 클릭했을 때, 해당 함수 호출
            btnCloseEls[i].addEventListener("click", onClickClose); //요소를 클릭했을 때, 해당 함수 호출
      }
}
//초기화 기능 (unity Start와 비슷한 기능)
function init(){
      addEvent();
}
// 초기화 함수 호출.
init();

// 버튼을 클릭했을 때, 새창에 열리도록 함.
function open_page(url) {
      newPage=window.open(url);
  }