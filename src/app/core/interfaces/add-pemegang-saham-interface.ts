export interface AddPemegangSahamInterface {
    namaPemegangSaham: string;
    perseorangan: boolean;
    lokal: boolean;
    persentaseKepemilikan: number;
    active:boolean
}

export interface UpdatePemegangSahamInterface {
    id: string;
    namaPemegangSaham: string;
    perseorangan: boolean;
    lokal: boolean;
    persentaseKepemilikan: string;
}
