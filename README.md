# Nuxt 4 Vue First Check

Vue経験者がNuxt 4を触るときに、最初に確認しておきたいポイントを整理するためのサンプルプロジェクトです。

Zenn記事とセットで、Vue単体の開発とNuxtの規約ベースの開発の違いを確認する目的で作成しています。

## Article

Zenn記事：

* Vue経験者がNuxt 4を触って最初に確認したこと

※記事URLは公開後に追記予定です。

## Tech Stack

```txt
Node.js: 24.13.0
npm: 11.6.2
Nuxt: 4.4.6
Vue: 3.5.34
OS: Windows 11
```

## What This Project Covers

このサンプルでは、以下を確認できます。

* `app/app.vue` によるアプリ全体の入口
* `app/pages/` によるファイルベースルーティング
* `app/pages/about.vue` による `/about` ページ
* `app/pages/posts/index.vue` による記事一覧ページ
* `app/pages/posts/[id].vue` による動的ルート
* `<NuxtLink>` によるページ遷移
* `<NuxtLayout>` / `<NuxtPage>` によるレイアウト構成
* `app/layouts/default.vue` による共通レイアウト
* `app/components/` 配下のコンポーネント自動インポート
* `app/composables/` 配下の composable 自動インポート
* `useFetch` によるデータ取得
* `$fetch` によるイベント起点のAPI呼び出し
* `server/api/hello.get.ts` によるサーバーAPI
* `useSeoMeta` によるページごとのメタ情報設定
* SSR前提のNuxtアプリの基本的な考え方

## Getting Started

依存パッケージをインストールします。

```bash
npm install
```

開発サーバーを起動します。

```bash
npm run dev
```

ブラウザで以下にアクセスします。

```txt
http://localhost:3000
```

## Verification URLs

以下のURLで動作確認できます。

```txt
/              Homeページの確認
/about         Aboutページとメタ情報の確認
/posts         useFetchによる記事一覧取得
/posts/1       動的ルートの確認
/api/hello     server/api の確認
```

## Directory Structure

```txt
app/
  app.vue
  components/
    AppAlert.vue
  composables/
    useCounter.ts
  layouts/
    default.vue
  pages/
    index.vue
    about.vue
    api-sample.vue
    posts/
      index.vue
      [id].vue

server/
  api/
    hello.get.ts

public/
nuxt.config.ts
```

## Notes

このプロジェクトは、Vue経験者がNuxt 4の基本的な規約を確認するための検証用サンプルです。

Nuxtでは、`app/pages/` 配下のファイル構成からルートが自動生成されます。
Vue Routerのようにルート定義を自分で書くのではなく、ファイル構成でURLを表現します。

また、`app/components/` や `app/composables/` 配下のファイルは自動インポートの対象になります。
そのため、通常はページ側で明示的な import を書かずに使用できます。

`/api/hello` は画面ページではなく、`server/api/hello.get.ts` によるサーバーAPIです。
ブラウザでアクセスすると、JSONレスポンスが返ります。

## Data Fetching

記事一覧の取得には、検証用の外部APIとして JSONPlaceholder を使用しています。

```txt
https://jsonplaceholder.typicode.com/posts
```

Nuxtでは、ページ表示時のデータ取得には `useFetch`、ユーザー操作をきっかけにしたAPI呼び出しには `$fetch` を使うと整理しやすいです。

## References

* [Nuxt Introduction](https://nuxt.com/docs/4.x/getting-started/introduction)
* [Nuxt Directory Structure: app](https://nuxt.com/docs/4.x/guide/directory-structure/app)
* [Nuxt Directory Structure: pages](https://nuxt.com/docs/4.x/guide/directory-structure/pages)
* [Nuxt Auto-imports](https://nuxt.com/docs/4.x/guide/concepts/auto-imports)
* [Nuxt Data Fetching](https://nuxt.com/docs/4.x/getting-started/data-fetching)
* [Nuxt Directory Structure: server](https://nuxt.com/docs/4.x/guide/directory-structure/server)

## Related Articles

* Zenn: https://zenn.dev/maeda_dev/articles/5848ebd48893c5
