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
    
    if(arrayActivity === null){
        arrayActivity = [];
    } else {
        arrayActivity.forEach(element =>{
            listActivity.innerHTML += `
            <div class="alert alert-success" role="alert">
                <span class="material-icons" clas="float-left mr-3">
                    accessibility
                </span>
                <b>${element.activity}</b> - ${element.state}
                <span class="float-right">
                    <span class="material-icons">
                        done_outline
                    </span>
                    <span class="material-icons">
                        delete_outline
                    </span>
                </span>
            </div>
            `
        })

        
    }
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