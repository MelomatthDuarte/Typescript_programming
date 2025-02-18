function calculo(x: number, y: number): number{
    return x * y;
}

const filtro = (valor: string): boolean => {
    return valor.length >= 5;
}

const animales: string[] = ['perro', 'gato', 'pez', 'ave', 'hamster', 'conejo', 'camello', 'elefante', 'leon'];
const animalesFiltrados = animales.filter(filtro);