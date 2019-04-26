export interface Photo{
    path_foto: string;
    title: string;
}
export interface InfoPlace{
    title: string,
    description: string,
    coordinate_x: number,
    coordinate_y: number,
    foto: Array<Photo>
}

