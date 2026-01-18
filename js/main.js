const header = document.getElementById("header");
const backToTop = document.getElementById("js-back-to-top");
const hamburger = document.getElementById("js-hamburger");
const nav = document.getElementById("js-nav");
const navLinks = document.querySelectorAll(".nav-list a"); // メニュー内のリンクを取得

// メニュー開閉の関数
function toggleMenu() {
  hamburger.classList.toggle("active");
  nav.classList.toggle("is-open");

  if (nav.classList.contains("is-open")) {
    document.body.style.overflow = "hidden"; // スクロール禁止
  } else {
    document.body.style.overflow = ""; // スクロール再開
  }
}

// ハンバーガーボタンクリック
hamburger.addEventListener("click", toggleMenu);

// メニュー内のリンクをクリックしたら閉じる（ページ内リンク対策）
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (nav.classList.contains("is-open")) {
      toggleMenu();
    }
  });
});

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  // ヘッダーの制御（300px以上で表示）
  if (scrollY > 300) {
    header.classList.add("header-visible");
    header.classList.remove("header-hidden");
  } else {
    header.classList.remove("header-visible");
    header.classList.add("header-hidden");
  }

  // TOP戻るボタンの制御（500px以上で表示）
  if (scrollY > 500) {
    backToTop.classList.add("is-visible");
  } else {
    backToTop.classList.remove("is-visible");
  }
});
// TOP戻るボタンのクリックイベント
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// fadeUp
const objects = document.querySelectorAll(".fadeUp");
//スクロール感知で実行
const cb = function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("displayed"); //スクロール感知で「displayed」のクラス名を付与
      observer.unobserve(entry.target); //監視の終了
    }
  });
};
// オプション
const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0,
};
// IntersectionObserverインスタンス化
const io = new IntersectionObserver(cb, options);
// 監視を開始
objects.forEach((object) => {
  io.observe(object);
});
