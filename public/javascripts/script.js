const searchBar = document.querySelector('#searchBar');
const listItems = document.querySelectorAll('#list-item');

searchBar.addEventListener('input', filterList);

function filterList() {
    const searchValue = searchBar.value.toLowerCase();
    

    listItems.forEach((item) => {
        let text = item.textContent;
        if(text.toLowerCase().includes(searchValue)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
}
