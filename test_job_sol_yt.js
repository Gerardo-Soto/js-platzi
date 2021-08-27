console.group('yt');

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

// Variable donde almacenamos los resultados
const areaOfPaddocks = {};

//recorrer los paddock para hacer la suma
paddocks.forEach(paddock => {
    // Obtener las propiedades necesarias:
    const {paddockTypeId, area} = paddock;
    
    // Nullish Coalescing Operator (??)
    //areaOfPaddocks[paddockTypeId] = areaOfPaddocks[paddockTypeId] ?? 0; //si areaOfPaddocks[] = N/U se le asigna 0
    // devuelve el valor de la derecha cuando el operador de la izquierda en null o undefined.

    // Logical Asigmentg Operator: (lo mismo de NCO pero más abrebiado): (??=)
    // ya que no hace la asignación si no es necesario:
    areaOfPaddocks[paddockTypeId] ??= 0;

    // Calculamos la suma para cada paddock id
    areaOfPaddocks[paddockTypeId] += area;
});

// mapear el id de paddocks con el id de paddocktype:
paddockType.map(p => ({
    ... p,
    totalSum : areaOfPaddocks[p.id]
}))
    .sort((a, b) => b.totalSum - a.totalSum) // Ordenar los resultados de manera decendente (sort(b-a))
    .map(p => p.name) // solo regresa el nombre.

console.log(paddockType);
//console.log(areaOfPaddocks);

console.groupEnd();