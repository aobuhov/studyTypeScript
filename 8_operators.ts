interface Person {
    name: string;
    age: number;
}

type PersonKeys = keyof Person //'name' | 'age'
let key: PersonKeys = 'name'
key = 'age'
//key = 'smth else' --it's an error

type User = {
    _id: number,
    name: string,
    email: string,
    createAt: Date
}

type UserKeysNoMeta = Exclude<keyof User, '_id' | 'createdAt'>  //it will be type with only name and email
type UserKeysNoMeta2 = Pick<User, 'name' | 'email' >            //it will be type with only name and email too

let u1: UserKeysNoMeta = 'name'
//u1 = 'blabla' --its an error
