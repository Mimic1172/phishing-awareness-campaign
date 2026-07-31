// ===== 요소 가져오기 =====
const screen = document.getElementById("screen");
const nextBtn = document.getElementById("nextBtn");
const firstBtn = document.getElementById("firstBtn");
const secondBtn = document.getElementById("secondBtn");

// ===== 학습 사이트 주소 =====
const GUIDE_URL = "https://www.digicert.com/kr/blog/how-to-identify-fake-websites";

// ===== 현재 페이지 번호 =====
let page = 0;

// ===== 화면 이미지 목록 =====
const pages = [
    "images/home.jpg",          // 0: 인트로
    "images/guide.jpg",         // 1: 안내
    "images/fake.jpg",          // 2: 가짜 화면
    "images/real.jpg",          // 3: 진짜 화면
    "images/select.jpg",        // 4: 선택 화면
    "images/fake-result.jpg",   // 5: 오답 결과
    "images/real-result.jpg"    // 6: 정답 결과
];

// =========================
// 화면 변경 함수
// =========================
function showPage() {
    screen.src = pages[page];

    // 모든 버튼 일단 숨기기
    nextBtn.style.display = "none";
    firstBtn.style.display = "none";
    secondBtn.style.display = "none";

    switch(page){
        case 0: // home ('시작하기' 우측 하단 영역)
            setBtnStyle(nextBtn, 60, 88, 35, 8); // left, top, width, height (%)
            break;

        case 1: // guide ('시작' 하단 분홍 버튼)
        case 2: // fake ('다음으로 넘어가기' 하단 버튼)
        case 3: // real ('다음으로 넘어가기' 하단 버튼)
            setBtnStyle(nextBtn, 6, 85, 88, 8);
            break;

        case 4: // select (선택 화면)
            showChoice();
            break;

        case 5: // fake-result (오답 결과)
        case 6: // real-result (정답 결과)
            setBtnStyle(nextBtn, 6, 85, 88, 8);
            break;
    }
}

// =========================
// 버튼 스타일 세팅 함수
// =========================
function setBtnStyle(btn, left, top, width, height) {
    btn.style.display = "block";
    btn.style.left = left + "%";
    btn.style.top = top + "%";
    btn.style.width = width + "%";
    btn.style.height = height + "%";
}

// =========================
// 선택 버튼 2개 세팅
// =========================
function showChoice(){
    // 첫번째 버튼 ('첫번째' 상자)
    setBtnStyle(firstBtn, 6, 75, 88, 8);
    
    // 두번째 버튼 ('두번째' 상자)
    setBtnStyle(secondBtn, 6, 85, 88, 8);
}

// =========================
// 이벤트 리스너 등록
// =========================

// 1. 다음/시작 버튼
nextBtn.onclick = function() {
    if(page === 5 || page === 6){
        window.location.href = GUIDE_URL;
        return;
    }
    page++;
    showPage();
};

// 2. 첫번째 선택 (오답)
firstBtn.onclick = function() {
    page = 5;
    showPage();
};

// 3. 두번째 선택 (정답)
secondBtn.onclick = function() {
    page = 6;
    showPage();
};

// 최초 실행
showPage();