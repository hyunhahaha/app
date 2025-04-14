import "../lib/smooth";
import "./styles/style.css";
import { markers } from "../lib/smooth";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Draggable } from "gsap/Draggable";
// import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger);
// ,Draggable,MotionPathPlugin






//section01_awesome
gsap.registerPlugin(ScrollTrigger);

gsap.to(".section01_awesome", {
  opacity: 1,
  rotate: 0,
  y: 0,
  duration: 1,
  stagger: 0.2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".section01",
    start: "top 80%", // 트리거 시작점
    end: "top 30%",   // 트리거 끝점
    scrub: false,     // scrub 쓰면 스크롤 진행률에 따라 애니메이션 진행됨
    once: true,       // 딱 한 번만 실행되게
    // markers: true,
  }
});


//section01_start
const section01_start = gsap.timeline();

section01_start.from(".section01_start", { stagger: 0.1, x: -40, opacity: 0 });

ScrollTrigger.create({
  trigger: ".section01",
  start: "top top",
  end: "300px top",
  // markers:true,
  animation: section01_start,
  scrub: 8,
});


//section01_folder01
const section01_folder01 = gsap.timeline();

section01_folder01.from(".section01_folder01", { stagger: 0.1, x: 40, opacity: 0 });

ScrollTrigger.create({
  trigger: ".section01",
  start: "top top", // 스크롤 시작 위치
  end: "450px top", // 끝 위치
  // markers:true,
  animation: section01_folder01,
  scrub: 8,
});


//section01_folder02
const section01_folder02 = gsap.timeline();

section01_folder01.from(".section01_folder02", { stagger: 0.1, x: -40, opacity: 0 });

ScrollTrigger.create({
  trigger: ".section01",
  start: "50px top", // 스크롤 시작 위치
  end: "450px top", // 끝 위치
  // markers:true,
  animation: section01_folder02,
  scrub: 8,
});


//section01_bubble01
const section01_bubble01 = gsap.timeline();

section01_bubble01.from(".section01_bubble01", { stagger: 0.1, y: 30, opacity: 0 });
section01_bubble01.from(".section01_bubble02", { stagger: 0.1, y: 30, opacity: 0 });
section01_bubble01.from(".section01_bubble03", { stagger: 0.1, y: 30, opacity: 0 });

ScrollTrigger.create({
  trigger: ".section01",
  start: "200px top", // 스크롤 시작 위치
  end: "600px center", // 끝 위치
  // markers:true,
  animation: section01_bubble01,
  scrub: 4,
});


const section03_text = gsap.timeline();

section03_text.from(".section03_text", { stagger: 0.1, y: 40, opacity: 0 });

ScrollTrigger.create({
  trigger: ".section03",
  start: "-100px center", // 스크롤 시작 위치
  end: "100px center", // 끝 위치
  // markers:true,
  animation: section03_text,
  scrub: 8,
});



const section04_bubble01 = gsap.timeline({ 
  repeat: -1, 
  yoyo: true, 
  repeatDelay: 0.2 // 깜빡임 사이 간격
});

// 모든 요소가 동시에 깜빡이도록 설정
section04_bubble01.fromTo(".section04_bubble01", 
  { opacity: 0 },
  { opacity: 1, duration: 0.3 }
).to(".section04_bubble01", 
  { opacity: 0, duration: 0.3 }
);

ScrollTrigger.create({
  trigger: ".section04",
  start: "top top",
  end: "bottom center",
  animation: section04_bubble01,
  scrub: false
});



const section04_bubble02 = gsap.timeline({ 
  repeat: -1, 
  yoyo: true, 
  repeatDelay: 0.2 // 깜빡임 사이 간격
});

// 모든 요소가 동시에 깜빡이도록 설정
section04_bubble02.fromTo(".section04_bubble02", 
  { opacity: 0 },
  { opacity: 1, duration: 0.3 }
).to(".section04_bubble02", 
  { opacity: 0, duration: 0.3 }
);

ScrollTrigger.create({
  trigger: ".section04",
  start: "top top",
  end: "bottom center",
  animation: section04_bubble02,
  scrub: false
});





//graph_효율적 관리1
ScrollTrigger.create({
  trigger: ".section04",
  start: "100px center",  // 스크롤 시작 위치
  end: "300px center",  // 끝 위치
  // markers:true,
  animation: gsap.to('.graph_orange01', { 
    width: '15vw',             // 로딩 박스의 스케일을 1로 설정
    ease: "none",          // 애니메이션 속도
  }),
  scrub: true,
});


