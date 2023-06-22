class TypeScript {
    version: string;
    constructor(version: string) {
        this.version = version;
    }
    info(name: string): string {
         return `[${name}: TypeScript version is ${this.version}]`;
    }
}

// class Car {
//     readonly model: string;
//     readonly numberOfWheels: number = 4;
//     constructor(theModel: string) {
//         this.model = theModel;
//     }
// }
//And we have the other syntax, it will be equal
class Car {
    readonly numberOfWheels: number = 4;
    constructor(readonly model: string) {
    }
}


//---------modificators
class Animal {
    protected voice: string = '';
    public color: string = 'black';
    private go() {
        console.log('go!')
    }
}
class Cat  extends  Animal {
    public setVoice(voice:string) {
        this.voice = voice;
    }
}

const cat = new Cat();
//cat.voice     -- erros, as voice is protected

//-----abstract classes
abstract class Component {
    abstract render(): void;
    abstract info(): string;
}
class AppComponent extends Component {
    info(): string {
        return "";
    }
   render(): void {
    }
}
