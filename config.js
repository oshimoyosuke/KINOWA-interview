/**
 * KINOWA タレントマネジメント — 共通設定
 * ------------------------------------------------------------------
 * GAS を再デプロイして URL が変わったときは、このファイルの
 * GAS_URL だけを書き換えて GitHub にアップロードすれば全ツールに反映されます。
 * （各HTMLにも同じURLが保険として埋め込んでありますが、こちらが優先されます）
 * ------------------------------------------------------------------
 */
window.KINOWA_CONFIG = {
  // Apps Script ウェブアプリの /exec URL
  GAS_URL: 'https://script.google.com/macros/s/AKfycbxMhh1XVTGVhOhlYEOFVU3jNxQ4lk4igP7Df3OKn0gjuW09qzavkr6LJcixTfoUUj6H/exec',

  // personId の書式（GAS側の採番と揃えること）
  PERSON_ID_PREFIX: 'KINOWA-',

  // 入社後面談を実施する月（GAS・各HTMLの想定と揃えること）
  CHECKIN_MONTHS: [1, 3, 5]
};
