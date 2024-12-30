import { IHollow } from "../interfaceShinigami/IHollow.interface";

export abstract class HollowAbstract implements IHollow {
  constructor(
    public nome: string,
    public nivelHuecoMundo: number,
    public poderHollow: number,
  ) { }

  // Métodos Getters e Setters
  get getNome(): string {
    return this.nome;
  }

  set setNome(nome: string) {
    this.nome = nome;
  }

  get getNivelHuecoMundo(): number {
    return this.nivelHuecoMundo;
  }

  set setNivelHuecoMundo(nivelHuecoMundo: number) {
    this.nivelHuecoMundo = nivelHuecoMundo;
  }

  get getPoderHollow(): number {
    return this.poderHollow;
  }

  set setPoderHollow(poderHollow: number) {
    this.poderHollow = poderHollow;
  }

  abstract devorarAlma(): void;

  abstract atacarShiniagami(): void;

}