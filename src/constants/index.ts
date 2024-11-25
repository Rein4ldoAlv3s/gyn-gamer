export interface Produto {
  id: number;
  name: string;
  price?: number;
  desc?: number;
  parcel?: number;
  img: string;
  rating: number;
  descricao: string[]
}

export const PRODUTOS: Produto[] = [
  {
    id: 1,
    name: "TRAVA P/NOTEBOOK C/CHAVE TR0001",
    price: 25.90,
    desc: 23.00,
    parcel: 23.50,
    img: "https://images.tcdn.com.br/img/img_prod/1214924/trava_p_notebook_c_chave_tr0001_19524_1_6a1a53146c9ae27859a40eb406ce7c87.png",
    rating: 4.3,
    descricao: [
      "Facilidade de uso: Basta passar o cabo por um objeto fixo e prender o cadeado no notebook para garantir a segurança do seu dispositivo.",
      "Material resistente: O corpo da trava é feito de aço de alta qualidade, garantindo durabilidade e resistência.",
      "Segurança: O sistema de chave com segredo oferece maior proteção contra violações.",
      "Comprimento do cabo: Aproximadamente 1 metro, proporcionando flexibilidade na hora de fixar a trava.",
      "Peso leve: Com apenas 0,140 kg, a trava é fácil de transportar",
      "Acompanha duas chaves: Para maior comodidade e segurança."
    ]
  },
  {
    id: 2,
    name: "NOTEBOOK LENOVO IDEAPAD 15IAU7 I3-1215U 4GB SSD 256GB 15.6 WIN 11",
    price: 2499.60,
    desc: 2424.61,
    parcel: 2429.00,
    img: "https://images.tcdn.com.br/img/img_prod/1214924/notebook_lenovo_ideapad_15iau7_i3_1215u_4gb_ssd_256gb_15_6_win_11_23768_1_513611001e1d2d3005d73f02b4101fa8.jpeg",
    rating: 4.7,
    descricao: [
      "- Processador: Intel Core i3-1215U 6 Cores / 8 Threads",
      "- Cor: Cinza",
      "- Processador (Clock): 1.2GHz (4.4GHz Max Turbo)",
      "- Armazenamento: SSD 256GB",
      "- Placa Gráfica: Intel UHD Graphics",
      "Tela - Tamanho: 15.6”"
    ]
  },
  {
    id: 3,
    name: "NOBREAK 720VA INTELBRAS XNB MONO 220V/220V",
    price: 679.90,
    desc: 659.50,
    parcel: 665.00,
    img: "https://images.tcdn.com.br/img/img_prod/1214924/nobreak_720va_intelbras_xnb_mono_220v_220v_21965_1_5d62be30fa01209571c79d8243c662fd.png",
    rating: 4.5,
    descricao: [
      "Potência de pico: 720 VA / 360 W",
      "Tensão nominal de entrada: 220 V~",
      "Frequência: 50 / 60 Hz ±5 Hz",
      "Frequência no modo Bateria: 50 / 60 Hz ±1 Hz"
    ]
  },
  {
    id: 4,
    name: "CADEIRA GAMER THUNDERX3 BC3 ADMIRAL CAMUFLADO/AZUL",
    price: 999.90,
    desc: 969.90,
    parcel: 971.00,
    img: "https://images.tcdn.com.br/img/img_prod/1214924/cadeira_gamer_thunderx3_bc3_admiral_camuflado_azul_23331_1_7b10fecf772f747d27e756519cce038f.png",
    rating: 4.2,
    descricao: [
      "Dimensões: Geral: 66 x 70 x 125-135 cm Encosto: 56 x 83 cm Assento: 54 x 54 x 47-57 cm Braços: 66 x 61-78 cm",
      "Material: Poliuretano, aço, metal, nylon, espuma",
      "Apoio de braço: bidirecional",
      "Ajuste de inclinação do encosto: 135º",
      "Peso máximo recomendado: 120 kg",
      "Rodinhas: nylon, 65mm",
    ]
  },
  {
    id: 5,
    name: "SUPORTE NOTEBOOK MULTILASER VERTICAL AC166",
    price: 45.90,
    desc: 44.52,
    parcel: 45.00,
    img: "https://images.tcdn.com.br/img/img_prod/1214924/suporte_notebook_multilaser_vertical_ac166_17875_1_b19587a08da25e37c7af521bf4a34eb2.png",
    rating: 4.0,
    descricao: [
      "Cor: Preto",
      "Conteúdo da Embalagem: 1 Cooler para notebook",
      "Largura do produto: 36.5cm",
      "Altura do produto: 37cm",
      "Comprimento do produto: 3.3cm"
    ]
  },
  {
    id: 6,
    name: "MOUSE SEM FIO LENOVO ESSENTIAL COMPACT PRETO",
    price: 89.90,
    desc: 87.20,
    parcel: 88.00,
    img: "https://images.tcdn.com.br/img/img_prod/1214924/mouse_sem_fio_lenovo_essential_compact_preto_23572_1_bbbb864e6cd1a6220fcc6cca40113174.jpg",
    rating: 4.1,
    descricao: [
      "Temperatura máxima de operação: 50 graus Celsius (122 F)",
      "Temperatura mínima de operação: 0 grau Celsius (32 F)",
      "Umidade relativa máxima (%): 90%",
      "Umidade relativa mínima (%): 10%",
      "Alimentação: Bivolt"
    ]
  },
  {
    id: 7,
    name: "RADIO COMUNICADOR INTELBRAS CX. 2UND RC 4002",
    price: 299.90,
    desc: 290.90,
    parcel: 295.00,
    img: "https://images.tcdn.com.br/img/img_prod/1214924/radio_comunicador_intelbras_cx_2und_rc_4002_23781_1_1d75c8470d041acb2d901ca24d186d7b.png",
    rating: 4.4,
    descricao: [
      "Faixa de frequência: 462,5625 – 467,7125 Mhz",
      "Potência nominal: 500 mW",
      "Quantidade de canais / Subcanais: 26 / 121 (38 CTCSS e 83 DCS)",
      "Tempo de carga: 7 horas (com as pilhas recarregáveis que acompanham o produto)",
      "Temperatura de operação: 0ºC a 45ºC"
    ]
  },
  {
    id: 8,
    name: "MONITOR LED 21.5 BRAZILPC 22WR-75 FHD 75HZ PRETO WIDESCREEN BOX",
    price: 599.90,
    desc: 581.90,
    parcel: 585.00,
    img: "https://images.tcdn.com.br/img/img_prod/1214924/monitor_led_21_5_brazilpc_22wr_75_fhd_75hz_preto_widescreen_box_if_23766_1_024137911c0265c113912377542da87c.png",
    rating: 4.6,
    descricao: [
      "Tamanho da Tela: 21.5\" WIDESCREEN",
      "Formato de Tela: 16:9",
      "Resolução (máx): 1920*1080 PX",
      "Brilho: 300cd/m2",
      "Contraste: 3000:1 (Tip.)"
    ]
  },
  {
    id: 9,
    name: "TECLADO USB C3TECH PRETO KB-M11BK",
    price: 39.90,
    desc: 38.70,
    parcel: 39.00,
    img: "https://images.tcdn.com.br/img/img_prod/1214924/teclado_usb_c3tech_preto_kb_m11bk_22144_1_9689ba32880fed504a8f784ad48e77cb.png",
    rating: 3.9,
    descricao: [
      "Cor: Preto",
      "Conexão: USB",
      "Layout: padrão português brasileiro ABNT2",
      "Funções: Multimídia",
      "Sistema: anti-respingo",
      "Teclas: baixas slim"
    ]
  },
  {
    id: 10,
    name: "PLACA VIDEO 6GB PCYES GTX1660 SUPER DDR6 192BITS FULL SIZE DUAL FAN",
    price: 1599.90,
    desc: 1551.90,
    parcel: 1555.00,
    img: "https://images.tcdn.com.br/img/img_prod/1214924/placa_video_6gb_pcyes_gtx1660_super_ddr6_192bits_full_size_dual_fan_22760_1_ec423c49aa72fd9d97f5f48b05817f2e.jpg",
    rating: 4.8,
    descricao: [
      "Chipset: TU116",
      "CUDA Cores: 1408",
      "Base clock: 1530 MHz",
      "Boost clock: 1830 MHz",
      "Tipo de memória: GDDR6",
      "Memória: 6GB",
      "Velocidade da memória: 14Gbps",
      "Interface de memória: 192 bits",
      "Largura de banda: 336 (GB/s)",
      "Energia da placa: 125W",
      "Dimensões da placa: 235 x 115 x 40 mm",
      "Largura: 2 slots",
      "Cooler: Dual Fan",
      "Saídas de vídeo: DisplayPort 1.4 + HDMI 2.0b + DVI"
    ]
  },
  {
    id: 11,
    name: "SSD MSI SPATIUM S270 480GB, 2.5'' SATA III",
    price: 229.90,
    desc: 223.00,
    parcel: 225.00,
    img: "https://images.tcdn.com.br/img/img_prod/1214924/ssd_480gb_msi_sata_s270_23713_1_ae16c0b2b8e08b0d6464e6d967f26c1e.jpeg",
    rating: 4.5,
    descricao: [
      "Capacidade de Armazenamento: 480GB",
      "Tipo: SSD (Solid State Drive)",
      "Formato: 2,5 polegadas",
      "Espessura: 7mm",
      "Interface: SATA III (6Gbps)",
      "Velocidade de Leitura: Até 500MB/s",
      "Velocidade de Gravação: Até 450MB/s",
      "Durabilidade (TBW): 300 TBW (aproximado)",
      "MTBF (Mean Time Between Failures): 1,5 milhões de horas"
    ]
  }
];