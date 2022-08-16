import AppDataSource from '..';
import { v4 } from 'uuid';
import User from '../../app/entities/User';

export default async function create(): Promise<void> {
    const repository = AppDataSource.getRepository(User);


    try {
        const user = repository.create({          
            user: 'admin',
            keyAccess: v4(),
            admin: true,
            created_at: new Date(),
            updated_at: new Date()
        });

        await repository.save(user);

        console.log('User inserido com sucesso!');
    }
    catch (err) {
        console.log(err);
    }


}

