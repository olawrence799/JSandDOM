// Get references to the tbody element, input field and button
var $tbody = document.querySelector('tbody');
var $dateInput = document.querySelector('#datetime');
var $cityInput = document.querySelector('#city');
var $stateInput = document.querySelector('#state');
var $countryInput = document.querySelector('#country');
var $shapeInput = document.querySelector('#shape');
var $searchBtn = document.querySelector('#search_date');
var $searchBtn_city = document.querySelector('#search_city');
var $searchBtn_state = document.querySelector('#search_state');
var $searchBtn_country = document.querySelector('#search_country');
var $searchBtn_shape = document.querySelector('#search_shape');
// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener('click', handleSearchButtonClick);
$searchBtn_city.addEventListener('click', handleSearchButtonClick_city);
$searchBtn_state.addEventListener('click', handleSearchButtonClick_state);
$searchBtn_country.addEventListener('click', handleSearchButtonClick_country);
$searchBtn_shape.addEventListener('click', handleSearchButtonClick_shape);
// Set filteredAddresses to addressData initially
// addressData comes from the addressData.js file
var filteredSightings = dataSet;
// renderTable renders the filteredAddresses to the tbody
function renderTable() {
  $tbody.innerHTML = '';
  for (var i = 0; i < filteredSightings.length; i++) {
    // Get get the current address object and its fields
    var datetime = filteredSightings[i];
    var fields = Object.keys(datetime);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // For every field in the address object, create a new cell at set its inner text to be the current value at the current address's field
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = datetime[field];
    }
  }
}
function handleSearchButtonClick() {
  // Format the user's search by removing leading and trailing whitespace, lowercase the string
  var filterDate = $dateInput.value//.trim().toLowerCase();
  var entryLength = filterDate.length;
  // Set filteredAddresses to an array of all addresses whose "state" matches the filter
 if (entryLength > 0) {
    filteredSightings = dataSet.filter(function(datetime) {
        var sightingDate = datetime.datetime;//.toLowerCase();
        // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
        return sightingDate === filterDate;
    });
    renderTable();
  } else {
        filteredSightings = dataSet.filter(function(datetime) {
            var sightingDate = datetime.datetime;
            return sightingDate !== filterDate;
        });
    renderTable();
    }
}

// var filteredSightings = dataSet;

function handleSearchButtonClick_city() {
  // Format the user's search by removing leading and trailing whitespace, lowercase the string
  var filterCity = $cityInput.value.trim().toLowerCase();
  var entryLength_city = filterCity.length;
  // Set filteredAddresses to an array of all addresses whose "state" matches the filter
 if (entryLength_city > 0) {
    filteredSightings = filteredSightings.filter(function(city) {
        var sightingCity = city.city.toLowerCase();
        // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
        return sightingCity === filterCity;
    });
    renderTable();
  } else {
        filteredSightings = filteredSightings.filter(function(city) {
            var sightingCity = city.city;
            return sightingCity !== filterCity;
        });
    renderTable();
    }
}

function handleSearchButtonClick_state() {
  // Format the user's search by removing leading and trailing whitespace, lowercase the string
  var filterState = $stateInput.value.trim().toLowerCase();
  var entryLength_state = filterState.length
  // Set filteredAddresses to an array of all addresses whose "state" matches the filter
 if (entryLength_state > 0) {
    filteredSightings = filteredSightings.filter(function(state) {
        var sightingState = state.state.toLowerCase();
        // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
        return sightingState === filterState;
    });
    renderTable();
  } else {
        filteredSightings = filteredSightings.filter(function(state) {
            var sightingState = state.state;
            return sightingState !== filterState;
        });
    renderTable();
    }
}

function handleSearchButtonClick_country() {
  // Format the user's search by removing leading and trailing whitespace, lowercase the string
  var filterCountry = $countryInput.value.trim().toLowerCase();
  var entryLength_country = filterCountry.length;
  // Set filteredAddresses to an array of all addresses whose "state" matches the filter
 if (entryLength_country > 0) {
    filteredSightings = filteredSightings.filter(function(country) {
        var sightingCountry = country.country.toLowerCase();
        // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
        return sightingCountry === filterCountry;
    });
    renderTable();
  } else {
        filteredSightings = filteredSightings.filter(function(country) {
            var sightingCountry = country.country;
            return sightingCountry !== filterCountry;
        });
    renderTable();
    }
}

function handleSearchButtonClick_shape() {
  // Format the user's search by removing leading and trailing whitespace, lowercase the string
  var filterShape = $shapeInput.value.trim().toLowerCase();
  var entryLength_shape = filterShape.length;
  // Set filteredAddresses to an array of all addresses whose "state" matches the filter
 if (entryLength_shape > 0) {
    filteredSightings = filteredSightings.filter(function(shape) {
        var sightingShape = shape.shape.toLowerCase();
        // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
        return sightingShape === filterShape;
    });
    renderTable();
  } else {
        filteredSightings = filteredSightings.filter(function(shape) {
            var sightingShape = shape.shape;
            return sightingShape !== filterShape;
        });
    renderTable();
    }
}

// Render the table for the first time on page load
renderTable();