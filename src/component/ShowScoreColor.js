import React from 'react';

export default class ShowScoreColor extends React.PureComponent{
    render(){
        const {score}=this.props;
        let lineColor;
        if(score>=4){
            lineColor="green";
        }
        else if(score>=2 && score<4){
            lineColor="orange";
        }
        else{
            lineColor="red";
        }
        const style={
            background:lineColor,
            height:"4px",
            width:"60px",
            "border-radius":"30px",
            'margin-left':'120px',

        }
        return (
            <div className='score-container'>
                <div style={{"font-size":"16px"}}>{score}</div>
                <span  style={style}></span>
            </div>
        )
    }
}