import React, {useState, useEffect, useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useForm} from 'react-hook-form';
import { useHistory } from 'react-router-dom';
//import { TaskListContext } from "../contexts/TaskListContext";

const DetailTask = (props) => {
    const history = useHistory();
    const {register, handleSubmit, errors} = useForm();
    const [det, setDet] = useState('');
    const [localstate, setLocalState] = useState([
                                        {texts: 'this is detail', ids:'256b47a0-8200-11ea-9b67-bb74c497e6fd'},
                                        {texts: 'this is detail 2', ids:'04e0fcd0-8211-11ea-8be1-2bbc80da7e54'}]);
    console.log('local', localstate)


    const onSubmit = (data) => {
        console.log(data);
        setLocalState([...localstate, {texts:data.text2, ids:props.location.state}])
       
    }
    localStorage.setItem('details', JSON.stringify(localstate));
     
    const clickHandler = () => {
        console.log('clicked handler');
        history.push("/task", props.location.state);
    }

    // for(var i=0; i<localstate.length; i++){
    //     if(localstate[i].ids == props.title){
    //             setDet(localstate[i].texts)
    //     }
    // }
    // var a = localstate.filter(function(hero) {
    //     return hero.texts == props.location.state;
    // });
   
    
    return (
        <div>
            {/* <h1>Detail page {b}</h1> */}
            <Container>
                <Row>
                    <Col></Col>
                    <Col>
                    <form className="form" onSubmit={handleSubmit(onSubmit)}>
                        <input
                        type="text"
                        placeholder="Add Task..."
                        name='text2' 
                        ref={register({required: true})}
                        className="task-input"
                        />
                        <br/>
                        <div className="buttons">
                        <button type="submit" className="add-task-btn">
                        ADD
                        </button>    
                        <br/>
            
                        </div>
                    </form>
                    </Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col></Col>
                        <Col> 
                      <button type='button' style={{marginLeft: '135px' , borderRadius:'3%'}} onClick={() => clickHandler() }>Show data</button>
                          </Col>
                    <Col></Col>
                </Row>
            </Container>
        </div>
    )
}

export default DetailTask
