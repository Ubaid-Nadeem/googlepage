let search_btn = document.getElementById('search_btn');
let search_value = document.getElementById('search_value');


search_value.addEventListener('keydown', (e)=>{
    if(e.key === 'Enter'){
        console.log(e.key)
        window.location.href = `https://www.google.com/search?q=${search_value.value}`
    }
})
function Search() {
    window.location.href = `https://www.google.com/search?q=${search_value.value}`
}

