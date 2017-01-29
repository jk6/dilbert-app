import { observable } from 'mobx';
import axios from 'axios';

const appState = observable({
  data: [],
  selectedPerson: {},
  name: 'Dilbert',
  edit: false
});

appState.getData = function (){
  axios.get('data.json')
        .then(response => this.data = response.data)
        .catch(err => console.log(err.toString()))  
}

appState.getSelectedPerson = function (id){
  this.data.filter(person => person.id == id)    
    .map(person => Object.assign(this.selectedPerson, person))
}       

appState.changeName = function (newName){
  this.name = newName;
}
appState.addName = function (name){
  //alert(name);  
}
appState.changeEditState = function (){   
  this.edit = !this.edit; 
  //alert(this.edit);
}

appState.getData();

export default appState;