//graph_효율적 관리2
ScrollTrigger.create({
  trigger: ".section04",
  start: "100px center",  // 스크롤 시작 위치
  end: "300px center",  // 끝 위치
  // markers:true,
  animation: gsap.to('.graph_orange02', { 
    width: '15vw',             // 로딩 박스의 스케일을 1로 설정
    ease: "none",          // 애니메이션 속도
  }),
  scrub: true,
});


//graph_효율적 관리3
ScrollTrigger.create({
  trigger: ".section04",
  start: "100px center",  // 스크롤 시작 위치
  end: "300px center",  // 끝 위치
  // markers:true,
  animation: gsap.to('.graph_orange03', { 
    width: '18vw',             // 로딩 박스의 스케일을 1로 설정
    ease: "none",          // 애니메이션 속도
  }),
  scrub: true,
});


//graph_빠른 정리1
ScrollTrigger.create({
  trigger: ".section04",
  start: "100px center",  // 스크롤 시작 위치
  end: "300px center",  // 끝 위치
  // markers:true,
  animation: gsap.to('.graph_orange04', { 
    width: '18vw',             // 로딩 박스의 스케일을 1로 설정
    ease: "none",          // 애니메이션 속도
  }),
  scrub: true,
});


//graph_빠른 정리2
ScrollTrigger.create({
  trigger: ".section04",
  start: "100px center",  // 스크롤 시작 위치
  end: "300px center",  // 끝 위치
  // markers:true,
  animation: gsap.to('.graph_orange05', { 
    width: '16.5vw',             // 로딩 박스의 스케일을 1로 설정
    ease: "none",          // 애니메이션 속도
  }),
  scrub: true,
});


//graph_빠른 정리3
ScrollTrigger.create({
  trigger: ".section04",
  start: "100px center",  // 스크롤 시작 위치
  end: "300px center",  // 끝 위치
  // markers:true,
  animation: gsap.to('.graph_orange06', { 
    width: '18vw',             // 로딩 박스의 스케일을 1로 설정
    ease: "none",          // 애니메이션 속도
  }),
  scrub: true,
});


//section05_bubble01
const section05_bubble01 = gsap.timeline();

section05_bubble01.fromTo(".section05_bubble01", 
  { rotate: 0, opacity: 0 },    // 시작 상태
  { rotate: 5, opacity: 1, stagger: 0.1, duration: 1 } // 끝 상태
);

ScrollTrigger.create({
  trigger: ".section05",
  start: "-200px top", // 스크롤 시작 위치
  end: "400px center", // 끝 위치
  // markers:true,
  animation: section05_bubble01,
  scrub: 1,
});


//section05_bubble02
const section05_bubble02 = gsap.timeline();

section05_bubble02.fromTo(".section05_bubble02", 
  { rotate: 0, opacity: 0 },    // 시작 상태
  { rotate: -5.5, opacity: 1, stagger: 0.1, duration: 1 } // 끝 상태
);

ScrollTrigger.create({
  trigger: ".section05",
  start: "-200px top", // 스크롤 시작 위치
  end: "400px center", // 끝 위치
  // markers:true,
  animation: section05_bubble02,
  scrub: 1,
});


//section05_bubble03
const section05_bubble03 = gsap.timeline();

section05_bubble03.fromTo(".section05_bubble03", 
  { rotate: 0, opacity: 0 },    // 시작 상태
  { rotate: 11, opacity: 1, stagger: 0.1, duration: 1 } // 끝 상태
);

ScrollTrigger.create({
  trigger: ".section05",
  start: "-200px top", // 스크롤 시작 위치
  end: "400px center", // 끝 위치
  // markers:true,
  animation: section05_bubble03,
  scrub: 1,
});


//section05_bubble04
const section05_bubble04 = gsap.timeline();

section05_bubble04.fromTo(".section05_bubble04", 
  { rotate: 0, opacity: 0 },    // 시작 상태
  { rotate: -7, opacity: 1, stagger: 0.1, duration: 1 } // 끝 상태
);

ScrollTrigger.create({
  trigger: ".section05",
  start: "-200px top", // 스크롤 시작 위치
  end: "400px center", // 끝 위치
  // markers:true,
  animation: section05_bubble04,
  scrub: 1,
});


//section05_bubble05
const section05_bubble05 = gsap.timeline();

section05_bubble05.fromTo(".section05_bubble05", 
  { rotate: 0, opacity: 0 },    // 시작 상태
  { rotate: 4, opacity: 1, stagger: 0.1, duration: 1 } // 끝 상태
);

ScrollTrigger.create({
  trigger: ".section05",
  start: "-200px top", // 스크롤 시작 위치
  end: "400px center", // 끝 위치
  // markers:true,
  animation: section05_bubble05,
  scrub: 1,
});


