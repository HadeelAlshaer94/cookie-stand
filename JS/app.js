'use strict'




let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']


function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


let shops = [];

function Shop(location, minCustomers, maxCustomers, avgCookies) {
    this.locationName = location;
    this.minCustomers = minCustomers;
    this.maxCustomers = maxCustomers;
    this.avgCookies = avgCookies;
    this.totalCookiesPerDay = 0;
    this.customersEachHours = [];
    this.cookiesEachHours = [];

    // console.log(this);

    shops.push(this);

}


Shop.prototype.calcCustomersEachHours = function () {

    for (let i = 0; i < hours.length; i++) {
        this.customersEachHours.push(random(this.minCustomers, this.maxCustomers));

    }
}

let totals2 = 0;
Shop.prototype.calcCookiesEachHours = function () {
    for (let i = 0; i < hours.length; i++) {
        this.cookiesEachHours.push(Math.floor(this.customersEachHours[i] * this.avgCookies));

        this.totalCookiesPerDay += this.cookiesEachHours[i];
        totals2 += this.cookiesEachHours[i];
    }
}


//console.log('shooops', shops);

let seattle = new Shop('Seattle', 23, 65, 6.3)
let tokyo = new Shop('Tokyo', 3, 24, 1.2);
let dubai = new Shop('Dubai', 11, 38, 3.7);
let paris = new Shop('Paris', 20, 38, 2.3);
let lima = new Shop('Lima', 2, 16, 4.6);


let parent = document.getElementById('parent');
console.log(parent);


// create table
let table = document.createElement('table');
parent.appendChild(table);


// create header
function makeheader() {
    let headerRow = document.createElement('tr');
    table.appendChild(headerRow);

    let firstTh = document.createElement('th');

    headerRow.appendChild(firstTh);
    firstTh.textContent = 'Name';

    for (let i = 0; i < hours.length; i++) {
        let hoursTh = document.createElement('th');
        headerRow.appendChild(hoursTh);
        hoursTh.textContent = hours[i];
    }

    let lastTh = document.createElement('th');
    headerRow.appendChild(lastTh);
    lastTh.textContent = 'Daily Location Total'
}


// render function

Shop.prototype.reder = function () {
    let dataRow = document.createElement('tr');
    table.appendChild(dataRow);
    let nameTd = document.createElement('td');
    dataRow.appendChild(nameTd);
    nameTd.textContent = this.locationName;

    for (let i = 0; i < hours.length; i++) {
        let cookiesTd = document.createElement('td');
        dataRow.appendChild(cookiesTd);
        cookiesTd.textContent = this.cookiesEachHours[i];

    }
    let totalTd = document.createElement('td');
    dataRow.appendChild(totalTd);
    totalTd.textContent = this.totalCookiesPerDay;

}


// create footer
function makeFooter() {
    let footerRow = document.createElement('tr');
    table.appendChild(footerRow);
    let firstTh = document.createElement('th');
    footerRow.appendChild(firstTh);
    firstTh.textContent = 'Totals';

let totalOfTotals = 0;

    for (let i = 0; i < hours.length; i++) {
        console.log(hours[i]);
        let totalForEachHour = 0;
        for (let j = 0; j < shops.length; j++) {
            totalForEachHour += shops[j];
            cookiesEachHours[i];

            totalOfTotals += shops[j];
            cookiesEachHours[i];
        }


        console.log(totalForEachHour);
        console.log('totals2', totalOfTotals)
        let footerTh = document.createElement('th');
        footerRow.appendChild(footerTh);
        footerTh.textContent = totalForEachHour;


    }

}





console.log(shops);


makeheader();
for (let i = 0; i < shops.length; i++) {
    // console.log(shops[i]);
    shops[i].calcCustomersEachHours();
    shops[i].calcCookiesEachHours();
    shops[i].reder();
    //shops[i].makeFooter();

}

makeFooter();
console.log(totals2);







// let seattle = {
//     location: 'seattle',
//     minCustomers: 23,
//     maxCustomers: 65,
//     avgCookies: 6.3,
//     customersEachHours: [],
//     cookiesEachHours: [],

//     clcCustomersEachHours: function () {

//         for (let i = 0; i < hours.length; i++) {
//             this.customersEachHours.push(random(this.minCustomers, this.maxCustomers))

//         }

//     },



//     calcCookiesEachHours: function () {
//         for (let i = 0; i < hours.length; i++) {
//             this.cookiesEachHours.push(Math.floor(this.customersEachHours[i] * this.avgCookies));



//         }



//     },


//     render: function () {
//         let parent = document.getElementById('parent');
//         console.log(parent);

//         let nameElement = document.createElement('h2');
//         console.log(nameElement);
//         parent.appendChild(nameElement);

//         nameElement.textContent = this.location;

//         let unorderdlist = document.createElement('ul');

//         parent.appendChild(unorderdlist);

//         for (let i = 0; i < hours.length; i++) {
//             let liElement = document.createElement('li');
//             unorderdlist.appendChild(liElement);
//             liElement.textContent = hours[i];

//         }

//     }



// }


// // console.log(seattle.minCustomers);

// seattle.clcCustomersEachHours();

// // console.log(customersEachHours);

// seattle.calcCookiesEachHours();

// seattle.render();