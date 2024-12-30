import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NbThemeModule } from '@nebular/theme';
import { SonIchigo } from './SistemaDeShinigamisBleach/classeShinigami/SonIchigo';
import { SonRukia } from './SistemaDeShinigamisBleach/classeShinigami/SonRukia';
import { SonSHimpatoZaraki } from './SistemaDeShinigamisBleach/classeShinigami/SonShinpatoZaraki';
import { IShinigami } from './SistemaDeShinigamisBleach/interfaceShinigami/Shinigami.interface';
import { SonBrolySayajin } from './SistemaGuerreirosSayajins/classesFilhas/SonBrolySayajin';
import { SonGoKuSaiyajin } from './SistemaGuerreirosSayajins/classesFilhas/SonGokuSaiyajin';
import { SonVegetaSayajin } from './SistemaGuerreirosSayajins/classesFilhas/SonVegetaSayajin';
import { IGuerreiroSaiyajin } from './SistemaGuerreirosSayajins/interfaces/IGuerreiroSaiyajin.interface';
import { SonBloodAngelClass } from './SistemaWarhammerEspadaDaPerdicao/ClasseWarhammer/SonBloodAngelClass';
import { SonSpaceMarineWarhammerClass } from './SistemaWarhammerEspadaDaPerdicao/ClasseWarhammer/SonSpaceMarineWarhammerClass';
import { SonUltramarineClass } from './SistemaWarhammerEspadaDaPerdicao/ClasseWarhammer/SonUltramarineClass';
import { IWarhammer } from './SistemaWarhammerEspadaDaPerdicao/InterfaceWarhammer/WarhammerInterface.interface';
import { SonSpaceWolfClass } from './SistemaWarhammerEspadaDaPerdicao/ClasseWarhammer/SonSpaceWolfClass';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NbThemeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Sistema de guerreiros Sayajin';

  App: string = "ESTUDO DE CLASSES - Em angular com typescript";
  
  // DragonBall - Interface
  SonGoku: IGuerreiroSaiyajin | undefined;  
  SonVegeta: IGuerreiroSaiyajin | undefined;
  SonBroly: IGuerreiroSaiyajin | undefined;

  // Bleach - Interface
  Ichigo: IShinigami | undefined;
  Rukia: IShinigami | undefined;
  ZempatZaraki: IShinigami | undefined;

  // Warhammer - Interface
  SonWarhammerClass: IWarhammer | undefined;
  SonUltramarineClass: IWarhammer | undefined;
  SonBloodAngelClass: IWarhammer | undefined;
  SonSpaceWolfClass: IWarhammer | undefined;

  constructor() { }

  ngOnInit() {

    // DragonBall - Classes
    this.SonGoku = new SonGoKuSaiyajin('Son Goku', 10000, 10000, 'Base');
    this.SonVegeta = new SonVegetaSayajin('Son Vegeta', 9000, 9000, 'Base');
    this.SonBroly = new SonBrolySayajin('Son Broly', 10000, 10000, 'Base', 10000);

    // Bleach - Classes
    this.Ichigo = new SonIchigo('Ichigo Kurosaki', 10000, 10000, 'Zanpakutou');
    this.Rukia = new SonRukia('Rukia Kuchiki', 9000, 9000, 'Zanpakutou');
    this.ZempatZaraki = new SonSHimpatoZaraki('Renji Abarai', 8000, 8000, 'Zanpakutou');

    // Warhammer - Classes
    this.SonWarhammerClass = new SonSpaceMarineWarhammerClass(
      'Warhammer', 10000, 10000, 
      'Espada', 'Armadura', 'Azul', 10000, 
      10000, 10000, 10000, 10000, 10000);

    this.SonUltramarineClass = new SonUltramarineClass(
      'Ultramarine', 10000, 10000, 
      'Espada', 'Armadura', 'Azul', 10000, 
      10000, 10000, 10000, 10000, 10000);

      this.SonBloodAngelClass = new SonBloodAngelClass(
        'BloodAngel', 10000, 10000, 
        'Espada', 'Armadura', 'Azul', 10000, 
        10000, 10000, 10000, 10000, 10000);

      this.SonSpaceWolfClass = new SonSpaceWolfClass(
        'SpaceWolf', 10000, 10000, 
        'Espada', 'Armadura', 'Azul', 10000, 
        10000, 10000, 10000, 10000, 10000);


  } 

  

}









