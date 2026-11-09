const names = ["Dat", "Nam", "Minh", "An", "Binh"];
names.sort((a, b) => a.localeCompare(b));
console.log(names);
names.sort((a, b) => b.localeCompare(a));
console.log(names);