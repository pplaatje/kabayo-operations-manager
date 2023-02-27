export type MijnKNHSHorseDetails = {
  AnimalId: string,
  SportsName: string,
  GenderLabel: Date,
  FatherName: string,
  FatherId: string  
}

export type Horse = {
  id: string,
  friendly_name: string,
  height: number,
  mijnKNHS: MijnKNHSHorseDetails
}