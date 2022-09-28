let usersOnline = 3;

if (usersOnline) {
    console.log(usersOnline + ' utilizatori online');
} else {
    console.log('Nu este nici un utilizator online!');
}

/*
    if (usersOnline)

    este ECHIVALENT cu

    if (usersOnline != 0)
*/

console.log(
    usersOnline
        ? usersOnline + ' utilizatori online'
        : 'Nu este nici un utilizator online!'
);

/*
    usersOnline ?

    este ECHIVALENT cu

    usersOnline != 0 ?
*/
