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
          data_entrada timestamp without time zone not null,
          constraint pk_entrada primary key (id)
        );

        create table entrada_produto (
          id uuid not null default uuid_generate_v4(),
          id_produto uuid not null,
          id_entrada uuid not null,
          quantidade integer not null,
          constraint pk_entrada_produto primary key (id),
          constraint fk_entrada_produto_id_produto foreign key (id_produto) references produto (id),
          constraint fk_entrada_produto_id_entrada foreign key (id_entrada) references entrada (id)
        );
      `
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('drop table entrada_produto cascade;');
    await queryRunner.query('drop table entrada cascade;');
  }
}
