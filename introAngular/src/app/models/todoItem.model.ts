export class TodoItem{
    // id: number  | undefined | null;
    // task:string | undefined | null;
    // isDone: boolean = false

    //TS sayesinde sadece constructor parametresine 
    //public ifadesi kullanılarak üye tanımlayabilirsiniz.
    constructor(public id?:number, 
                public task?:string,
                public isDone?: boolean){

    }
};