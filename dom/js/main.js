// Grabbing an element from the Document
console.log(document.getElementById('test'))
// Store html elements inside of a variable
let hello = document.getElementById('test')
// console.log(hello)

// Target the button we just created
let color_button = document.getElementById('color-button')

// Create a color change function for h1 with Hello World as innertext
let colorChange = () =>{
    let header_text = document.getElementsByTagName('h1')[0].innerHTML;
    if(header_text == 'Hello World!'){
       document.getElementsByTagName('h1')[0].className = 'color-change'
    }
};

// Change Text via button click by adding a click listener to our button
color_button.addEventListener('click', colorChange)

// Creating a new button inside of the js file using createElement
let button = document.createElement('button')
// button = <button></button>

// adding innerHTML
button.innerHTML = 'I am alive!!!'
// button = <button>I am alive!!!</button>

// grabbing div and appending button
let test_div = document.getElementsByClassName('testing')[0];
console.log(test_div)
test_div.append(button)

// Creating an element that will display when our newest button is clicked on
let button_display = document.createElement('h2');
// button_display = <h2></h2>

// add another event listener
button.addEventListener('click', () => {
    button_display.innerHTML = 'Here is some more cool JavaScript!';
    //button_display = <h2>Here is some more cool JavaScript!</h2>
    document.body.append(button_display)
})

// Grabing form and some form data from my submit event
let form = document.querySelector('#testDataForm')
// console.log(form)

// Add event listener for submit Button
form.addEventListener('submit', (event) => {
    event.preventDefault()
    let query_first = document.querySelector('#first-name');
    let query_last = document.querySelector('#last-name');
    console.log(`This is the data I got from the User: ${query_first.value}, ${query_last.value}`)
    // Can also get sumissions from submit event object
    // This is deprecated AKA soon to be unsupported -- browsers may interpret certain events a bit differently than others
    console.log(event)
    let first_name = event.path[0][0].value;
    let last_name = event.path[0][1].value;
    console.log(`Got this from the event -- ${first_name} ${last_name}`)
})



