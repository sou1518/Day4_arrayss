let tab = [1, 2, 3, 4];

const temp = tab[0];
tab[0] = tab[tab.length-1];
tab[tab.length-1] = temp
console.log(tab);