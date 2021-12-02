import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-grid-banner',
  templateUrl: './grid-banner.component.html',
  styleUrls: ['./grid-banner.component.css']
})
export class GridBannerComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
  }

  public avatarSrc =
  "https://previews.123rf.com/images/aquir/aquir1311/aquir131100316/23569861-sample-grunge-red-round-stamp.jpg";
  public imageSrc =
    "https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/sofia.jpg";

  public card1 = "./assets/images/card1.png";
  public card2 = "./assets/images/card2.png";
  public card3 = "./assets/images/card3.png";
  public card4 = "./assets/images/card4.png";

  public mediaCards: Array<any> = [
    {
      imageSrc:
        "./assets/images/pnm.png",
      title:
        "Governance, Transaparansi dan Digital Procurement",
      description:
        "Digitalisasi proses procurement agar procurement lebih transparan.",
      actionsLayout: "start",
    },
    {
      imageSrc:
        "./assets/images/Pegadaian.png",
      title:
        "Efisiensi dan Sinergi Berkelanjutan",
      description:
        "Efisiensi dan sinergi dari proses procurement BUMN.",
      actionsLayout: "start",
    },
    {
      imageSrc:
        "./assets/images/pln.png",
      title:
        "Mendorong Pemberdayaan UMKM",
      description:
        "Mendorong dan membuka kesempatan bagi para pelaku Usaha Mikro, Kecil, Menengah dalam prooses procurement di BUMN.",
      actionsLayout: "start",
    },
    {
      imageSrc:
        "./assets/images/telkom.png",
      title:
        "Optimalisasi TKDN",
      description:
        "Meningkatkan Tingkat Kandungan Dalam Negri (TKDN) dalam proses procurement di BUMN.",
      actionsLayout: "start",
    },
    {
      imageSrc: "./assets/images/pertamina.png"
    }
  ];

}
