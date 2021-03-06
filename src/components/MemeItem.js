import React , { Component } from 'react';

class MenuItem extends Component{
    render(){
        return(
                <div className= "meme-item">
                    <img className= "meme-img"
                        src= {this.props.meme.url}
                        alt ={this.props.meme.name}
                    />
                    <p className= "meme-txt">
                        {this.props.meme.name}
                    </p>
                </div>
        )
    }
};

export default MenuItem;
