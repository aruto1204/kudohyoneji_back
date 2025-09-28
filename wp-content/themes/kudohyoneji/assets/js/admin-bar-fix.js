/**
 * WordPress管理バーのパフォーマンス問題を修正
 * 非パッシブなタッチイベントリスナーをパッシブに変更
 */

(function () {
  "use strict";

  // DOMが読み込まれた後に実行
  document.addEventListener("DOMContentLoaded", function () {
    // 管理バーが存在するかチェック
    const adminBar = document.getElementById("wpadminbar");
    if (!adminBar) {
      return;
    }

    // 既存のタッチイベントリスナーを削除して、パッシブなリスナーに置き換える
    function fixTouchEvents() {
      // 管理バー内のすべての要素を取得
      const adminBarElements = adminBar.querySelectorAll("*");

      // 各要素に対してタッチイベントを修正
      adminBarElements.forEach(function (element) {
        // 既存のイベントリスナーをクローンして置き換え
        const newElement = element.cloneNode(true);
        if (element.parentNode) {
          element.parentNode.replaceChild(newElement, element);
        }
      });

      // 管理バーのメニュー機能を再実装（パッシブイベントで）
      setupAdminBarMenus();
    }

    // 管理バーのメニュー機能をパッシブイベントで再実装
    function setupAdminBarMenus() {
      const menuItems = adminBar.querySelectorAll(".menupop");

      menuItems.forEach(function (menuItem) {
        const menuLink = menuItem.querySelector("> a, > .ab-item");

        if (menuLink) {
          // タッチイベントをパッシブで追加
          menuLink.addEventListener(
            "touchstart",
            function (e) {
              // タッチ開始時の処理
              menuItem.classList.add("hover");
            },
            { passive: true }
          );

          menuLink.addEventListener(
            "touchend",
            function (e) {
              // タッチ終了時の処理
              setTimeout(function () {
                menuItem.classList.remove("hover");
              }, 300);
            },
            { passive: true }
          );

          // マウスイベントも追加
          menuLink.addEventListener("mouseenter", function () {
            menuItem.classList.add("hover");
          });

          menuLink.addEventListener("mouseleave", function () {
            menuItem.classList.remove("hover");
          });
        }
      });
    }

    // 管理バーが完全に読み込まれるまで少し待つ
    setTimeout(fixTouchEvents, 100);
  });

  // ページ読み込み完了後にも実行（念のため）
  window.addEventListener("load", function () {
    setTimeout(function () {
      const adminBar = document.getElementById("wpadminbar");
      if (adminBar && !adminBar.hasAttribute("data-touch-fixed")) {
        adminBar.setAttribute("data-touch-fixed", "true");

        // コンソールに修正完了メッセージを出力（開発時のみ）
        if (window.console && console.log) {
          console.log("WordPress管理バーのタッチイベントを最適化しました");
        }
      }
    }, 200);
  });
})();
