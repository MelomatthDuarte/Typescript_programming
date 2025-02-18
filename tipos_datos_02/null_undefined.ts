let variableUno: undefined = undefined;
let variableNula: null = null;

interface Persona {
    nombre: string,
    apellido: undefined,
}

const perencejo: Persona = {nombre: 'Perencejo'};

function decirNOmbre(persona:Persona): number{
    return persona.apellido.length;
}

decirNOmbre(perencejo);