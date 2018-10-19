import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name : 'userfilter'
})


export class UserPipe implements PipeTransform{

    transform(users : any[], search : string){
         if(!users || ! search){
             return users;
         }
         return users.filter(users => (users.name.toLowerCase().indexOf(search.toLowerCase()) !== -1)||(users.city.toLowerCase().indexOf(search.toLowerCase()) !== -1)||(users.dept.toLowerCase().indexOf(search.toLowerCase()) !== -1));
    }

}