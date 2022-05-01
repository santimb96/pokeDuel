export class User {
    _id?: string;
    username: string;
    password: string;
    email: string;
    avatar?: string;

    constructor(username:string,password:string,email:string,avatar:string){
        this.username = username;
        this.password = password;
        this.email = email;
        this.avatar = avatar;
    }
}