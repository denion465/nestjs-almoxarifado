import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddTableEstoque1653529717488 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `
        create table estoque (
          id uuid not null default uuid_generate_v4(),
          id_produto uuid not null,
          quantidade_total integer not null,
          constraint pk_estoque primary key (id),
          constraint fk_estoque_produto foreign key (id_produto) references produto (id)
        );
      `
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('drop table estoque cascade;');
  }
}
