// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    let change = {};

    if (!currency) {
        return change;
    }
    if (currency > 10000) {
        change.error = "You are rich, my friend! We don't have so much coins for exchange";
        return change;
    }

    let temp = [0,0,0,0,0,'H','Q','D','N','P'];
    let NewReminder, CurrentReminder = currency;

    function addChange (coinDenomination, position) {        
        NewReminder = CurrentReminder % coinDenomination;
        temp[position] = Math.floor(CurrentReminder / coinDenomination);
        CurrentReminder = NewReminder;
    }
    
    if (currency <= 10000) {
        if (CurrentReminder >= 50) { addChange(50,0); }
        if (CurrentReminder >= 25 && CurrentReminder < 50) { addChange(25,1); }
        if (CurrentReminder >= 10 && CurrentReminder < 25) { addChange(10,2); }
        if (CurrentReminder >= 5 && CurrentReminder < 10) { addChange(5,3); }
        if (CurrentReminder < 5) { temp[4] = Math.floor(CurrentReminder); }
        for (let i = 0; i < 5; i++) {
            if (temp[i] != undefined && temp[i] > 0) {
                change[temp[i+5]] = temp[i];
            }
        }
        return change;
    }
}