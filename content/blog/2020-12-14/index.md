---
title: "さらばWindows"
date: "2020-12-14"
description: ""
tags: ["ジャンル無し 全部俺 Advent Calendar 2020", "Arch Linux"]
---

この投稿は [ジャンル無し 全部俺 Advent Calendar 2020](https://adventar.org/calendars/5495) の 14 日目の投稿です。昨日はサボりました。

---

[つい先日 Windows に回帰したばかり](../2020-12-02/)なのに、今度は何を思ったか Arch Linux を導入してしまった。Windows にする前に使っていた Manjaro という Linux ディストリビューションは Arch Linux ベースで、GUI インストーラが付属していたりリポジトリの更新がゆっくり目で安定している、という特徴があったのだけれど、自分の中ではもっと素の状態の Arch Linux を使ってみたいという思いが燻っていた。

そんなことを考えつつも結局 Windows に回帰して数日間使っていたわけだが、先日の投稿で述べたように [Windows 上に構築していた DTV 環境が壊れてしまった](../2020-12-12)。大型アップデートのたびに DTV 環境が壊れるというリスクを抱え込むのは嫌だし、DTV 環境用にサブ PC を買えるほど財布に余裕があるわけでもない(実は Raspberry Pi を買うのもきついぐらいだ)。やはり DTV は Linux が良いだろうということで、かねてより試してみたいと思っていた Arch Linux を導入した、という次第だ。Battlefield とはまたお別れである。

Arch Linux は Manjaro と違ってインストールを CUI から行う必要がある。めちゃくちゃ難しそうだと思っていたし、実際結構手間取ってしまい、その所為でこのブログの投稿も一日空いてしまったわけだが、一度やり方さえ把握してしまえば割合に簡単だった。KDE を導入したら Manjaro で見慣れたいつものデスクトップがお目見え...となるのだが、やはり無駄なソフトがデフォルトでは一切入っていないスッキリとしたスタートメニューが素晴らしい。ちなみにターミナルアプリすら入っていない上インストール時に入れ忘れたのでわざわざ USB から `arch-chroot` し直して Konsole という KDE 純正のターミナルアプリをインストールする羽目になったのだが。

DTV 環境の構築もサクサク終わった。Windows であんなに手間取っていたのはなんだったのだろうかと呆れたくなるほどに快適だ。Linux ディストリビューションに触れれば触れるほど Windows の不完全な部分が見えてきてしまう。GUI の美しさも然り、DTV 環境の安定性も然り。とはいえそういった負債をなんとかしようと頑張っているのはよく伝わってくるので、Microsoft にはこの調子で頑張ってもらいたい。

しかし、パッケージの更新が早いというのはやはり精神衛生上とても良いものだ。安定性の面から見たら良くないのかもしれないが、とりあえず解決不可能な問題に遭遇するまではこの構成で行こうと思う。また気まぐれで Windows にしたり他の Linux ディストリビューションを入れたりするかもしれないが...

そういえば、今日は Google が盛大に落ちていた。Twitter では Gmail やら Google Drive やらが使えなくなって作業ができない！という阿鼻叫喚が垣間見えたが、やっぱり一社にインフラの多くを依存してしまうのはちょっと怖いなと思う。うまく複数のサービスを使い分けて、どこかが倒れてもバイパス・代替があるから大丈夫、という状況を作っておきたい。なんだかんだ、自分も Google にはどっぷり依存しまくっているので。それだけ便利なサービスが多いということでもあるのだが。まあ、いわゆる GAFAM? みたいな企業とはうまいこと距離を保ちつつ恩恵を享受していきたいものだ。