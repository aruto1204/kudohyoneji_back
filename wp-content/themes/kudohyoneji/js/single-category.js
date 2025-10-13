// カテゴリーをラジオボタンに変更（Gutenberg対応版）
document.addEventListener("DOMContentLoaded", function () {
  let isConverted = false;

  // チェックボックスをラジオボタンに変換する関数
  function convertToRadioButtons() {
    // Gutenbergエディタのチェックボックスを取得
    const categoryCheckboxes = document.querySelectorAll(
      '.editor-post-taxonomies__hierarchical-terms-choice input[type="checkbox"]'
    );

    // クラシックエディタのチェックボックスも対応
    const classicCheckboxes = document.querySelectorAll(
      '#categorychecklist input[type="checkbox"], #categorychecklist-pop input[type="checkbox"]'
    );

    const allCheckboxes = categoryCheckboxes.length > 0 ? categoryCheckboxes : classicCheckboxes;

    if (allCheckboxes.length > 0 && !isConverted) {
      console.log(`カテゴリーチェックボックスを検出し、ラジオボタンに変換: ${allCheckboxes.length}個`);
      isConverted = true;

      // 各チェックボックスをラジオボタンに変換
      allCheckboxes.forEach(function (checkbox, index) {
        // 現在の状態を保存
        const isChecked = checkbox.checked;
        const originalId = checkbox.id;
        const originalValue = checkbox.value;
        const originalName = checkbox.name;

        // 新しいラジオボタンを作成
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'category-radio-group';
        radio.id = originalId;
        radio.value = originalValue;
        radio.checked = isChecked;
        radio.className = checkbox.className;

        // 元のチェックボックスの属性をコピー
        Array.from(checkbox.attributes).forEach(attr => {
          if (attr.name !== 'type' && attr.name !== 'name' && attr.name !== 'id') {
            radio.setAttribute(attr.name, attr.value);
          }
        });

        // ラジオボタンがクリックされたときの処理
        radio.addEventListener('change', function () {
          if (this.checked) {
            // 元のチェックボックスを全て外す
            allCheckboxes.forEach(cb => {
              cb.checked = false;
            });

            // 対応する元のチェックボックスをチェック
            checkbox.checked = true;

            // Reactのイベントをトリガー（Gutenberg用）
            checkbox.dispatchEvent(new Event('change', { bubbles: true }));
            checkbox.dispatchEvent(new Event('click', { bubbles: true }));
          }
        });

        // 元のチェックボックスを非表示にしてラジオボタンを挿入
        checkbox.style.display = 'none';
        checkbox.parentNode.insertBefore(radio, checkbox);

        // 元のチェックボックスの変更を監視してラジオボタンに反映
        const checkboxObserver = new MutationObserver(function (mutations) {
          mutations.forEach(mutation => {
            if (mutation.type === 'attributes' && mutation.attributeName === 'checked') {
              radio.checked = checkbox.checked;
            }
          });
        });

        checkboxObserver.observe(checkbox, {
          attributes: true,
          attributeFilter: ['checked']
        });
      });
    }
  }

  // 初回実行
  convertToRadioButtons();

  // MutationObserverでDOMの変更を監視（Gutenbergは動的にロードされるため）
  const observer = new MutationObserver(function () {
    if (!isConverted) {
      convertToRadioButtons();
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

  // Gutenbergエディタの準備完了を待つ
  if (window.wp && window.wp.data) {
    const unsubscribe = window.wp.data.subscribe(() => {
      const editor = window.wp.data.select('core/editor');
      if (editor) {
        setTimeout(convertToRadioButtons, 1000);
        unsubscribe();
      }
    });
  }
});
