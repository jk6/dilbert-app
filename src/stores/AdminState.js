import { observable } from 'mobx';

class Admin {    
    @observable edit = false;
    @observable user = 'derp';
    @observable pass = '123';
    
    checkCred (user, pass){
         if (this.edit == false){
            if (this.user == user && this.pass == pass){
                this.edit = true;
            }
        }
        else {
            this.edit = false;
        }
    }
}

export default new Admin();

/*const Admin = observable({    
    edit: false,
    user: 'derp',
    pass: '123'
});
Admin.checkCred = function (user, pass){
    if (this.edit == false){
        if (this.user == user && this.pass == pass){
            this.edit = true;
        }
    }
    else {
        this.edit = false;
    }
    
}

export default Admin;*/
