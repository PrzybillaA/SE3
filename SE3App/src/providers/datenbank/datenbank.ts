import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';
import { Storage } from '@capacitor/storage';

/*
  Generated class for the DatenbankProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatenbankProvider {

  constructor() {}

  async setName () {
    await Storage.set({
      key: 'name',
      value: 'Max',
    });
  };
  
  async checkName () {
    return await Storage.get({ key: 'name' });
  
    
  };
  
  async removeName () {
    await Storage.remove({ key: 'name' });
  };

  async setTodo(todo: Todo): Promise<any>{

    let keys = await Storage.keys;

    for(let i = 0; i < keys.length ; i++){
      await Storage.get({key: "" + i}).then(data => {
        if(data){
          // Existiert
        } else {
          todo.id = i;
        }
      });
      if(todo.id){
        break;
      }
    }

    return new Promise((resolve, reject) => {
      Storage.set({
        key: "" + todo.id,
        value: JSON.stringify(todo),
      }).then(() => {
          resolve(true);
        }).catch(e => {
          reject(e);
        });
    });

  }

  async getTodo(id: number): Promise<Todo>{
    let item = await Storage.get({ key: "" + id });
    item = JSON.parse(item.value);
    return new Todo().deserialize(item);
  }

  async removeTodo (id: number) {
    await Storage.remove({ key: "" + id });
  };

  setPasswort(passwort: string): Promise<any>{
    return new Promise((resolve, reject) => {
    Storage.set({
      key: "passwort", 
      value: passwort})
      .then(() => {
        resolve(true);
      }).catch(e => {
        reject(e);
      });
    });
  }

  async getPasswort(){
    return await Storage.get({ key: 'passwort' });
  }

  async removePasswort () {
    await Storage.remove({ key: "passwort" });
  };

}
