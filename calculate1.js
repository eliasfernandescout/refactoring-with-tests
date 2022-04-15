
const OVERNIGHT_FARE = 3.90;
const SUNDAY = 2.9;
const NORMAL_FARE = 2.10;

const isOvernight = function (date) {
    return isOvernight = date.getHours() >= 22;
}

const isSunday = function (date) {
    return isSunday = date.getDay() === 0;

}

exports.calculateRide = function (distance, date) {
    if (isOvernight(date))return distance * OVERNIGHT_FARE;
    if (isSunday(date))return distance * SUNDAY;
    return distance * NORMAL_FARE;
}
