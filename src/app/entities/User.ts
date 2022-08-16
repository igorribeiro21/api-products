import { Column, CreateDateColumn, Entity, Generated, PrimaryColumn, UpdateDateColumn } from 'typeorm';

@Entity('users')
class User {
    @PrimaryColumn()
    @Generated()
    id: string;

    @Column()
    user:string;

    @Column()
    keyAccess: string;

    @Column()
    admin: boolean;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;


}


export default User;