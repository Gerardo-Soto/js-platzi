const paddockType = [
    { id: 1, name: 'PALTOS' },
    { id: 2, name: 'AVELLANOS' },
    { id: 3, name: 'CEREZAS' },
    { id: 4, name: 'NOGALES' },
];

const paddocks = [
    { paddockManagerId: 1, farmId: 2, paddockTypeId: 1, harvesYear: 201, area: 123 },
    { paddockManagerId: 2, farmId: 3, paddockTypeId: 3, harvesYear: 201, area: 3221},
    { paddockManagerId: 1, farmId: 1, paddockTypeId: 2, harvesYear: 201, area: 212},
    { paddockManagerId: 4, farmId: 2, paddockTypeId: 3, harvesYear: 201, area: 322},
    { paddockManagerId: 3, farmId: 3, paddockTypeId: 4, harvesYear: 201, area: 222},
    { paddockManagerId: 4, farmId: 3, paddockTypeId: 1, harvesYear: 201, area: 111},
    { paddockManagerId: 1, farmId: 2, paddockTypeId: 2, harvesYear: 201, area: 321},
    { paddockManagerId: 4, farmId: 2, paddockTypeId: 1, harvesYear: 201, area: 3332},
    { paddockManagerId: 5, farmId: 1, paddockTypeId: 2, harvesYear: 201, area: 223},
    { paddockManagerId: 3, farmId: 2, paddockTypeId: 4, harvesYear: 201, area: 221},
    { paddockManagerId: 2, farmId: 3, paddockTypeId: 3, harvesYear: 201, area: 233},
    { paddockManagerId: 5, farmId: 2, paddockTypeId: 2, harvesYear: 201, area: 221},
    { paddockManagerId: 1, farmId: 1, paddockTypeId: 1, harvesYear: 201, area: 332},
];

let totalAreaPaddockType = [0, 0, 0, 0];

for (let index = 0; index < paddocks.length; index++) {    
    totalAreaPaddockType[paddocks[index].paddockTypeId - 1] += paddocks[index].area;
}

const paddockTotal = [
    { name: 'PALTOS', total: 0 },
    { name: 'AVELLANOS', total: 0 },
    { name: 'CEREZAS', total: 0},
    { name: 'NOGALES', total: 0 },
]

for (let index = 0; index < paddockTotal.length; index++) {
    paddockTotal[index].total = totalAreaPaddockType[index]
    
}

console.log(totalAreaPaddockType);
console.log(paddockTotal);

paddockTotal.sort(function (a,b) {
    var keyA = a.total, keyB = b.total;
    if (keyA < keyB) return -1;
    if (keyA > keyB) return 1;
    return 0;
});

console.log(paddockTotal);

console.log('test');