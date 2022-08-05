import User from "../../entities/User";

interface IUserRepository {
    getOne(user:string,keyAccess:string): Promise<User>;
}

export default IUserRepository;