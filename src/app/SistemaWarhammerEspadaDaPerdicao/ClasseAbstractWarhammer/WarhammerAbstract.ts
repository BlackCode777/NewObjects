import { IWarhammer } from "../InterfaceWarhammer/WarhammerInterface.interface";

export abstract class WarhammerAbstract implements IWarhammer{
  
  constructor(
    public nome: string,
    public nivelMortalidade: number,
    public nivelPoder: number,
    public armas: string,
    public armadura: string,
    public corArmadura: string,
    public nivelDeLealdade: number,
    public nivelDeCoragem: number,
    public nivelDeInteligencia: number,
    public nivelDeForca: number,
    public nivelDeAgilidade: number,
    public nivelDeHabilidade: number
  ){}

  get getNome(): string {
    return this.nome;
  }

  set setNome(nome: string) {
    this.nome = nome;
  }

  get getNivelMortalidade(): number {
    return this.nivelMortalidade;
  }

  set setNivelMortalidade(nivelMortalidade: number) {
    this.nivelMortalidade = nivelMortalidade;
  }

  get getNivelPoder(): number {
    return this.nivelPoder;
  }

  set setNivelPoder(nivelPoder: number) {
    this.nivelPoder = nivelPoder;
  }

  get getArmas(): string {
    return this.armas;
  }

  set setArmas(armas: string) {
    this.armas = armas;
  }

  get getArmadura(): string {
    return this.armadura;
  }

  set setArmadura(armadura: string) {
    this.armadura = armadura;
  }

  get getCorArmadura(): string {
    return this.corArmadura;
  }

  set setCorArmadura(corArmadura: string) {
    this.corArmadura = corArmadura;
  }

  get getNivelDeLealdade(): number {
    return this.nivelDeLealdade;
  }

  set setNivelDeLealdade(nivelDeLealdade: number) {
    this.nivelDeLealdade = nivelDeLealdade;
  }

  get getNivelDeCoragem(): number {
    return this.nivelDeCoragem;
  }

  set setNivelDeCoragem(nivelDeCoragem: number) {
    this.nivelDeCoragem = nivelDeCoragem;
  }

  get getNivelDeInteligencia(): number {
    return this.nivelDeInteligencia;
  }

  set setNivelDeInteligencia(nivelDeInteligencia: number) {
    this.nivelDeInteligencia = nivelDeInteligencia;
  }

  get getNivelDeForca(): number {
    return this.nivelDeForca;
  }

  set setNivelDeForca(nivelDeForca: number) {
    this.nivelDeForca = nivelDeForca;
  }

  get getNivelDeAgilidade(): number {
    return this.nivelDeAgilidade;
  }

  set setNivelDeAgilidade(nivelDeAgilidade: number) {
    this.nivelDeAgilidade = nivelDeAgilidade;
  }

  get getNivelDeHabilidade(): number {
    return this.nivelDeHabilidade;
  }

  set setNivelDeHabilidade(nivelDeHabilidade: number) {
    this.nivelDeHabilidade = nivelDeHabilidade;
  }

  atacar(arma: string): WarhammerAbstract{
    console.log('Atacando com ' + arma);
    return this;
  }

  defender(): WarhammerAbstract{
    console.log('Defendendo');
    return this;
  }

  fugir(): WarhammerAbstract{
    console.log('Fugindo');
    return this;
  }

  voarComPropulsor(): WarhammerAbstract{
    console.log('Voando');
    return this;
  }

  pilotarAeronave(nivelDeInteligencia: number): WarhammerAbstract{
    console.log('Pilotando aeronave com nível de inteligência ' + nivelDeInteligencia);
    return this;
  }

}