import { LightningElement,wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountDataController.getAccounts';
import {NavigationMixin} from 'lightning/navigation'
import {ShowToastEvent} from 'lightning/platformShowToastEvent'
import { deleteRecord } from 'lightning/uiRecordApi';

const actions=[
   {label:'View',name:'view'},
   {label:'Edit',name:'edit'},
   {label:'Delete',name:'delete'}

]

const columns=[
    {label:'Name',fieldName:'Name'},
    {label:'Account Number',fieldName:'AccountNumber'},
    {label:'Account Site',fieldName:'Site'},
    {label:'Phone',fieldName:'Phone'},
    {
        type:'action',
        typeAttributes:{rowActions:actions}
    }
]


export default class FetchAccount2 extends LightningElement {
    accountList
    error
    columns=columns
 
    @wire(getAccounts)
    wireAccount({error,data}){
        if(data)
        {
            this.accountList=data
            this.error=undefined
        }
        else if(error)
        {
            this.error=error
            this.accountList=undefined
        }
    }
}