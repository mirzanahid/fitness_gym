const addToLocal = (id) => {

    let exercises = {}

    const quantity = exercises[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        exercises[id] = newQuantity;
    }
    else {
        quantity[id] = 1;
    }
 
    localStorage.setItem('exercises-details', JSON.stringify(exercises));
}

const getFromLocal = ()=>{
    let exercises = {};

    const exerciseStored = localStorage.getItem('exercises-details');
    if(exerciseStored){
        exercises = JSON.parse(exerciseStored);
    }
    return exercises;

}


export {addToLocal, getFromLocal}