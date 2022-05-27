import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddTableEntradaEntradaProduto1653525888738
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `
        create table entrada (
          id uuid not null default uuid_generate_v4(),
          numero_entrada serial not null,
          data_entrada timestamp without time zone not null default now(),
          constraint pk_entrada primary key (id)
        );

        create table entrada_produto (
          id uuid not null default uuid_generate_v4(),
          entrada_id uuid,
          produto_id uuid,
          quantidade integer not null,
          constraint pk_entrada_produto primary key (id),
          constraint fk_entrada_produto_entrada_id foreign key (entrada_id) references entrada(id),
          constraint fk_entrada_produto_produto_id foreign key (produto_id) references produto(id)
        );
      `
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'alter table entrada_produto drop constraint fk_entrada_produto_entrada_id'
    );
    await queryRunner.query(
      'alter table entrada_produto drop constraint fk_entrada_produto_produto_id'
    );
    await queryRunner.query('drop table entrada_produto;');
    await queryRunner.query('drop table entrada;');
  }
}
