import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class RegisterService {
	data: any=[];
	
	constructor() {
	}
	getAll() {
        var userLists = localStorage.getItem('userLists');
        if(userLists !==null && userLists && userLists.length>0){
            userLists = JSON.parse(userLists);
        }
        return userLists
    }

    register(register) {        
        var userLists = localStorage.getItem('userLists');
        if(userLists !==null && userLists && userLists.length>0){
            this.data = JSON.parse(userLists);
             this.data.push(register);    
            localStorage.setItem('userLists', JSON.stringify(this.data));           
           
        }else{
            this.data.push(register);
            localStorage.setItem('userLists', JSON.stringify(this.data));
        }
       
        return true;
    }

    
}
