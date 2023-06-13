
function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0,2);
}

function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2);
}

const selectingDrivers=[returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer){
    return function(fare) {
        return fare * integer;
    }
}

function fareDoubler(fare) {
    const fareMultiplier = createFareMultiplier(2);
    return fareMultiplier(fare);
}
function fareTripler(fare) {
    const fareMultiplier = createFareMultiplier(3);
    return fareMultiplier(fare);
}

function selectDifferentDrivers(drivers, selectingDrivers) {
    return selectingDrivers(drivers);
}