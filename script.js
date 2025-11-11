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

(function() {
    var ua = navigator.userAgent;
    if (
        ua.indexOf('iPhone') > 0 || 
        ua.indexOf('iPad') > 0 || 
        ua.indexOf('iPod') > 0 || 
        (ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0)
    ) {
        // スマホなら 'mobile/index.html' に飛ばす
        location.href = 'mobile/mobile.html';
    }
})();
