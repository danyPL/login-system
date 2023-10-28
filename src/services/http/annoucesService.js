import routes from "../../constans/http-routes";
import axios from "axios";

const AnnouceAdd = async (title, opis,discord) => {
  const res = await axios.post('http://localhost:3001/annouces', {
    title: title,
    opis: opis,
    discord:discord
  });

  return res;
};

  const AnnoucesShow = async () =>{
    let response = await fetch('http://localhost:3001/annouces',{
        method:'GET'
    })
    let json = response.json()
    return json;
}
export const AnnouncesService = {
  AnnouceAdd,
  AnnoucesShow
};
