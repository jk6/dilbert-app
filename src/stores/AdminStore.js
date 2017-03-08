import { observable, action } from 'mobx';
import { hashHistory } from 'react-router';

class AdminStore {    
    @observable edit = false;
    @observable user = 'derp';
    @observable pass = '123';
    
    @action checkCred (user, pass){
         if (this.edit == false){
            if (this.user == user && this.pass == pass){
                this.edit = true;
            }
        }
        else {
            this.edit = false;
        }
    }
    checkAuth (){
        if (!this.edit){
            hashHistory.push('/');
        }
    }
}

export default new AdminStore();
