const user = {id: 1, name: 'John Doe', job: 'Software Engineer'};
const stringified = JSON.stringify(user);
/*
ai json stringify diya kuno object er bitora
jai thak na keno se setika double("") kutetion er bitora niya asha mane string kora dei
*/
// console.log(stringified);

const shop = {
    owner: 'alia',
    address: {
        street: 'kochukhet boot er goli',
        city: 'rambir',
        country: 'BD',
    },
    products: ['laptop', 'keyboard', 'mouse', 'monitor'],
    revenue: 1000,
    isOpen: true,
    isNew: false
}
// console.log(shop);
const json = JSON.stringify(shop);
console.log(json);

/* 
JSON.stringify diya jemon kuno object ke string baniya fela jai
 thik tar ulta tao kora jai JSON.parse diya,,mane kuno rupantorito string ke abr tar ager jaigai mane 
 object kora jai JSON.parse diya..

*/

const parsed = JSON.parse(json);
console.log(parsed);
