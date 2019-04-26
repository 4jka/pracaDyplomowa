export interface Place
{
  id_place :number,
  name_place :string,
  path_foto :string,
  place_coordinate :string,
  marker :google.maps.Marker,
  markerUnion :any /* Temp */
}