import * as dataModule from './dataModule.js'
import * as UIModule from './UIModule.js'

        
    // --------------- single page code part

    
    const onSuccessSingleHandler = (response) => {
        console.log(response);
        const dataResponse = dataModule.adaptSingleResponse(response);        
        console.log(dataResponse);
        UIModule.createSingleShowPage(dataResponse);
    }
    
    const onErrorSingleHandler = () => {
        alert(UIModule.status.ERROR);
    }


    const setAndClear = (() => {
        let interval;
        $(UIModule.UISelectors.checkSearch)[0].addEventListener('focus', () => {
            interval = setInterval(liveSearch, 1000);
        })
        $(UIModule.UISelectors.checkSearch)[0].addEventListener('blur', () => {
            clearInterval(interval);
        })
    })()


    fetch(`http://api.tvmaze.com/shows/${dataModule.fetchID()}?embed[]=seasons&embed[]=episodes&embed[]=cast&embed[]=crew&embed[]=akas`)
    .then(response => response.json())
    .then(response => onSuccessSingleHandler(response), response => onSuccessSingleHandler(response),)
