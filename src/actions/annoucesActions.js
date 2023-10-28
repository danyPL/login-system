import { AnnouncesService } from '../services/http/annoucesService';
import {
    ANNOUCE_ADD,
    ANNOUCE_EDIT,
    ANNOUCE_REMOVE,
    ANNOUCE_SHOW
} from './annoucesActionsTypes'
const AnnouceAdd = (annouce) => ({
    type: ANNOUCE_ADD,
    annouce
  });
  const AnnouceEdit = (annouce) => ({
    type: ANNOUCE_EDIT,
    annouce,
  });
  const AnnouceRemove = (id) => ({
    type: ANNOUCE_REMOVE,
    id,
  });
  const AnnoucesShow = () => ({
    type: ANNOUCE_SHOW,
  });


  export const Annouce_Show = () => {
    return async (dispatch, getState) => {
      const movies = await AnnouncesService.AnnoucesShow();
      
    
      
      localStorage.setItem('annouces',JSON.stringify(movies))
      
    }
  }
  const Annouce_Add = (title,opis,discord) => {
    return async (dispatch) => {
    await AnnouncesService.AnnouceAdd(title,opis,discord).then((ogloszenia)=>{
        dispatch(AnnouceAdd(ogloszenia))
       
    })

    };
  };




export default {
    Annouce_Add,
    Annouce_Show
}