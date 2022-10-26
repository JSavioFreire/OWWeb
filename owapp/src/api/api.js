export default function ApiOw2(){


    const fetchApi = ()=>{
        const url = 'https://overwatch-hero-api.herokuapp.com/api/v1/heroes'
    
    fetch(url)
        .then(response => response.json())
        .then(apiow => {
            console.log(apiow)
        })
    }
    fetchApi()    
    return(
        <div>

        </div>
    )
}

