const isFetching: boolean = true;
const isLoading: boolean = false;

let int: number = 10;
//int = ''; --Type 'string' is not assignable to type 'number'.
const float: number = 4.2;
const exp: number = 3e10;

const message: string = 'hello TS';

const numberArray: number[] = [1,1,2,3,5,8,13];
const numberArray2: Array<number> = [1,1,2,3,5,8,13];

const words: Array<string> = ['hello', 'type', 'script'];

//Tuple
const contact: [string, number] = ['Tom', 124];

//Any
let variable: any = 42;
variable = 'some string';
variable = [1,3,4];

//fuctions
function nameFunc(name: string): void {
     console.log(name);
}
nameFunc("test function");

//Never
function throwError(mes: string): never {
     throw new Error("error");
}
function infinite(): never {
     while (true) {

     }
}

//Type own types
type Login = string;
let login: Login = "admin";
//let login2: Login = 2; --this is an error

type ID = string | number;
let id:ID = "12";
id = 12;
//id = true;  -- this is an error

 type SomeType = string | null | undefined;
