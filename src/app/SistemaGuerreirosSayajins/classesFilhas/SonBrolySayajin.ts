import { GuerreiroSaiyajinAbstract } from "../classesAbstratas/GuerreiroSaiyajin";

export class SonBrolySayajin extends GuerreiroSaiyajinAbstract {
    constructor(
      public override nome: string, 
      public override nivelPoder: number, 
      public override ki: number, 
      public override transformacaoAtual: string,
      public forcaBerserk: number
      ) {
        super(nome, nivelPoder, ki, transformacaoAtual);
      }


        override transformarEmSuperSayajin(): void {
          console.log('Transformação em Super Sayajin');
        }
      
        override transformarEmSuperSayajinFase2(): void {
          console.log('Transformação em Super Sayajin Fase 2');
        }
      
        override transformarEmSuperSayajinFase3(): void {
          console.log('Transformação em Super Sayajin Fase 3');
        }
      
        override transformarEmSuperSayajinFase4(): void {
          console.log('Transformação em Super Sayajin Fase 4');
        }
      
        override transformarEmSuperSayajinFaseBlue(): void {
          console.log('Transformação em Super Sayajin Fase Blue');
        }
      
        override transformarEmSuperSayajinFaseInstintoSuperior(): void {
          console.log('Transformação em Super Sayajin Fase Instinto Superior');
        }
      
        override transformarEmSuperSayajinFaseBlueKaioken(): void {
          console.log('Transformação em Super Sayajin Fase Blue Kaioken');
        }
      
        override atacar( _alvo: IGuerreiroSaiyajin ): void {
          console.log('Ataque');
        }
      
        override defender(): void {
          console.log('Defesa');
        }

    }