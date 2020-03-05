

import { LightningElement, wire, track } from 'lwc';
import caseRecords from '@salesforce/apex/AccountHelper.getAccountLocations';

//import JQUERY_UI_css from '@salesforce/resourceUrl/Jquery_UI_CSS';
import JQUERY from '@salesforce/resourceUrl/jQuery';
import { loadScript, loadStyle } from 'lightning/platformResourceLoader';


export default class Drag_Table_LWC extends LightningElement {
    @track caseList;
    @track loaded = false;
    @wire(caseRecords)
    wiredCases({data, error}){
        if(data){
            
            this.caseList = data;        
            this.error = undefined;    
        }
        else if (error) {
            this.error = error;
            this.accounts = undefined;
        }
    }
    renderedCallback() {
        
        if(this.loaded) return true;
       Promise.all([
           loadScript(this,JQUERY)
         ])
         .then(() => { 
             alert('loded');
           console.log("loaded")
            var example1 = this.template.querySelector('tbody');
            alert(example1);
            new Sortable(example1, {
                animation: 150,
                ghostClass: 'blue-background-class'
            });
            this.loaded = true
        })
        .catch(error =>{
           console.log('test here ++++++++++',error.message);
        })

         
    }

}
