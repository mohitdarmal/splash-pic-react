import React, {Component} from "react";

class Search extends Component {
  constructor (props) {
    super(props);
    this.state = {
      inputValue : "",
    }
  }
 
onInputChange = (e) => {
  this.setState({inputValue : e.target.value});
}

onInputSubmit = (e) => {
  e.preventDefault();
  this.props.onSubmit(this.state.inputValue)
  // console.log();
}

  render() {
    // console.log(this.props);
    return (
      <div>
       <div className="container mt-5">
         <form onSubmit={this.onInputSubmit}>
          <div className="form-group">
            <label forhtml="search">Search Images</label>
             <input type="text" className="form-control" id="search" aria-describedby="textHelp" placeholder={this.props.placeholder.name} onChange={this.onInputChange} />   
          </div>
        </form>
        </div>
      </div>
    )
  }
}

export default Search;