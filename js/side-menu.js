//** side메뉴에 사용될 스크립트.

var btnMenuEl = document.querySelector("#btn-menu"), //메뉴를 나타나게 하는 버튼을 찾아서 선택
    sideMenuEl = document.querySelector("#side-menu"), //사이드 메뉴 div 를 찾아서 선택
    btnCloseEl = document.querySelector("#btn-close"), //사이드 메뉴가 닫히게 하는 버튼을 찾아서 선택
    sideMenuItemEl = sideMenuEl.querySelectorAll("li"), //사이드 메뉴에서 li 요소를 모두 선택

    _isOpen = false,//오픈 된 상태인지 체크하는 Boolean 변수.
    _isAni = false;//애니메이션이 활성화 된 상태인지 체크하는 Boolean 변수.

function onClickBtnMenu(e){ //메뉴 버튼을 클릭했을 때 일어날 함수,
    e.preventDefault(); //기본 이벤트를 방지하는 메서드.
    if(_isOpen || _isAni) return;
    if(!_isOpen){ //_isOpen 이 false일 때,
        _isOpen = true; //사이드 메뉴 오픈
        //애니메이션이 되는 중에는 버튼을 클릭해도 실행되지 않도록 막기 위한 Boolean 변수
        _isAni = true; //애니메이션 활성화
        
        sideMenuEl.classList.add("open"); //sideMenuEl (아이디가 side-menu인 div)에 open class 추가.
        setTimeout(function(){// 일정 시간 간격 이후에 함수가 한번 실행
            _isAni = false; //비활성화 상태로 변경
            for(var i = 0; i < sideMenuItemEl.length; i++){
                addAni(i);
            }
        }, 380);
    }
}

function onClickBtnClose(e){ //메뉴 닫힘 버튼을 클릭했을 때 일어날 함수.
    e.preventDefault(); //기본 이벤트를 방지하는 메서드.
    if(!_isOpen || _isAni) return;
    if(_isOpen){ //_isOpen이 true 일 때,
        _isOpen = false;
        _isAni = true;
        // 애니메이션이 되는 중에는 버튼을 클릭해도 실행되지 않도록 막기 위한 Boolean 변수
        sideMenuEl.classList.remove("open"); //sideMenuEl (아이디가 side-menu인 div)에 open class 제거.
        setTimeout(function(){ // 일정 시간 간격 이후에 함수가 한번 실행
            _isAni = false;
            for(var i = 0; i < sideMenuItemEl.length; i++){
            sideMenuItemEl[i].classList.remove("ani"); // ani class를 제거함.
            }
        }, 400);
    }
}

// 호출되었을 때, ani class를 추가함.
function addAni(id){
    setTimeout(function(){ // 일정 시간 간격 이후에 함수가 한번 실행
        sideMenuItemEl[id].classList.add("ani");
    }, 40 * id);
}


//------
//이벤트가 바인딩되는 기능들
function addEvent() {
    btnMenuEl.addEventListener("click", onClickBtnMenu); //메뉴버튼을 클릭하면 onClickBtnMenu 함수(이벤트)를 실행.
    btnCloseEl.addEventListener("click", onClickBtnClose); //메뉴 닫힘 버튼을 클릭하면 onClickBtnClose 함수(이벤트)를 실행.
}

//초기화 기능 (unity Start와 비슷한 기능)
function init() {
    addEvent();
}
// 초기화 함수 호출.
init();
