import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddTableEstoque1653529717488 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `
        create table estoque (
          id uuid not null default uuid_generate_v4(),
          produto_id uuid,
          quantidade_total integer not null,
          data_cadastro timestamp with time zone not null default now(),
          data_atualizacao timestamp with time zone not null default now(),
          constraint rel_estoque_produto unique (produto_id),
          constraint pk_estoque primary key (id),
          constraint fk_estoque_produto foreign key (produto_id) references produto(id),
          constraint rel_estoque_produto unique (produto_id)
        );
      `
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `
        alter table estoque drop constraint fk_estoque_produto;
        drop table estoque;
      `
    );
  }
}
