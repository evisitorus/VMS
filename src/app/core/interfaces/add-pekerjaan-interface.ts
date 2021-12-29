export interface AddPekerjaanInterface {
    namaPekerjaan: string;
    pemberiPekerjaan: string;
    nilaiPekerjaan: string;
    tahunPekerjaan: string;
    buktiPekerjaanFilePath: string;
    lampiran: string
}

export interface UpdateRiwayatPekerjaanInterface {
    id: string;
    namaPekerjaan: string;
    pemberiPekerjaan: string;
    nilaiPekerjaan: string;
    tahunPekerjaan: string;
    buktiPekerjaanFilePath: string;
    lampiran: string
}
