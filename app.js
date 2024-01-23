function search() {
    let search = document.getElementById('text-search').value;

    let para = document.getElementById('para')

    search = search.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    let pattern = new RegExp(`${search}`,"gi");
    
    para.innerHTML = para.textContent.
    replace(pattern,match => `<mark>${match}</mark>`)

}