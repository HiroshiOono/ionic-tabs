//起動時の初回ページ

import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',//実際のhtmlファイル名
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  //画面タイトル。変数宣言＋初期値
  title = 'タスク登録';

  //タスク登録用変数。変数宣言
  task: string;

  //タスク表示表配列。この中身をループする
  tasks: { name: string}[] = [
    { name: 'タスク１'},
    { name: 'タスク２',}
  ];
  constructor() {}


  //ページ読み込み時の処理
  ionViewWillEnter(){

    //ローカルストレージに[tasks]]が有ればJSONから複合しながら読み込む
    if('tasks' in localStorage){
      this.tasks = JSON.parse(localStorage.tasks);
    }

  }


//タスクを追加する処理
addTask(){

  //[配列：tasks]の[name]]に「変数：task」を追加する
  this.tasks.push({
    name: this.task
  });
  //ローカルストレージの[tasks]に、[配列:tasks]をJSONに変換して保存する
  localStorage.tasks = JSON.stringify(this.tasks);
  this.task = '';//ここで「変数：task」の入力欄<ion-input>をクリアする
}


}
