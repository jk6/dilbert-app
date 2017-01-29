import { observable } from 'mobx';
import axios from 'axios';

/*class Characters {
    @observable data = [];
    @observable selectedPerson = {};
    @observable newObj = {};        

    getData (){
        axios.get('data.json')
            .then(response => this.data = response.data)
            .catch(err => console.log(err.toString()))  
    }
    getSelectedPerson (id){
        this.data.filter(person => person.id == id)    
        .map(person => Object.assign(this.selectedPerson, person))
    }
    addCharacter (character){
        this.data.push(character);        
    }
    editCharacter = function (){
        this.data.filter(person => person.id == this.newObj.id)
            .map(person => Object.assign(person, this.newObj))
    }
}

export default new Characters();*/

const Characters = observable({
    data: [],    
    selectedPerson: {},
    newObj: {}
});

Characters.getData = function(){
    axios.get('data.json')
        .then(response => this.data = response.data)
        .catch(err => console.log(err.toString()))  
}
Characters.getSelectedPerson = function(id){
    this.data.filter(person => person.id == id)    
    .map(person => Object.assign(this.selectedPerson, person))
}
Characters.addCharacter = function(character){
    this.data.push(character);        
}
Characters.editCharacter = function (){
    this.data.filter(person => person.id == this.newObj.id)
        .map(person => Object.assign(person, this.newObj))
}

Characters.getData();

export default Characters;