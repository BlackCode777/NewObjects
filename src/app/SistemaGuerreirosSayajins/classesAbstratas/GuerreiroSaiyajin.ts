import { IGuerreiroSaiyajin } from "../interfaces/IGuerreiroSaiyajin.interface";

export abstract class GuerreiroSaiyajinAbstract implements IGuerreiroSaiyajin{
  constructor( 
    public nome: string, 
    public nivelPoder: number, 
    public ki: number, 
    public transformacaoAtual: string ){}

    // getters e setters
  get getNome(): string {
    return this.nome;
  }

  set setNome(nome: string) {
    this.nome = nome;
  }

  get getNivelPoder(): number {
    return this.nivelPoder;
  }

  set setNivelPoder(nivelPoder: number) {
    this.nivelPoder = nivelPoder;
  }

  get getKi(): number {
    return this.ki;
  }

  set setKi(ki: number) {
    this.ki = ki;
  }

  get getTransformacaoAtual(): string {
    return this.transformacaoAtual;
  }

  set setTransformacaoAtual(transformacaoAtual: string) {
    this.transformacaoAtual = transformacaoAtual;
  }

  transformarEmSuperSayajin(): void {
    console.log('Transformação em Super Sayajin');
  }

  transformarEmSuperSayajinFase2(): void {
    console.log('Transformação em Super Sayajin Fase 2');
  }

  transformarEmSuperSayajinFase3(): void {
    console.log('Transformação em Super Sayajin Fase 3');
  }

  transformarEmSuperSayajinFase4(): void {
    console.log('Transformação em Super Sayajin Fase 4');
  }

  transformarEmSuperSayajinFaseBlue(): void {
    console.log('Transformação em Super Sayajin Fase Blue');
  }

  transformarEmSuperSayajinFaseInstintoSuperior(): void {
    console.log('Transformação em Super Sayajin Fase Instinto Superior');
  }

  transformarEmSuperSayajinFaseBlueKaioken(): void {
    console.log('Transformação em Super Sayajin Fase Blue Kaioken');
  }

  atacar( _alvo: IGuerreiroSaiyajin ): void {
    console.log('Ataque');
  }

  defender(): void {
    console.log('Defesa');
  }

}