

// export interface Books{
//     id:number;
//     titre:string;
//     description:string;
//     image:string;
// }

export interface Books{

        id:number;
        titre:string;
        auteur:string;
        image:string;
        description:string;
        disponible?:boolean;
        datedisponible?:Date;
        reserve?:boolean

}


