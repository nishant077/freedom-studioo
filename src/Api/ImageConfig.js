
import { api } from "./ApiType";

export const fetchImage = (img) => {
  
  return `${api}/images/${img.replace(/\\/g, '/')}`;
};