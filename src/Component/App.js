import React from "react";
import Search from "./Search";
import Axios from "axios";
import ImageLists from "./imageLists"

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      searchData : [],
    }
  }



 onSubmit = async (value) => {
  const response = await Axios.get("https://api.unsplash.com/search/", {
    params : {
      query : value,
      per_page : 30,  
      page : 5, 
    },
    headers : {Authorization : "Client-ID 20cf64988c61c7cab0873c4413ec8af82918d07026350ece26bbfc990bb2a35e",}
   
  });

  this.setState({searchData : response.data.photos.results});
  console.log(this.state.searchData);
  console.log(value);
}

  render(){
    return(
      <div> 
         <Search placeholder={{name : "Image Name" }} onSubmit={this.onSubmit}/>
         <ImageLists searchData={this.state.searchData} />
      </div>
    )
  }
}

export default App;