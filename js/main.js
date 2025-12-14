 $(".slide-items").slick({
    arrows: false,
    centerMode: true,
    centerPadding: "80px",
    slidesToShow: 5,
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          centerPadding: "50px",
          slidesToShow: 4,
        },
      },

      {
        breakpoint: 768,
        settings: {
          centerPadding: "50px",
          slidesToShow: 2,
        },
      },
    ],
  });

  $(function() {
    let tabs = $(".tab");
    $(".tab").on("click", function() {
        $(".active").removeClass("active");
        $(this).addClass("active");
        const index = tabs.index(this);
        $(".access-content").removeClass("show").eq(index).addClass("show");
    });
});

$(function () {
  /*=================================================
  ハンバーガ―メニュー
  ===================================================*/
  // ハンバーガーメニューをクリックした時
  $(".toggle-btn").on("click", function () {
    $(".menu").toggleClass("open");
  });
  // メニューのリンクをクリックした時
  $("nav a").on("click", function () {
    $(".menu").toggleClass("open");
  });
});

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});

// アンカーリンクを補正
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            scroll.scrollTo(target);
        }
    });
});

// ページロード後にハッシュがあればスクロール
window.addEventListener('load', () => {
  const hash = window.location.hash;
  if (hash) {
    const target = document.querySelector(hash);
    if (target) {
      scroll.scrollTo(target, {
        offset: 0,
        duration: 1000
      });
    }
  }
});


window.addEventListener('load', () => {
  setTimeout(() => {
    const hash = window.location.hash;
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        scroll.update();   // 座標を再計算
        scroll.scrollTo(target); // 1秒後にスクロール
      }
    }
  }, 0); // ロード完了から1秒後に実行
});


scroll.on('scroll', (obj) => {
    const scrollY = obj.scroll.y;

    const toggleBtn = document.querySelector('.toggle-btn');
    const reserveBtn = document.querySelector('.reserve-fixed');
    const scrollBtn = document.querySelector('.scrollbtn');

    if (scrollY > 100) {
        toggleBtn.classList.add('show');
        reserveBtn.classList.add('show');
        scrollBtn.classList.add('show');
    } else {
        toggleBtn.classList.remove('show');
        reserveBtn.classList.remove('show');
        scrollBtn.classList.remove('show');
    }
});

window.onload = function () {
  const spinner = document.getElementById("loading");
  spinner.classList.add("loaded");
};

//  /*=================================================
//   トップに戻る
//   ===================================================*/
//  $(function () {
//   let pagetop = $(".scrollbtn");
//   // 最初に画面が表示された時は、トップに戻るボタンを非表示に設定
//   // pagetop.hide();

// //   スクロールイベントやスクロール位置の取得は、基本的に window に対して行うべきです。
// // なぜなら、ページ全体のスクロールは window が担当しているからです。※bodyではだめ


//   // スクロールイベント（スクロールされた際に実行）
//   $(window).scroll(function () {
//     // スクロール位置が700pxを超えた場合
//     if ($(window).scrollTop() > 100) {
//       // トップに戻るボタンを表示する
//       pagetop.fadeIn();

//       // スクロール位置が700px未満の場合
//     } else {
//       // トップに戻るボタンを非表示にする
//       pagetop.fadeOut();
//     }
//   });

//   // クリックイベント（ボタンがクリックされた際に実行）
//     pagetop.click(function () {
//     // 0.5秒かけてページトップへ移動
//     $("body,html").animate({ scrollTop:  0}, 500);

//     // イベントが親要素へ伝播しないための記述
//     // ※詳しく知りたい方は「イベント　バブリング」または「jQuery バブリング」で調べてみてください
//     return false;
//   });
// });