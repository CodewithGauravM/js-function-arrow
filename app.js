console.log("This is External js");

// variables in javascript
var name = "Gaurav"
console.log(name);

let companyName = "Ennova"
console.log(companyName);

const city = "sangli"
console.log(city);

// data types
// primitive or value type

// String
var fullName = "Gaurav mangale"
console.log(fullName);

// Number
var age = 23
console.log(age);

// Boolean
var isDay = true
console.log(isDay);

// float or double
var pi = 3.14
console.log(pi);

// non primitive referance tag
// Array
var student = ["Gaurav", "Aishwarya"]
console.log(student[0]);

// Object
var movie = { title: "boss", year: 2009 }
console.log(movie.title);

var product = [{ name: "polo t-shirt", catagary: "shirt", price: 400 }, { name: "night pant", catagary: "pant", price: 350 }]
console.log(product[0].name);

// typeof
console.log(typeof (product[0].price));



// function
// 6 type of functions

// function expression
function demo() {
    console.log("this is demo");
}
demo()

function add(a, b) {
    console.log("the addition is", a + b);
}
add(3, 6)
add(6, 0)

function sub(a, b) {
    console.log("The substraction is", a - b);
}
sub(6, 3)

add("2", "2")
sub("3", "2")

// function Statement
var a = function b() {
    console.log("This is fuction b");
}
a()

// anonomous function
var x = function () {
    console.log("This function is z");
}
x()

//  call back and frist class function
// a fuction go as parameter to another function is known as 

function demo1(callBack) {
    console.log("demo1");
    callBack()
}
function demo2() {
    console.log("demo2");
}

demo1(demo2)

demo1(function () {
    console.log("This demo3");

})

demo1(() => {
    console.log("this is demo 5");
})

// arrow function create 2016
var demo4 = () => {
    console.log("This is demo 4");
}
demo4()

let products = [{ id: 2, name: "javabook", catagary: "books", price: 200, quantity: 1000, city: ["sangli", "miraj", "kupwad"] }, { id: 3, name: "cssbook", catagary: "books", price: 400, quantity: 500, city: ["pune", "satara", "kolhapur"] }]

console.log(products[0].city[0])
console.log(products[1].price);

