export interface AddPemegangSahamInterface {
    namaPemegangSaham: string;
    perseorangan: boolean;
    lokal: boolean;
    persentaseKepemilikan: number;
    active:boolean
}

export interface UpdatePemegangSahamInterface {
    id: string;
    lokal: boolean;
    persentaseKepemilikan: string;
}
