interface Rectangle {
    readonly id: string;    //it's require parameter
    color?: string;     // it's optional parameter
    size: {
        width: number;
        hieght: number;
    }
}

const rect1: Rectangle = {
    id: '1',
    size: {
        width: 100,
        hieght: 80,
    }
}
const rect2: Rectangle = {
    id: '2',
    color: 'red',
    size: {
        width: 50,
        hieght: 80,
    }
}

rect1.color = 'green';
//rect1.id = '22'   -- it's error as id is readonly

const rect3 = {} as Rectangle;
const  rect4 = <Rectangle>{};

//--------------- inheritance
interface RectangleWithArea extends Rectangle {
    getArea: () => number;
}

const rect5: RectangleWithArea = {
    id: '123',
    size: {
        width: 10,
        hieght: 5,
    },
    getArea(): number {
        return this.size.hieght * this.size.width;
    }
}

/////////
interface IClock {
    time: Date;
    setTime(date: Date): void;
}

class Clock implements IClock {
    time: Date = new Date();
    setTime(date: Date): void {
        this.time = date;
    }
}

//////////
interface Styles {
    [key:string]: string;
}

const css: Styles = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px'
}