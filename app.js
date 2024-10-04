const form = document.querySelector("#SearchForm")
form.addEventListener('submit',async function(e){
    e.preventDefault();
    const q= form.elements.Search.value;
    const resp = await axios.get(`https://api.tvmaze.com/search/shows`, {params : {q: q}});
    makeImages(resp.data)
    form.elements.Search.value = '';
})

const makeImages = (shows) =>{
    for(let result of shows){
        if(result.show.image){
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            document.body.append(img);
        }
    }
}