export interface AddPemegangSahamInterface {
    email: string;
    namaPemegangSaham: string;
    perseorangan: boolean;
    lokal: boolean;
    persentaseKepemilikan: number;
}

export interface UpdatePemegangSahamInterface {
    id: string;
    lokal: boolean;
    persentaseKepemilikan: string;
}
