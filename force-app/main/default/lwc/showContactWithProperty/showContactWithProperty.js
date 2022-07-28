import { LightningElement,wire } from 'lwc';
import getContacts from '@salesforce/apex/ContactDisplay.getContacts'


export default class ShowContactWithProperty extends LightningElement {

@wire(getContacts)
contacts            //contact.data will store the refrence of list data

}