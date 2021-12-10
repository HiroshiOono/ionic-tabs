import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController } from '@ionic/angular';//アクションシートとアラートコントローラを使えるようにする

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.page.html',
  styleUrls: ['./task-list.page.scss'],
})
export class TaskListPage implements OnInit {
  //タスク表示表配列。この中身をループする
  tasks: { name: string}[] = [
    { name: 'タスク１'},
    { name: 'タスク２',}
  ];
  constructor(
    public actionSheetController: ActionSheetController,//アクションシートのインスタンスを作成
    public alertController: AlertController,//アラートコントローラのインスタンスを作成
  ) { }

  ngOnInit() {
  }

    //ページ読み込み時の処理
  ionViewWillEnter(){

    //ローカルストレージに[tasks]]が有ればJSONから複合しながら読み込む
    if('tasks' in localStorage){
      this.tasks = JSON.parse(localStorage.tasks);
    }

  }

//アクションシート作成と呼び出し
  async changeTask(index: number) {
    const actionSheet = await this.actionSheetController.create({

        header: 'タスクの変更',
        buttons:[
          {
            text: '削除',
            role: 'destructive',
            icon: 'trash',
            //アクションシートで選択した時の動き
            handler:() => {
              console.log('Destructive clicked');//ログの表示
              this.tasks.splice(index, 1);//画面のtaskから削除する
              localStorage.tasks = JSON.stringify(this.tasks);///削除後でローカルストレージに上書き保存
            }
          },{
            text: '変更',
            icon: 'create',
            handler:() => {
              console.log('Archive clicked');
              this._renameTask(index);
            } 
          },{
            text: '閉じる',
            icon: 'close',
            role: 'cancel',
            handler:() => {
              console.log('Cancel clicked');
            }    
          }
        ]
    });
    actionSheet.present();
  }


  //アラートコントローラ作成と呼び出し
  async _renameTask(index: number) {
    const prompt = await this.alertController.create({

        header: '変更後のタスク',
        inputs:[
          {
            name: 'task',
            placeholder: 'タスク',
            value: this.tasks[index].name
          },
        ],

        buttons:[
          {
            text: '閉じる'
          },{
            text: '保存',
            handler:data => {
              this.tasks[index] = {name:data.task};
              localStorage.tasks = JSON.stringify(this.tasks);
            }    
          }
        ]
    });
    prompt.present();
  }





}
