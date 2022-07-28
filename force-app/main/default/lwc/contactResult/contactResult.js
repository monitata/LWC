import { LightningElement } from 'lwc';
import getContacts from '@salesforce/apex/ContactDisplay.getContacts';


export default class ContactResult extends LightningElement {
contacts

retrieveContact()
{
    alert()
    //Imperative call to apex method. Promoise object is returned
    //Promise.resolve or Reject
      getContacts()
      .then((results)=> {this.contacts=results})
      .catch((error)=>{});
}


}