const users = [
    {
        "id": 1,
        "name": "Leanne Graham", "username": "Bret", "email": "Sincere@april.biz",
        "address": { "street": "Kulas Light", "suite": "Apt. 556", "city": "Gwenborough", "zipcode": "92998-3874", "geo": { "lat": "-37.3159", "lng": "81.1496" } },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": { "name": "Romaguera-Crona", "catchPhrase": "Multi-layered client-server neural-net", "bs": "harness real-time e-markets" }
    },
    {
        "id": 2, "name": "Ervin Howell", "username": "Antonette", "email": "Shanna@melissa.tv", "address": { "street": "Victor Plains", "suite": "Suite 879", "city": "Wisokyburgh", "zipcode": "90566-7771", "geo": { "lat": "-43.9509", "lng": "-34.4618" } },
        "phone": "010-692-6593 x09125", "website": "anastasia.net", "company": { "name": "Deckow-Crist", "catchPhrase": "Proactive didactic contingency", "bs": "synergize scalable supply-chains" }
    },
    {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "address": {
            "street": "Douglas Extension",
            "suite": "Suite 847",
            "city": "McKenziehaven",
            "zipcode": "59590-4157",
            "geo": {
                "lat": "-68.6102",
                "lng": "-47.0653"
            }
        },
        "phone": "1-463-123-4447",
        "website": "ramiro.info",
        "company": {
            "name": "Romaguera-Jacobson",
            "catchPhrase": "Face to face bifurcated interface",
            "bs": "e-enable strategic applications"
        }
    },
    {
        "id": 4,
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org",
        "address": {
            "street": "Hoeger Mall",
            "suite": "Apt. 692",
            "city": "South Elvis",
            "zipcode": "53919-4257",
            "geo": {
                "lat": "29.4572",
                "lng": "-164.2990"
            }
        },
        "phone": "493-170-9623 x156",
        "website": "kale.biz",
        "company": {
            "name": "Robel-Corkery",
            "catchPhrase": "Multi-tiered zero tolerance productivity",
            "bs": "transition cutting-edge web services"
        }
    },
    {
        "id": 5,
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
        "address": {
            "street": "Skiles Walks",
            "suite": "Suite 351",
            "city": "Roscoeview",
            "zipcode": "33263",
            "geo": {
                "lat": "-31.8129",
                "lng": "62.5342"
            }
        },
        "phone": "(254)954-1289",
        "website": "demarco.info",
        "company": {
            "name": "Keebler LLC",
            "catchPhrase": "User-centric fault-tolerant solution",
            "bs": "revolutionize end-to-end systems"
        }
    },
    {
        "id": 6,
        "name": "Mrs. Dennis Schulist",
        "username": "Leopoldo_Corkery",
        "email": "Karley_Dach@jasper.info",
        "address": {
            "street": "Norberto Crossing",
            "suite": "Apt. 950",
            "city": "South Christy",
            "zipcode": "23505-1337",
            "geo": {
                "lat": "-71.4197",
                "lng": "71.7478"
            }
        },
        "phone": "1-477-935-8478 x6430",
        "website": "ola.org",
        "company": {
            "name": "Considine-Lockman",
            "catchPhrase": "Synchronised bottom-line interface",
            "bs": "e-enable innovative applications"
        }
    },
    {
        "id": 7,
        "name": "Kurtis Weissnat",
        "username": "Elwyn.Skiles",
        "email": "Telly.Hoeger@billy.biz",
        "address": {
            "street": "Rex Trail",
            "suite": "Suite 280",
            "city": "Howemouth",
            "zipcode": "58804-1099",
            "geo": {
                "lat": "24.8918",
                "lng": "21.8984"
            }
        },
        "phone": "210.067.6132",
        "website": "elvis.io",
        "company": {
            "name": "Johns Group",
            "catchPhrase": "Configurable multimedia task-force",
            "bs": "generate enterprise e-tailers"
        }
    },
    {
        "id": 8,
        "name": "Nicholas Runolfsdottir V",
        "username": "Maxime_Nienow",
        "email": "Sherwood@rosamond.me",
        "address": {
            "street": "Ellsworth Summit",
            "suite": "Suite 729",
            "city": "Aliyaview",
            "zipcode": "45169",
            "geo": {
                "lat": "-14.3990",
                "lng": "-120.7677"
            }
        },
        "phone": "586.493.6943 x140",
        "website": "jacynthe.com",
        "company": {
            "name": "Abernathy Group",
            "catchPhrase": "Implemented secondary concept",
            "bs": "e-enable extensible e-tailers"
        }
    },
    {
        "id": 9,
        "name": "Glenna Reichert",
        "username": "Delphine",
        "email": "Chaim_McDermott@dana.io",
        "address": {
            "street": "Dayna Park",
            "suite": "Suite 449",
            "city": "Bartholomebury",
            "zipcode": "76495-3109",
            "geo": {
                "lat": "24.6463",
                "lng": "-168.8889"
            }
        },
        "phone": "(775)976-6794 x41206",
        "website": "conrad.com",
        "company": {
            "name": "Yost and Sons",
            "catchPhrase": "Switchable contextually-based project",
            "bs": "aggregate real-time technologies"
        }
    },
    {"id": 10, "name": "Clementina DuBuque", "username": "Moriah.Stanton", "email": "Rey.Padberg@karina.biz",
        "address": {"street": "Kattie Turnpike", "suite": "Suite 198", "city": "Lebsackbury", "zipcode": "31428-2261", "geo": { "lat": "-38.2386", "lng": "57.2232" }}, "phone": "024-648-3804", "website": "ambrose.net", "company": { "name": "Hoeger LLC", "catchPhrase": "Centralized empowering task-force", "bs": "target end-to-end models" }
    }
]

// id:1
const street1 = users[0].address.street;
console.log(street1);

const lat1 = users[0].address.geo.lat;
console.log(lat1);

const companyName1 = users[0].company.name
console.log(companyName1);

// id:2
const lat2 = users[1].address.geo.lat;
console.log(lat2);

const ing2 = users[1].address.geo.lng;
console.log(ing2);

const companyName2 = users[1].company.name;
console.log(companyName2);

const companyName3 = users[1].company.catchPhrase;
console.log(companyName3);

// id:3
console.log(users[9].name);
console.log(users[9].username);
console.log(users[9].email);
console.log(users[9].address.street);
console.log(users[9].address.suite);
console.log(users[9].address.street);
console.log(users[9].address.city);
console.log(users[9].address.zipcode);
console.log(users[9].address.geo.lat);
console.log(users[9].address.geo.lng);
console.log(users[9].phone);
console.log(users[9].website);
console.log(users[9].company.name);
console.log(users[9].company.catchPhrase);
console.log(users[9].company.bs);

























