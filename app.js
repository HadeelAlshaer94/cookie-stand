'use strict'




let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']


function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


let seattle = {
    location: 'seattle',
    minCustomers: 23,
    maxCustomers: 65,
    avgCookies: 6.3,
    customersEachHours: [],
    cookiesEachHours: [],

    clcCustomersEachHours: function () {

        for (let i = 0; i < hours.length; i++) {
            this.customersEachHours.push(random(this.minCustomers, this.maxCustomers))

        }

    },



    calcCookiesEachHours: function () {
        for (let i = 0; i < hours.length; i++) {
            this.cookiesEachHours.push(Math.floor(this.customersEachHours[i] * this.avgCookies));



        }



    },


    render: function () {
        let parent = document.getElementById('parent');
        console.log(parent);

        let nameElement = document.createElement('h2');
        console.log(nameElement);
        parent.appendChild(nameElement);

        nameElement.textContent = this.location;

        let unorderdlist = document.createElement('ul');

        parent.appendChild(unorderdlist);

        for (let i = 0; i < hours.length; i++) {
            let liElement = document.createElement('li');
unorderdlist.appendChild(liElement);
liElement.textContent = hours[i];

        }

    }



}


// console.log(seattle.minCustomers);

seattle.clcCustomersEachHours();

// console.log(customersEachHours);

seattle.calcCookiesEachHours();

seattle.render();