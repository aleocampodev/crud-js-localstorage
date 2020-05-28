const forms = document.querySelector('#forms');
const listActivity = document. querySelector('#listActivity');
let arrayActivity = [];
let item = {
    actividad:'',
    estado:false
}

const CreateItem = (activity) => {
    let item = {
        activity:activity,
        state:false
    }

    arrayActivity.push(item)

    return item
}

const saveDB = (activity) => {

    localStorage.setItem('routine',JSON.stringify(arrayActivity))

}

const PaintDB = () => {
    listActivity.innerHTML = '';
    arrayActivity = JSON.parse(localStorage.getItem('routine'));
    console.log(arrayActivity)
}


 forms.addEventListener('submit', (e) => {
    e.preventDefault();
    let activityUI = document.querySelector('#activity').value
    console.log(activityUI);

    CreateItem(activityUI);

    saveDB()

    forms.reset();

})


document.addEventListener('DOMContentLoaded', PaintDB)