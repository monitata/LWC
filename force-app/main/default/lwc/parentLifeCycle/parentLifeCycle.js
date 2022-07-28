import { LightningElement } from 'lwc';

export default class ParentLifeCycle extends LightningElement {


    constructor()
    {
        super()
       
        alert('parent constructor called')
    }

connectedCallback()
{
   
    alert('parent connected callback called')
}

renderedCallback()
{
   
    
    alert('parent renderedcallback gets called')
}
}