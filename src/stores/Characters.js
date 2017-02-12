import { observable, action } from 'mobx';
import axios from 'axios';

class Characters {
    @observable data = [];
    @observable selectedPerson = {};
    @observable newObj = {};        

    @action('load characters')
    loadCharacters (){
        axios.get('data.json')
            .then(response => this.data = response.data)
            .catch(err => console.log(err.toString()))  
    }
    @action('get selected character')
    getSelectedPerson (id){
        this.data.filter(person => person.id == id)    
        .map(person => Object.assign(this.selectedPerson, person))
    }
    @action('add character')
    addCharacter (character){
        this.data.push(character);        
    }
    @action('edit character')
    editCharacter (){
        this.data.filter(person => person.id == this.newObj.id)
            .map(person => Object.assign(person, this.newObj))

        this.newObj = {};
    }
}

export default new Characters();