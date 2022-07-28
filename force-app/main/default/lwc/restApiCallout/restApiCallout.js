import { LightningElement } from 'lwc';
const BOOK_URL='https://www.googleapis.com/books/v1/volumes?q='

export default class RestApiCallOut extends LightningElement {

    query='wings'
    books

    connectedCallback()
    {
        this.fetchData()
    }

    fetchData()
    {
        fetch(BOOK_URL+this.query)
        .then(response=>response.json())
        .then(data=>{
            this.books=data
        })
        .catch(error=>console.log(error))
    }

    fetchHandler(event)
    {
        this.query=event.target.value
        this.fetchData()
    }
}