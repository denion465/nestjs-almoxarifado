import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddTableProduto1653431716680 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `
        CREATE TABLE produto (
          id uuid NOT NULL DEFAULT uuid_generate_v4(),
          descricao character varying(100) NOT NULL,
          observacao character varying(100),
          data_cadastro timestamp without time zone NOT NULL DEFAULT now(),
          data_atualizacao timestamp without time zone NOT NULL DEFAULT now(),
          CONSTRAINT pk_produto PRIMARY KEY (id)
        )
      `
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE produto`);
  }
}
