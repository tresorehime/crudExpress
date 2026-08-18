import {UserRepo} from "../repository/UserRepo";

export class UserService{
    private userRepo:UserRepo;


    constructor(userRepo: UserRepo) {
        this.userRepo = userRepo;
    }

    async createUser (email:string, password: string){
        const existingUser = await  this.userRepo.findByEmail(email);

        if (existingUser){
            throw new Error("Email déjà utilisé");
        }

        return await  this.userRepo.create({
                email,
                password
        }
        );
    }

    async login  (email:string, password: string){
        const existingUser = await  this.userRepo.findByEmail(email);

        if (!existingUser){
            throw new Error("Email ou mot de passe incorrect");
        }

        if (existingUser.password !== password) {
            throw new Error("Mot de passe incorrect");
        }
        return existingUser;
    }
}