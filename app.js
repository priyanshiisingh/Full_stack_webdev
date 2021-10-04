let car = {
    Name: 'class c',
    manufacturer: 'mercedes',
    print: () => {
        console.log(this)
        console.log(`this is andnkjsa ${this.Name} asnkjdfskhf ${this.manufacturer}`)
    }
};

car.print()