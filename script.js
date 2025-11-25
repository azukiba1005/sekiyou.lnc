/* * ハンバーガーメニューのためのJavaScript 
 */
document.addEventListener('DOMContentLoaded', () => {
    
    // HTMLからハンバーガーボタンとナビゲーションメニューを取得
    const hamburger = document.getElementById('hamburger-button');
    const nav = document.getElementById('global-nav');

    // ハンバーガーボタンがクリックされた時の処理
    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            // ボタン自体（三本線がX印になるため）
            hamburger.classList.toggle('active');
            // ナビゲーションメニュー（表示/非表示のため）
            nav.classList.toggle('active');
        });
    }
});

// ページの読み込み完了イベント
window.addEventListener('load', function() {
    // ローディング画面の要素を取得
    const loader = document.getElementById('loader-wrap');
    
    // 'loaded' クラスを追加して、CSSのフェードアウトをトリガー
    if (loader) {
        setTimeout(() => {
            loader.classList.add('loaded');
        }, 2500); // 2.5秒遅延
    }
});

// ... (もし他にハンバーガーメニューなどのコードがあれば、それはそのまま残してください) ...

const video = document.getElementById('intro-video');
const loaderPercent = document.getElementById('loader-percent');

video.addEventListener('loadedmetadata', () => {
    const duration = video.duration * 1000; // ミリ秒に変換
    let start = null;

    function updateProgress(timestamp) {
        if (!start) start = timestamp;
        const elapsed = timestamp - start;
        let percent = Math.min((elapsed / duration) * 100, 100);
        loaderPercent.textContent = Math.floor(percent) + '%';

        if (percent < 100) {
            requestAnimationFrame(updateProgress);
        }
    }

    requestAnimationFrame(updateProgress);
});