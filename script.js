const  firstname = document.getElementById('fname');
const  lastname = document.getElementById('lname');
const  mark = document.getElementById('marks');
const  form = document.getElementById('form');
const tbody =document.getElementById('tbody');
// const= form =document.getElementById('form');
const addButton =document.getElementById('button');


const learners =[];
function addStudent() {    
function reset ()

    const learner = {firstname: firstname.value, lastname: lastname.value, mark: mark.value};
    learners.push(learner);

    //create table row element
    const tr = document.createElement('tr');

    // create table data elements for firstname, lastname and mark
    const fTd = document.createElement('td');
    const lTd = document.createElement('td');
    const mTd = document.createElement('td');
    
    
    // create table data element for del

    // button 
    // add button textcontent
    // add button to delete td


    // assign values from form to the table data nodes
    fTd.textContent = firstname.value;    
    lTd.textContent = lastname.value;
    mTd.textContent = mark.value;


    // add the table data nodes to the table row
    tr.appendChild(fTd);
    tr.appendChild(lTd);
    tr.appendChild(mTd);
    

    // add the table row to the tale
    tbody.appendChild(tr);
    form.reset()
}
addButton.addEventListener('click',addStudent)
addButton.addEventListener('click',deleteStudent)                                                                                                                                                                                                             

    // function renderTable(){

    // } 