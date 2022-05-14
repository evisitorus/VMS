import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventEmitterService } from 'src/app/core/services/event-emitter.service';
import { TenderService } from 'src/app/core/services/tender.service';
import { dictionary } from 'src/app/dictionary/dictionary';

@Component({
  selector: 'app-tender-info',
  templateUrl: './tender-info.component.html',
  styleUrls: ['./tender-info.component.css']
})
export class TenderInfoComponent implements OnInit {

  public data: any = {};
  public popUpTitle: string = "Info Tender";
  public popUpMessage: string = "";
  public labelName: any = {
    tenderUmum: "Tender Umum",
    namaTender: "Nama Tender",
    nomorTender: "Nomor Tender",
    metodeTender: "Metode Tender",
    kategoriBidangUsaha: "Kategori Bidang Usaha",
    waktuAkhirPendaftaran: "Waktu Akhir Pendaftaran",
    waktuAkhirKirimPenawaran: "Waktu Akhir Kirim Penawaran",
    lokasiTender: "Lokasi Tender",
    catatanUntukPenyedia: "Catatan Untuk Penyedia",
    targetCapaianTKDN : "Target Capaian TKDN",
    tanggalDiterbitkanTender : "Tanggal diterbitkan Tender",
    informasiPICPengadaan: "Informasi PIC Pengadaan",
    namaPICPengadaan: "Nama PIC Pengadaan",
    email: "Email",
    phone: "Phone",
    handphone: "Handphone",
    informasiBUMNPenyelenggara: "Informasi BUMN Penyelenggara",
    namaBUMN: "Nama BUMN",
    portalPengadaan: "Portal Pengadaan",
  }
  
  id!: string | null;

  constructor(
    private tenderService: TenderService,
    private route: ActivatedRoute,
    private eventEmitterService: EventEmitterService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.tenderService.getDetailTender(this.id!).subscribe(
      (res) => {
        this.data = res.data.tender;
      },
      () => {
        this.popUpMessage = dictionary.fetch_data_tender_failed;
        this.triggerPopUp();
      }
    );
  }

  triggerPopUp() {
    this.eventEmitterService.trigger();
  }

}
