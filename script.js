// ===== 요소 가져오기 =====
const screen = document.getElementById("screen");

const nextBtn = document.getElementById("nextBtn");
const firstBtn = document.getElementById("firstBtn");
const secondBtn = document.getElementById("secondBtn");

// ===== 학습 사이트 주소 =====
const GUIDE_URL = "https://www.digicert.com/kr/blog/how-to-identify-fake-websites";

// ===== 현재 화면 =====
let page = 0;

// ===== 화면 목록 =====
const pages = [
    "images/home.jpg",
    "images/guide.jpg",
    "images/fake.jpg",
    "images/real.jpg",
    "images/select.jpg",
    "images/fake-result.jpg",
    "images/real-result.jpg"
];

// =========================
// 화면 변경
// =========================
function showPage() {

    screen.src = pages[page];

    // 버튼 숨기기
    nextBtn.style.display = "none";
    firstBtn.style.display = "none";
    secondBtn.style.display = "none";

    switch(page){

        // home
        case 0:

            showNext(220,720,130,55);

            break;

        // guide
        case 1:

            showNext(220,720,130,55);

            break;

        // fake
        case 2:

            showNext(220,720,130,55);

            break;

        // real
        case 3:

            showNext(220,720,130,55);

            break;

        // 선택
        case 4:

            showChoice();

            break;

        // 결과
        case 5:
        case 6:

            showNext(70,690,250,60);

            break;

    }

}

// =========================
// 다음 버튼 표시
// =========================

function showNext(left, top, width, height){

    nextBtn.style.display = "block";

    nextBtn.style.left = left + "px";
    nextBtn.style.top = top + "px";

    nextBtn.style.width = width + "px";
    nextBtn.style.height = height + "px";

}

// =========================
// 선택 버튼 표시
// =========================

function showChoice(){

    firstBtn.style.display = "block";
    secondBtn.style.display = "block";

    // 첫번째 버튼
    firstBtn.style.left = "24px";
    firstBtn.style.top = "657px";
    firstBtn.style.width = "344px";
    firstBtn.style.height = "49px";

    // 두번째 버튼
    secondBtn.style.left = "24px";
    secondBtn.style.top = "731px";
    secondBtn.style.width = "344px";
    secondBtn.style.height = "49px";

}

// =========================
// 다음 버튼 클릭
// =========================

nextBtn.addEventListener("click",()=>{

    // 결과 화면이면 학습 사이트 이동

    if(page==5 || page==6){

        window.location.href = GUIDE_URL;

        return;

    }

    page++;

    showPage();

});

// =========================
// 첫번째 선택
// =========================

firstBtn.addEventListener("click",()=>{

    page = 5;

    showPage();

});

// =========================
// 두번째 선택
// =========================

secondBtn.addEventListener("click",()=>{

    page = 6;

    showPage();

});

// =========================
// 시작
// =========================

showPage();