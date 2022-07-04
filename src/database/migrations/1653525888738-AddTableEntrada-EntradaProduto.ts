import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddTableEntradaEntradaProduto1653525888738
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `
        create type unidade_medida_enum as enum('caixa', 'unidade', 'pacote', 'fardo', 'rolo', 'lata', 'outro');

        create table entrada (
          id uuid not null default uuid_generate_v4(),
          numero_entrada serial not null,
          data_cadastro timestamp with time zone not null default now(),
          data_atualizacao timestamp with time zone not null default now(),
          constraint pk_entrada primary key (id)
        );

        create table entrada_produto (
          id uuid not null default uuid_generate_v4(),
          entrada_id uuid,
          produto_id uuid,
          unidade_medida unidade_medida_enum not null,
          quantidade integer not null,
          data_cadastro timestamp with time zone not null default now(),
          data_atualizacao timestamp with time zone not null default now(),
          constraint pk_entrada_produto primary key (id),
          constraint fk_entrada_produto_entrada_id foreign key (entrada_id) references entrada(id),
          constraint fk_entrada_produto_produto_id foreign key (produto_id) references produto(id)
        );
      `
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `
        alter table entrada_produto drop constraint fk_entrada_produto_entrada_id;
        alter table entrada_produto drop constraint fk_entrada_produto_produto_id;
        drop table entrada_produto;
        drop table entrada;
        drop type unidade_medida_enum;
      `
    );
  }
}
