let usersOnline = 0;
let iterations = 1;

while (usersOnline <= 100) {
    console.log(usersOnline + ' utilizatori online');
    usersOnline++;
}

console.log(usersOnline + ' utilizatori online');

/*

1. usersOnline = 0, este mai mic sau egal decat 5?
DA => usersOnline = 1

2. usersOnline = 1, este mai mic sau egal decat 5?
DA => usersOnline = 2

3. usersOnline = 2, este mai mic sau egal decat 5?
DA => usersOnline = 3

4. usersOnline = 3, este mai mic sau egal decat 5?
DA => usersOnline = 4

5. usersOnline = 4, este mai mic sau egal decat 5?
DA => usersOnline = 5

6. usersOnline = 5, este mai mic sau egal decat 5?
DA => usersOnline = 6

7. usersOnline = 6, este mai mic sau egal decat 5?
NU

*/

// break - opreste structura repetitiva (parintele cel mai apropiat)

while (usersOnline <= 100) {
    console.log(usersOnline + ' utilizatori online');
    usersOnline++;

    if (usersOnline == 50) {
        break;
    }
}

while (iterations <= 2) {
    usersOnline = 0;

    while (usersOnline <= 100) {
        console.log(usersOnline + ' utilizatori online');
        usersOnline++;

        if (usersOnline == 50) {
            break;
        }
    }

    iterations++;
}

// continue - sare peste o iteratie in structura repetitiva (parintele cel mai apropiat)

while (usersOnline <= 100) {
    if (usersOnline >= 50 && usersOnline <= 60) {
        usersOnline++;
        continue;
    }

    console.log(usersOnline + ' utilizatori online');
    usersOnline++;
}
