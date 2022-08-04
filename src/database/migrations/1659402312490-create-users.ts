import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class createUsers1659402312490 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'users',
                columns: [
                    {
                        name: 'id',
                        type: 'integer',
                        isPrimary: true
                    },
                    {
                        name: 'user',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'key-acess',
                        type: 'varchar',
                        isNullable: false
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
