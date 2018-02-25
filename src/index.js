// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    if (currency == 0) {
        let change = {};
        return change;
    };
    if (currency > 10000) {
        let change = {
            error : "You are rich, my friend! We don't have so much coins for exchange"
        }
        return change;
    };
    if (currency <= 10000) {
        let change = {};
        let temp = new Array(10);
        temp[5] = "H";
        temp[6] = "Q";
        temp[7] = "D";
        temp[8] = "N";
        temp[9] = "P";
        let NewReminder, CurrentReminder;
        CurrentReminder = currency;
        if (CurrentReminder >= 50) {
            NewReminder = CurrentReminder % 50;
            temp[0] = Math.floor(CurrentReminder / 50);
            CurrentReminder = NewReminder;
        }
        if (CurrentReminder >= 25 && CurrentReminder < 50) {
            NewReminder = CurrentReminder % 25;
            temp[1] = Math.floor(CurrentReminder / 25);
            CurrentReminder = NewReminder;
        }
        if (CurrentReminder >= 10 && CurrentReminder < 25) {
            NewReminder = CurrentReminder % 10;
            temp[2] = Math.floor(CurrentReminder / 10);
            CurrentReminder = NewReminder;
        }
        if (CurrentReminder >= 5 && CurrentReminder < 10) {
            NewReminder = CurrentReminder % 5;
            temp[3] = Math.floor(CurrentReminder / 5);
            CurrentReminder = NewReminder;
        }
        if (CurrentReminder < 5) {
            temp[4] = Math.floor(CurrentReminder);
        }
        for (var i = 0; i < 5; i++) {
            if (temp[i] != undefined && temp[i] > 0) {
                change[temp[i+5]]=temp[i];
            }
        }
        return change;
    };
}