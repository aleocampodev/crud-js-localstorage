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


forms.addEventListener('submit', (e) => {
    e.preventDefault();
    let activityUI = document.querySelector('#activity').value
    console.log(activityUI);
})