//section05_bubble00
const section05_bubble00 = gsap.timeline();

section05_bubble00.fromTo(".section05_bubble00", 
  { rotate: 0, opacity: 0 },    // 시작 상태
  { rotate: 1, opacity: 1, stagger: 0.1, duration: 1 } // 끝 상태
);

ScrollTrigger.create({
  trigger: ".section05",
  start: "-200px top", // 스크롤 시작 위치
  end: "400px center", // 끝 위치
  // markers:true,
  animation: section05_bubble00,
  scrub: 1,
});



//섹션6 말풍선
const s6_bubble = gsap.timeline();

s6_bubble.from(".section06_bubble01", { stagger: 0.1, opacity: 0 });
s6_bubble.from(".section06_bubble02", { stagger: 0.1, opacity: 0 });
s6_bubble.from(".section06_bubble03", { stagger: 0.1, opacity: 0 });


ScrollTrigger.create({
  trigger: ".section06",
  start: "-300px top", // 스크롤 시작 위치
  end: "200px center", // 끝 위치
  // markers:true,
  animation: s6_bubble,
  scrub: 3,
});





//section08_search
const section08_search01 = gsap.timeline();

section08_search01.from(".section08_search01", { stagger: 0.1, y: 30, opacity: 0 });
section08_search01.from(".section08_search02", { stagger: 0.1, y: 30, opacity: 0 });
section08_search01.from(".section08_search03", { stagger: 0.1, y: 30, opacity: 0 });

ScrollTrigger.create({
  trigger: ".section08",
  start: "top top", // 스크롤 시작 위치
  end: "600px center", // 끝 위치
  // markers:true,
  animation: section08_search01,
  scrub: 4,
});



//section08_carousel
const section08_carousel01 = gsap.timeline();

section08_carousel01.from(".section08_carousel01", { stagger: 0.1, y: 30, opacity: 0 });
section08_carousel01.from(".section08_carousel02", { stagger: 0.1, y: 30, opacity: 0 });

ScrollTrigger.create({
  trigger: ".section08",
  start: "center center", // 스크롤 시작 위치
  end: "1600px center", // 끝 위치
  // markers:true,
  animation: section08_carousel01,
  scrub: 4,
});



//연달아 올라오는 5줄 1
ScrollTrigger.create({
  trigger: ".section09",
  start: "300px center",
  end: "600px center",
  // markers:true,
  animation: gsap.from(".ani_1", { y: 30, opacity: 0, stagger: 0.1 }),
  // pinSpacing:false,
  // pin: true,
  scrub: true,
});


//연달아 올라오는 5줄 2
ScrollTrigger.create({
  trigger: ".section09",
  start: "1000px center",
  end: "1400px center",
  // markers:true,
  animation: gsap.from(".ani_2", { y: 30, opacity: 0, stagger: 0.1 }),
  // pinSpacing:false,
  // pin: true,
  scrub: true,
});


//연달아 올라오는 5줄 3
ScrollTrigger.create({
  trigger: ".section09",
  start: "1100px center",
  end: "1500px center",
  markers:true,
  animation: gsap.from(".ani_3", { y: 30, opacity: 0, stagger: 0.1 }),
  // pinSpacing:false,
  // pin: true,
  scrub: true,
});




const left_01 = gsap.timeline();

left_01.from(".left1", { x: -50, opacity: 0 });

ScrollTrigger.create({
  trigger: ".section10",
  start: "top top", // 스크롤 시작 위치
  end: "1000px center", // 끝 위치
  // markers:true,
  animation: left_01,
  scrub: true,
});


const right_01 = gsap.timeline();

right_01.from(".right1", { x: 50, opacity: 0 });

ScrollTrigger.create({
  trigger: ".section10",
  start: "800px top", // 스크롤 시작 위치
  end: "1800px center", // 끝 위치
  // markers:true,
  animation: right_01,
  scrub: true,
});


const left_02 = gsap.timeline();

left_02.from(".left2", { x: -50, opacity: 0 });

ScrollTrigger.create({
  trigger: ".section10",
  start: "1400px top", // 스크롤 시작 위치
  end: "2400px center", // 끝 위치
  // markers:true,
  animation: left_02,
  scrub: true,
});


const right_02 = gsap.timeline();

right_02.from(".right2", { x: 50, opacity: 0 });

ScrollTrigger.create({
  trigger: ".section10",
  start: "2200px top", // 스크롤 시작 위치
  end: "3200px center", // 끝 위치
  // markers:true,
  animation: right_02,
  scrub: true,
});












markers();
