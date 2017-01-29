import { observable } from 'mobx';

class Admin {    
    @observable name = '';
    @observable edit = false;
    @observable user = 'derp';
    @observable pass = '123';

    changeName (newName){
        this.name = newName;
    }    
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
    name: '',
    edit: false,
    user: 'derp',
    pass: '123'
});

Admin.changeName = function (newName){
        this.name = newName;
    }
Admin.addName = function (name){
    this.data.push(name);        
}
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
