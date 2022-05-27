export interface IEntradaProdutosResDto {
  id: string;
  numeroEntrada: number;
  produtos: Array<{
    produto: {
      id: string;
    };
    quantidade: number;
  }>;
}
