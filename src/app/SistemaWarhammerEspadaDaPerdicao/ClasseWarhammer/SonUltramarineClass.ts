import { WarhammerAbstract } from "../ClasseAbstractWarhammer/WarhammerAbstract";

export class SonUltramarineClass extends WarhammerAbstract{
    constructor(
        public override nome: string,
        public override nivelMortalidade: number,
        public override nivelPoder: number,
        public override armas: string,
        public override armadura: string,
        public override corArmadura: string,
        public override nivelDeLealdade: number,
        public override nivelDeCoragem: number,
        public override nivelDeInteligencia: number,
        public override nivelDeForca: number,
        public override nivelDeAgilidade: number,
        public override nivelDeHabilidade: number
    ) {
        super(
            nome, nivelMortalidade, nivelPoder, armas,
            armadura, corArmadura, nivelDeLealdade,
            nivelDeCoragem, nivelDeInteligencia, nivelDeForca,
            nivelDeAgilidade, nivelDeHabilidade);
    }

    
  override atacar(arma: string): WarhammerAbstract{
    console.log('Atacando com ' + arma);
    return this;
  }

  override defender(): WarhammerAbstract{
    console.log('Defendendo');
    return this;
  }

  override fugir(): WarhammerAbstract{
    console.log('Fugindo');
    return this;
  }

  override voarComPropulsor(): WarhammerAbstract{
    console.log('Voando');
    return this;
  }

  override pilotarAeronave(nivelDeInteligencia: number): WarhammerAbstract{
    console.log('Pilotando aeronave com nível de inteligência ' + nivelDeInteligencia);
    return this;
  }
}