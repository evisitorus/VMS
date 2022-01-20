export interface ProfileInformationInterface {
  name: string;
  initial: string;
  jenisBadanUsaha: string;
  statusBadanUsaha: string;
  tipeBadanUsaha: string;
  kategoriBadanUsaha: string;
  jenisKegiatanUsaha: string;
  jenisPenyediaUsaha: string;
  npwp: string;
  nib: string;
  bidangUsaha: string;
  oragnisasiHimpunan: string;
  bumnPengampu: string;
  website: string;
  // jumlahKaryawanTotal: string;
  // jumlahKaryawanLokal: string;
  // jumlahKaryawanAsing: string;
  phoneNumber: string;

  alamatPerusahaan?: string;
  provinsi?: string;
  kota?: string;
  kecamatan?: string;
  keluarahan?: string;
  kodePos?: string;

  file?: string;
}
