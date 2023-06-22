function add(a:number, b:number): number {
    return a+b;
}

function toUpperCase(s: string): string {
    return s.trim().toUpperCase();
}

console.log(add(3,4));
console.log(toUpperCase('dfsg '))

interface MyPosition {
    x: number | undefined;
    y: number | undefined;
}
interface MyPositionWithDefault extends MyPosition {
    default: string;
}

function position(): MyPosition;
function position(a: number): MyPositionWithDefault;
function position(a: number, b: number): MyPosition;

function position(a?: number, b?: number) {
    if (!a && !b) {
        return {x: undefined, y: undefined}
    }
    if (a && !b) {
        return {x: a, y: undefined, default: a.toString()}
    }
    return  {x: a, y: b}
}

console.log('Empty:  ', position())
console.log('one param: ', position(3))
console.log('two params: ', position(3,4))