import { MigrationInterface, QueryRunner, TableColumn } from "typeorm"

export class addColumnAdminUsers1659997900388 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
         await queryRunner.addColumns('users', [
           new TableColumn({
            name: 'admin',
            type: 'bit',
            isNullable: true
           }),
           new TableColumn({
            name: 'created_at',
            type: 'datetime',
            isNullable: true,
            default: 'SYSDATETIMEOFFSET()'
           }),
           new TableColumn({
            name: 'updated_at',
            type: 'datetime',
            isNullable: true,
            default: 'SYSDATETIMEOFFSET()'
           })
        ]);

        await queryRunner.changeColumn('users','id',new TableColumn({
            name: 'id',
            isPrimary: true,
            type: 'integer',
            isGenerated: true,
            generationStrategy: 'increment'
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        return await queryRunner.dropColumns('users',[
            'updated_at',
            'created_at',
            'admin'
        ]);
    }

}
