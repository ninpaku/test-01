# Task Board App

シンプルで使いやすいReactタスクボードアプリケーション。

## 機能

- ✅ テキスト入力でタスクを追加
- ✅ チェックボックスで完了・未完了を切り替え
- ✅ タスク削除機能
- ✅ 完了済みタスクはグレー表示
- ✅ ローカルストレージで自動保存
- ✅ GitHub Pages対応

## セットアップ

```bash
# 依存関係をインストール
npm install

# 開発サーバーを起動
npm run dev
```

ブラウザで `http://localhost:3000` にアクセス

## デプロイ

### GitHub Pagesへの公開

```bash
# ビルドしてGitHub Pagesにデプロイ
npm run deploy
```

デプロイ後、以下のURLでアプリを利用できます：
https://ninpaku.github.io/test-01/

### 自動デプロイの設定（オプション）

GitHub Actions を使用した自動デプロイを設定する場合は、`.github/workflows/deploy.yml` を作成してください。

## 使用方法

1. テキストボックスに新しいタスクを入力
2. 「追加」ボタンをクリック
3. チェックボックスで完了/未完了を切り替え
4. ✕ボタンでタスクを削除

## 技術スタック

- React 18.2
- Vite 4.3
- CSS（スタイル統一）
- localStorage API

## ビルド

```bash
npm run build
```

生成される `dist` フォルダがアプリケーション本体です。

## ライセンス

MIT
