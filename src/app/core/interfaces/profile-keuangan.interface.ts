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
    lampiran: string,
    filename: string,
    submitDate: Date
}

export interface ProfileKeuanganInterface {
    namaBank: string,
    cabang: string,
    nomorRekening: string,
    namaPemilikRekening: string,
    modalDasar: number,
    modalDitempatkan: number
}