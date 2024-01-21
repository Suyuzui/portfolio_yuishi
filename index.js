//ヘッダーナビゲーションの設定
const responsive_menu_btn = document.querySelector('.responsive_btn');
responsive_menu_btn.addEventListener('click', () => {
  responsive_menu_btn.classList.toggle('active');
  const header_menu_detail = document.querySelector('.header_nav');
    header_menu_detail.classList.toggle('menu_active');
});

//function Toggle_menu() {
//    const header_menu_detail = document.querySelector('.header_nav');
//    header_menu_detail.classList.toggle('menu_active');

//  }


//フィルタリング
document.addEventListener('DOMContentLoaded', () => {
  // ボタンを選択
  document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
      // value属性の値を取得
      const target = button.getAttribute('value');

      // 全てのli要素を調べる
      document.querySelectorAll('#lists li').forEach(li => {
        // 一度全て非表示にする
        li.style.opacity = 0;
        li.style.display = 'none';

        // フィルタリングの条件を満たしているか
        if (li.classList.contains(target) || target === 'all') {
          // 条件を満たしている場合は再表示
          li.style.display = 'block';
          li.style.opacity = 1;
        }
      });
    });
  });
});



// JavaScript code using ES6 syntax
// ES6の記法を使用してボタンがクリックされたときに色を変更する関数を定義
const changeButtonColor = () => {
  const buttons = document.querySelectorAll('.button');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      buttons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
    });
  });
};

// ページが読み込まれたら色を変更する関数を実行
document.addEventListener('DOMContentLoaded', () => {
  changeButtonColor();
});


//キャプション
document.addEventListener('DOMContentLoaded', () => {
  const duration = 300;
  const images = document.querySelectorAll('.images p');

  images.forEach((image, index) => {
    image.addEventListener('mouseover', () => {
      animateElements(image, 1);
    });

    image.addEventListener('mouseout', () => {
      animateElements(image, 0);
    });

    image.addEventListener('click', () => {
      const link = image.closest('a').getAttribute('href');
      window.location.href = link;
    });
  });

  function animateElements(image, opacity) {
    const elementsToAnimate = image.querySelectorAll('span');
    elementsToAnimate.forEach((element) => {
      element.style.transition = `opacity ${duration}ms`;
      element.style.opacity = opacity;
    });
  }
});


//戻るボタン
document.getElementById('pageTopBtn').addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


//aboutME
document.addEventListener("DOMContentLoaded", () => {
  // Get timeline elements
  const dates = document.getElementById("dates");
  const issues = document.getElementById("issues");

  // Add click event listener to each date link
  dates.addEventListener("click", (event) => {
    if (event.target.tagName === "A" && !event.target.classList.contains("selected")) {
      // Remove 'selected' class from all date links
      const dateLinks = dates.getElementsByTagName("a");
      for (const link of dateLinks) {
        link.classList.remove("selected");
      }

      // Add 'selected' class to the clicked date link
      event.target.classList.add("selected");

      // Get the corresponding issue element and remove 'selected' class from all issues
      const selectedYear = event.target.getAttribute("href").substring(1);
      const issueElements = issues.getElementsByTagName("li");
      for (const issue of issueElements) {
        issue.classList.remove("selected");
      }

      // Add 'selected' class to the issue corresponding to the clicked date
      const selectedIssue = document.getElementById(selectedYear);
      selectedIssue.classList.add("selected");

      // Scroll to the selected issue element with smooth scroll
      const yOffset = -300; // Adjust this value as needed
      const elementTop = selectedIssue.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: elementTop, behavior: "smooth" });
    }
  });
});









