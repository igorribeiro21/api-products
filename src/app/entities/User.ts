import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('users')
class User {
    @PrimaryColumn()
    id: string;

    @Column()
    user:string;

    @Column()
    keyAccess: string;
}


export default User;