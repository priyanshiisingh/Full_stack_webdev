let car = {
    Name: 'class c',
    manufacturer: 'mercedes',
    print: () => {
        console.log(this)
        console.log(`this is andnkjsa ${car.Name} asnkjdfskhf ${car.manufacturer}`)
    }
};

car.print()
console.log(car)
console.log(Object)
console.log(Object.values(car))
console.log(Object.keys(car))
    //