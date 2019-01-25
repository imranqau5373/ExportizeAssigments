import React, { Component } from 'react';

class NewApi extends Component{

    constructor(props){
        super(props);
    }
    render(){
        let apiResponse = [];
        return 
        // <button className="button">
        //     {this.props.url}
        // </button>
        console.log(this.props.url);
            //    fetch(this.props.url)
            //    .then(response => response.json())
            //    .then(result => {
            //      this.setState({
            //        listOfPosts: result
            //      });
            //    })
            //    .catch(error => error)
    }
}
export default NewApi;