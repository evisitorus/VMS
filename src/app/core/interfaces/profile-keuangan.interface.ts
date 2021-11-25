export interface ProfileKeuanganNeracaInterface {
    tahun: number,
    aktiva: number,
    pasiva: number,
    equitas: number,
    omzet: number,
}

export interface ProfileKeuanganSPTInterface {
    tahunSPT: number,
    nomorDokumen: number,
    lampiran: number
}

export interface ProfileKeuanganInterface {
    namaBank: string,
    cabang: string,
    nomorRekening: string,
    namaPemilikRekening: string,
    modalDasar: number,
    modalDitempatkan: number
}