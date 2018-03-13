import * as dataModule from './dataModule.js'
import * as UIModule from './UIModule.js'

      

    // const onErrorHandler = (response) => {
    //     alert(UIModule.status.ERROR);
    // }

    const onSuccessHandler = (response) => {   
        console.log(response);     
        let dataResponse = dataModule.adaptShowsResponse(response, 50);
        UIModule.createMainEverything(dataResponse);
   }


    const liveSearch = () => {
        let searchValue = $(UIModule.UISelectors.checkSearch);
        fetch(`http://api.tvmaze.com/search/shows?q=${searchValue.val()}`)  
        .then(response => response.json())
        .then(response => onSuccessSearchHandler(response), response => onErrorSearchHandler(response)) 
    }

    const onErrorSearchHandler = () => {
         alert(UIModule.status.ERROR);
    }

    const onSuccessSearchHandler = ((response) => {

        
        let marker = ''; 
        return (response) => { 
            if (JSON.stringify(response) != marker) {
                const dataResponse = dataModule.adaptShowsResponse(response, 10);
                UIModule.createDropDown(dataResponse);
            }
            marker = JSON.stringify(response);
        }
    })()    
    
    const setAndClear = (() => {
        let interval;
        $(UIModule.UISelectors.checkSearch)[0].addEventListener('focus', () => {
            interval = setInterval(liveSearch, 1000);
        })
        $(UIModule.UISelectors.checkSearch)[0].addEventListener('blur', () => {
            clearInterval(interval);
        })
    })()

    fetch('http://api.tvmaze.com/shows')
        .then(response => {
            console.log(response); 
            const resp = response.json();
            console.log(resp);
            return resp;
        })
        .then(response => onSuccessHandler(response), response => onErrorHandler(response))
