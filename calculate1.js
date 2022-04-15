//calculate ride

exports.calc = function (distance, date) {
    // overnight
    if (date.getHours() >= 22) {
        return distance * 3.90;
    } else {
        //sunday
        if (date.getDay() === 0) {
            return distance * 2.9;
        } else {
            return distance * 2.10;
        }
    }
}