import axios from 'axios';
import { gameDetailsUrl, gameScreenShotsUrl } from "../ApiTest";

export const loadDetails = (id) =>async(dispatch)=>{
   dispatch({
     type: "LOADING_DETAIL",
   });
    const detailData = await axios.get(gameDetailsUrl(id));
     const screenshotdata = await axios.get(gameScreenShotsUrl(id));
    //  console.log(gameDetailsUrl(id));
    // console.log(detailData);
    // console.log(screenshotdata);
    
 dispatch({
   type: "GET_DETAIL",
   payload: {
     game: detailData.data,
     screen: screenshotdata.data
   },
 });

}

