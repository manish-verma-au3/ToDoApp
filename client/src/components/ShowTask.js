import React from 'react';

const ShowTask = (props) => {
    var users = localStorage.getItem('details');
    var result =JSON.parse(users);
    console.log('result', result)
    return (
        <div>
            <h1>Details</h1>
            <hr/>
            <h4>
            {/* {
                result.map(x => (
                <li>{x.texts}</li>
                ))
            } */}
            {
                result.map(x => {
                    if(x.ids == props.location.state){
                    return <p>{x.texts}</p>
                    }
                }
                )
            }
            </h4>
        </div>
    )
}

export default ShowTask
