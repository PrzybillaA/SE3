import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TodoBoardPage } from './todo-board';

@NgModule({
  declarations: [
    TodoBoardPage,
  ],
  imports: [
    IonicPageModule.forChild(TodoBoardPage),
  ],
})
export class TodoBoardPageModule {}
