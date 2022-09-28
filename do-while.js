let ticketsAvailable = 0;

// do-while

console.log('do-while');

do {
    ticketsAvailable--;
    console.log(ticketsAvailable + ' bilete disponibile');
} while (ticketsAvailable > 0);

// while

console.log('while');

while (ticketsAvailable > 0) {
    ticketsAvailable--;
    console.log(ticketsAvailable + ' bilete disponibile');
}
