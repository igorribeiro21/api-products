import { Repository } from 'typeorm';
import User from "../../../entities/User";
import IUserRepository from "../interfaces/repositories/IUserRepository";
import dataSource from '../../../../database';

class UserRepository implements IUserRepository {
    private repository: Repository<User>;

    constructor(){
        this.repository = dataSource.getRepository(User);
    }

    async getOne(user: string, keyAccess: string): Promise<User> {
        const response = await this.repository.findOne({
            where: {
                user,
                keyAccess
            }
        });

        return response;
    }

}

export default new UserRepository();