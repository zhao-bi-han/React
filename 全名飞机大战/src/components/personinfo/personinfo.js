import React,{Component} from 'react';
import './personinfo.css';
import '../../assert/css/animate.min.css';
class Personinfo extends Component{
    constructor(){
        super()
    }

    render(){
        let current=this.props.currentPerson.personInfo;
        return(
            <div className="select-left" style={{height:this.props.screenY-100}}>
               <div className="person-info animated fadeInLeft">                  
                   <h2>{current.infoTitle}</h2>
                    <p>{current.infoContent}</p>               
               </div>
               <div className="personImg animated fadeInLeft">
                   <img src={require('../../assert/img/'+current.infoImg)}/>
               </div>
            </div>
        )
    }
}

export default Personinfo;