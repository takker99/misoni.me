---
title: "Simple URL Copy"
date: "2020-12-10"
description: ""
tags: ["ジャンル無し 全部俺 Advent Calendar 2020", "Firefox", "拡張機能"]
---

この投稿は [ジャンル無し 全部俺 Advent Calendar 2020](https://adventar.org/calendars/5495) の 10 日目の投稿です。

---

Simple URL Copy という、Firefox 向けのちょっとした拡張機能を開発している。URL を Markdown や Scrapbox 形式でコピーするというものだ。「開発している」とはいえ、中核となる機能は fork 元のコードを流用していて、僕がやったことは Firefox へ対応するためのほんの少しの変更やデザインの調整、Scrapbox 記法の追加ぐらいだ。

この拡張機能のちょっと気の利いた機能として、Amazon の URL をコピーするときに商品名やクエリを除去してくれる、という機能がある。[Web 亭主関白](https://twitter.com/june29/status/981402467949797378)の人にはとてもありがたい機能なのだが、これが闇鍋のような正規表現で何とか動いている機能で、あまり完ぺきではない。いつか直したいと思いつつ、正規表現はよくわからないし、上手くいかなかったら人力で URL を削ればいいや、と思っていた。

ところが先日、[Amazon URL Shortener](https://chrome.google.com/webstore/detail/amazon-url-shortener/bonkcfmjkpdnieejahndognlbogaikdg) という拡張機能を見つけた。[ソース](https://github.com/r7kamura/amazon_url_shortener/blob/master/js/contentScript.js)を見て初めて知ったのだが、どうやら ASIN は HTML の中に記載されているらしい。こんなに短いソースコードで Amazon URL の整形ができるのなら早速やろうと思って MDN を見つつコードを開いたのだが、どうやら HTML 要素の値をポップアップ側で取得するためにはコンテントスクリプトやらバックグラウンドスクリプトやらを経由しないといけないらしい。こう聞くと無精者の僕は一気に手を出しづらくなってしまった。

どうしようかと思っていた矢先、Chromium に QR コードの生成機能が実装されたという話を聞いた。試してみたら確かに便利で、Simple URL Copy でも QR コード生成をできるようにしたいと思い立った。[おしゃれな QR コードを生成できるライブラリ](https://github.com/kozakdenys/qr-code-styling)を使おうと思ったのだが、CDN は使いたくないし CDN に置いてあるファイルをダウンロードしてローカルに配置するのもあまりスマートじゃないなと思って、Node module として導入しようと思ったのだけれど、そうすると webpack のようなバンドラを使う必要が出てくる。ネットの情報を継ぎ接ぎして、一応動かすことはできたのだけれど、結局自分が何をしているのかを理解しないままだった。今調べたら[その時書いた Scrapbox のページ](https://scrapbox.io/MISONLN41/Node.js%E3%81%AA%E3%81%AB%E3%82%82%E3%82%8F%E3%81%8B%E3%82%89%E3%81%AA%E3%81%84)が見つかった。

上記の Scrapbox ページでも書いてあるように、webpack が何をしているのか、とか、ブラウザ拡張機能の基本をしっかり知っておきたいと思ったので、先ほど重い腰を上げて[まっさらなブランチ](https://github.com/MISONLN41/simple-url-copy/tree/v2)を作った。ゲームやったり寝たり食ったり勉強したり(勉強してるのか?)と色々あるし、自分自身プログラミングがほとんどできない(サクッと書けるのは CSS ぐらい)身なので、開発は結構時間がかかると思う。が、とにかく、ちゃんと理解しながら開発を進めることと、いつでもいい、いつか完成させることが大切だ。ちょっとずつ頑張っていこうと思う。

ちなみに並行して Twitter クライアントの制作も進めたいと考えていたり。いや勉強しろよ。