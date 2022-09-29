const addToLocal = (value) => {
    let exercises = {}
    exercises['breaks'] = value;
    localStorage.setItem('exercises-details', JSON.stringify(exercises));
}

const getFromLocal = () => {
    let exercises = {};
    const exerciseStored = localStorage.getItem('exercises-details');
    if (exerciseStored) {
        exercises = JSON.parse(exerciseStored);
    }
    else {
        return 0
    }
    return exercises.breaks;
}
export { addToLocal, getFromLocal }