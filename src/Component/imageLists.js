import React from "react";

class imageLists extends React.Component{

  onImgMouseOver = () => {
    console.log("over")
    const overStyle = {
     backgroundColor : "#000",
      transfrom: "Scale(1.1)"
    };
  }

  render() {
   const images = this.props.searchData.map((data) => {
      return (
        <div className="col-md-4 mb-4" key={data.id}>
          <a href={data.urls.raw} data-lightbox="photos" data-toggle="modal">  <img onMouseOver={this.onImgMouseOver} style={{height: '300px', width: '100%', objectFit: 'cover'}} className="img-fluid" src={data.urls.regular} alt="" /> </a>
        </div>
      )
    })
    return(
      <div className="container">
       <div className="row">
          {images}
        </div>
      </div>
    )
  }
}

export default imageLists