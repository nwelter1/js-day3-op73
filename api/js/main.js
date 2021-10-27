const getData = async () =>{
    let response = await axios.get('https://my-json-server.typicode.com/CodingTemple/Power-Rangers-API-Json/rangers')
    console.log(response.data)
    return response.data
};

// store any class / id selectors in an object to quickly reference later on
const DOM_ELEMENTS = {
    list: '.ranger-list'
};


// Create HTML to populate the ranger list with bootstrap list-item
const createList = (id, name) =>{
    let html = `<a href="#" class="list-group-item list-group-item-action list-group-item-light" id="${id}">${name}</a>`;
    document.querySelector(DOM_ELEMENTS.list).insertAdjacentHTML('beforeend', html)
};

// Function to Load Data and Display the list
const loadData = async() =>{
    const power_rangers = await getData();

    // loop through array and create list items forEach ranger
    power_rangers.forEach(ranger => createList(ranger.id, ranger.name))
};

// Function to Clear all data from .ranger-list
const clearData = () =>{
    document.querySelector(DOM_ELEMENTS.list).innerHTML = '';
}












