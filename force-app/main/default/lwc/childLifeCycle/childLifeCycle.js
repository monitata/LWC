import { LightningElement } from 'lwc';

export default class childLifeCycle extends LightningElement {


    constructor()
    {
        super()
       
        alert('child constructor called')
    }

connectedCallback()
{
   
    alert('child connected callback called')
}

renderedCallback()
{
   
    
    alert('child renderedcallback gets called')
}
}