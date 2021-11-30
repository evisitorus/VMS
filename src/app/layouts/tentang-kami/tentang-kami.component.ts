import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tentang-kami',
  templateUrl: './tentang-kami.component.html',
  styleUrls: ['./tentang-kami.component.css']
})
export class TentangKamiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public card1 = "./assets/images/card1.png";
  public card2 = "./assets/images/card2.png";
  public card3 = "./assets/images/card3.png";
  public card4 = "./assets/images/card4.png";

  public mediaCards: Array<any> = [
    {
      imageSrc: this.card1,
      title:
        "Governance, Transaparansi dan Digital Procurement",
      description:
        "Digitalisasi proses procurement agar procurement lebih transparan.",
      actionsLayout: "start",
    },
    {
      imageSrc: this.card2,
      title:
        "Efisiensi dan Sinergi Berkelanjutan",
      description:
        "Efisiensi dan sinergi dari proses procurement BUMN.",
      actionsLayout: "start",
    },
    {
      imageSrc: this.card3,
      title:
        "Mendorong Pemberdayaan UMKM",
      description:
        "Mendorong dan membuka kesempatan bagi para pelaku Usaha Mikro, Kecil, Menengah dalam prooses procurement di BUMN.",
      actionsLayout: "start",
    },
    {
      imageSrc: this.card4,
      title:
        "Optimalisasi TKDN",
      description:
        "Meningkatkan Tingkat Kandungan Dalam Negri (TKDN) dalam proses procurement di BUMN.",
      actionsLayout: "start",
    },
  ];

}
