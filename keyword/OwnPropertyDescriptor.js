// const piValue = Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(piValue);

const Khana = {
    name: 'Panir Khopta',
    price: 150,
    available: 'available hai',

    orderdish: () => {
        dishAvailable = true;
    }
}
console.log( Object.getOwnPropertyDescriptor(Khana, "name"));

Object.defineProperty(Khana,"name",
    {
        writable: false,
        enumerable: false
    }
)

for (let [key,value] of Object.entries(Khana)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
}
