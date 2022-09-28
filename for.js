for (let usersOnline = 0; usersOnline < 100; usersOnline++) {
    console.log(usersOnline + ' utilizatori online');
}

for (let usersOnline = 100; usersOnline >= 0; usersOnline--) {
    console.log(usersOnline + ' utilizatori online');
}

// break - opreste structura repetitiva (parintele cel mai apropiat)

for (let usersOnline = 100; usersOnline >= 0; usersOnline--) {
    if (usersOnline == 50) {
        break;
    }

    console.log(usersOnline + ' utilizatori online');
}

// continue - sare peste iteratie in structura repetitiva (parintele cel mai apropiat)

for (let usersOnline = 100; usersOnline >= 0; usersOnline--) {
    if (
        (usersOnline >= 50 && usersOnline <= 60) ||
        (usersOnline >= 80 && usersOnline <= 95)
    ) {
        continue;
    }

    console.log(usersOnline + ' utilizatori online');
}

let session = 'JS - Decision-Making Structures';

console.log(session.length);

for (let index = 0; index < session.length; index++) {
    console.log(session[index]);
}

let personAges = [10, 21, 13, 18, 44, 63, 32];

for (let index = 0; index < personAges.length; index++) {
    if (personAges[index] >= 18) {
        console.log('Major');
    } else {
        console.log('Minor');
    }
}

// ordine inversa

for (let index = personAges.length - 1; index >= 0; index--) {
    if (personAges[index] >= 18) {
        console.log('Major');
    } else {
        console.log('Minor');
    }
}
