'use strict';


// initials
let time = ['6am ', '7am ', '8am ', '9am ', '10am ', '11am ', '12am ', '1pm ', '2pm ', '3pm ', '4pm ', '5pm ', '6pm ', '7pm '];
let Locations = ['Seattle', 'Tokyo', 'Dubai', 'Paris', 'Lima'];
let minOpj = [23, 3, 11, 20, 2];
let maxOpj = [65, 24, 38, 38, 16];
let avgOpj = [6.3, 1.2, 3.7, 2.3, 4.6];
let locationOpj = [];
let totalofTotals = 0;


// constructor function
function Store(Locations, minOpj, maxOpj, avgOpj) {
    // Parameters
    this.Locations = Locations;
    this.Min = minOpj;
    this.Max = maxOpj;
    this.Avg = avgOpj;

    // storage
    this.custNum = [];
    this.cookiesNum = [];
    this.totalCookiesDaily = 0;
    this.hourTotal = [];
    locationOpj.push(this);
}


let Seattle = new Store(Locations[0], minOpj[0], maxOpj[0], avgOpj[0]);
let Tokyo = new Store(Locations[1], minOpj[1], maxOpj[1], avgOpj[1]);
let Dubai = new Store(Locations[2], minOpj[2], maxOpj[2], avgOpj[2]);
let Paris = new Store(Locations[3], minOpj[3], maxOpj[3], avgOpj[3]);
let Lima = new Store(Locations[4], minOpj[4], maxOpj[4], avgOpj[4]);



// random number of customers each hour each store
Store.prototype.RandomNumber = function () {
    for (let i = 0; i < time.length; i++) {
        this.custNum.push(Math.floor(Math.random() * (this.Max - this.Min + 1) + this.Min));
        
        // this.custNum.push(Math.floor(Math.random() * (this.Max - this.Min) + this.Min));
    }
};

// cookies total daily
Store.prototype.CookiesNumAvg = function () {
    for (let i = 0; i < this.custNum.length; i++) {
        this.cookiesNum.push(Math.ceil(this.custNum[i] * this.Avg));
        this.totalCookiesDaily += this.cookiesNum[i];
    }
};

// calling random generating numbers functions
for (let i = 0; i < locationOpj.length; i++) {
    locationOpj[i].RandomNumber();
    locationOpj[i].CookiesNumAvg();
};

//  drawing HTML
let table = document.getElementById('parent');

// Head
function tableHeader() {
    // creating
    let storeRow = document.createElement('tr');
    let thTime = document.createElement('th');

    // append
    table.appendChild(storeRow);
    storeRow.appendChild(thTime);

    thTime.textContent = 'Location Name';//first cell

    for (let i = 0; i < time.length; i++) {
        let th = document.createElement('th');
        storeRow.appendChild(th);
        th.textContent = time[i];
    }
    let thTot = document.createElement('th');
    storeRow.appendChild(thTot);
    thTot.textContent = 'Daily Total';

}

// Body
function tableBody() {
    for (let i = 0; i < Locations.length; i++) {
        // creating
        let storeRow = document.createElement('tr');
        let td = document.createElement('td');

        // append
        table.appendChild(storeRow);
        storeRow.appendChild(td);

        //Locations Column
        td.textContent = locationOpj[i].Locations;

        //Random values
        for (let x = 0; x < time.length; x++) {
            let td = document.createElement('td');
            storeRow.appendChild(td);
            td.textContent = locationOpj[i].cookiesNum[x];
        }
        let tdTot = document.createElement('td');
        storeRow.appendChild(tdTot);
        tdTot.textContent = locationOpj[i].totalCookiesDaily;
    }

}

// Footer
function tableEnd() {
    let storeRow = document.createElement('tr');
    table.appendChild(storeRow);
    let tdTotDay = document.createElement('td');
    storeRow.appendChild(tdTotDay);
    tdTotDay.textContent = 'Total';
    for (let i = 0; i < time.length; i++) {
        let hourlyTot = 0;
        for (let x = 0; x < locationOpj.length; x++) {
            hourlyTot += locationOpj[x].cookiesNum[i];
        }
        let tdTotDay = document.createElement('td');
        storeRow.appendChild(tdTotDay);
        tdTotDay.textContent = hourlyTot;
        totalofTotals += hourlyTot;
    }
    let totfin = document.createElement('td');
    storeRow.appendChild(totfin);
    totfin.textContent = totalofTotals;
}
// calling all functions
tableHeader();
tableBody();
tableEnd();




//Form
let form = document.getElementById('form');

// Handele Event
form.addEventListener('submit', createUserStore);

//reset table
function reset() {
    //reset
    totalofTotals = 0;
    table.textContent = '';
}

function createUserStore(event) {

    event.preventDefault();
    let locationName = event.target.location.value;
    let minCustomer = Number(event.target.minCustomer.value);
    let maxCustomer = Number(event.target.maxCustomer.value);
    let avgCustomer = Number(event.target.avgCustomer.value);
 
    //INSERTING user info
    Locations.push(locationName);
    minOpj.push(minCustomer);
    maxOpj.push(maxCustomer);
    avgOpj.push(avgCustomer);
    console.log(locationOpj.length);
    let userStore = new Store(locationName, minCustomer, maxCustomer, avgCustomer);
    reset();
    userStore.RandomNumber();
    userStore.CookiesNumAvg();
  
    //Rendering    
    tableHeader();
    tableBody();
    tableEnd();

}