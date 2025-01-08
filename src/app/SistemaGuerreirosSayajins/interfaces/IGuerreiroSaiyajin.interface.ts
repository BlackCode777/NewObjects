
export interface IGuerreiroSaiyajin{
    nome: string;
    nivelPoder: number;
    ki: number;
    transformacaoAtual: string;
    
    transformarEmSuperSayajin(): void;
    transformarEmSuperSayajinFase2(): void;
    transformarEmSuperSayajinFase3(): void;
    transformarEmSuperSayajinFase4(): void;
    transformarEmSuperSayajinFaseBlue(): void;
    transformarEmSuperSayajinFaseInstintoSuperior(): void;
    transformarEmSuperSayajinFaseBlueKaioken(): void;
    atacar( alvo: IGuerreiroSaiyajin ): void;
    defender(): void;
}
