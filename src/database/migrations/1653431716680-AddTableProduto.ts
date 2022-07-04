import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddTableProduto1653431716680 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `
        create table produto (
          id uuid not null default uuid_generate_v4(),
          descricao character varying(100) not null,
          observacao character varying(100),
          data_cadastro timestamp with time zone not null default now(),
          data_atualizacao timestamp with time zone not null default now(),
          constraint pk_produto PRIMARY KEY (id)
        );
      `
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`drop table produto`);
  }
}
