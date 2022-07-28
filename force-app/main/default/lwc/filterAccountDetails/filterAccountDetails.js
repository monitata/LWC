import { LightningElement,wire } from 'lwc';
import filterAccount from '@salesforce/apex/AccountDataController.filterAccount'

export default class FilterAccountDetails extends LightningElement {
selectedType=''
@wire(filterAccount,{type:'$selectedType'})
filterAccount


get typeOptions()
{
return[

{label:"Prospect", value:"Prospect"},
{label:"Customer - Direct", value:'Customer - Direct'},
{label:'Customer - Channel',value:'Customer - Channel'}]
}

typeHandler(event)
{

    this.selectedType=event.target.value
}}