import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: 'orderBy'
})

export class OrderByuser implements PipeTransform{

    transform( users : any[] ,key :string , order : number ){
        if (!key)
            return users;
        
        return users.sort((a :any ,b:any)=>{
            return a[key] > b[key] ? order:order*(-1);
        })
    }

}