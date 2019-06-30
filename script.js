console.log('Hello World');

async function get Data() {
    const carsDataReq = await fetch('https://storage.googleapis.com/tfjs-tutorials/carsData.json');
    const carsData = await carsDataReq.json();
    const cleaned = carsData.map(car => ({
        mpg: car.Miles_per_Gallon,
        hoursepower: car.Horsepower,
    }))
    .filter(car => (car.mpg != null && car.hoursepower != null ));

    return cleaned;
}




async function run() {
// Load and plot the original input data that we are going to train
const data = await getData();
const values = data.map(d => ({
    x: d.Horsepower,
    y: d.mpg
}))   
}