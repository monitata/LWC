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
 

export default class fetchAccount extends NavigationMixin(LightningElement) {
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
    handleRowAction(event)
    {
          const actionName=event.detail.action.name
          const row=event.detail.row
 
          switch(actionName)
          {
              case 'view':
                  this[NavigationMixin.Navigate]({
                      type:'standard__recordPage',
                      attributes:{
                          recordId:row.Id,
                          actionName:'view'
                      }
                  })
                  break;
 
                  case 'delete':
                     //  alert(row.Id);
                     
                       const recordId = row.Id
                 
           deleteRecord(recordId)
           .then(() => {
               this.dispatchEvent(
                   new ShowToastEvent({
                       title: 'Success',
                       message: 'Record deleted',
                       variant: 'success'
                   })
               );
               
               
           })
           .catch(error => {
               this.dispatchEvent(
                   new ShowToastEvent({
                       title: 'Error deleting record',
                       message: error.body.message,
                       variant: 'error'
                   })
               );
           });
                       
                   break;
              
 
              case 'edit':
                  this[NavigationMixin.Navigate]({
                      type:'standard__recordPage',
                      attributes:{
                          recordId:row.Id,
                          objectApiName:'Account',
                          actionName:'edit'
                      }
                  })
                  break;
 
                  default:
          }
    }
}