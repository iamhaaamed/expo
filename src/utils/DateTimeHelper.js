const Months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export const convertTimeToAmPm = (isoTime) => {
    var hours = parseInt(isoTime.substring(0, 2), 10),
        minutes = isoTime.substring(3, 5),
        ampm = 'am';

    if (hours == 12) {
        ampm = 'pm';
    } else if (hours == 0) {
        hours = 12;
    } else if (hours > 12) {
        hours -= 12;
        ampm = 'pm';
    }

    return hours + ':' + minutes + ' ' + ampm;
}

export const dayMonthFullYear = (datePart) => {
    let dateDetails = datePart.split('-');
    if (dateDetails.length === 3)
        return dateDetails[2] + Months[parseInt(dateDetails[1]) - 1] + '. ' + dateDetails[0];
    else return datePart;

}