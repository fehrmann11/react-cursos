const buildCount = (i) => {
    //esta variable está en el alcance de la función por eso se ve afectada
    let count = i;
    const displayCount = () => {
        console.log(count++);
    }
    return displayCount;
}

const myCount = buildCount(1);
myCount();
myCount();
myCount();

const myOtherCount = buildCount(10);
myOtherCount();
myOtherCount();