"Use strict";
const allEmails = ['valid@email.com', 'valid1@email.com', 'valid2@email.com',  'invalidvalid@email.com', 'invalidvalid1@email.com'];
const blackList = ['invalidvalid@email.com', 'invalidvalid1@email.com'];
let count;
let validAll = [];
function filter(allE, black) {
    for (let indexAll in allE) {
        count = 0;
        for (let indexBlack in black) {
            if (allE[indexAll] === black[indexBlack]) {
                break;
            }
            else if (count === black.length-1) {
                validAll.push(allE[indexAll]);
                }
            else {
                count++;
            }
        }
    }
    return validAll;
}
let validEmails = filter(allEmails, blackList);
console.log(validEmails);