declare module Sectors {
  interface Sector {
    type: number // тип сектора
    max_unit_limit: number //лимит размещения войск в секторе
    count_unit_limit: number
    max_build_limit: number //лимит зданий в секторе
    count_build_limit: number
    bg_img: string | null // заднее изображение сектора
    player_id: number
    colors_type: string
  }
}
