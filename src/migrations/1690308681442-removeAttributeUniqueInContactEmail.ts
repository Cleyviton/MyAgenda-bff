import { MigrationInterface, QueryRunner } from "typeorm";

export class RemoveAttributeUniqueInContactEmail1690308681442 implements MigrationInterface {
    name = 'RemoveAttributeUniqueInContactEmail1690308681442'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP CONSTRAINT "UQ_752866c5247ddd34fd05559537d"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" ADD CONSTRAINT "UQ_752866c5247ddd34fd05559537d" UNIQUE ("email")`);
    }

}