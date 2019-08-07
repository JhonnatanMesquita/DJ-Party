import React, {useState} from 'react'

const AddVideo = (props) => {

    const [state, setState] = useState({
        term: ''
    })

    const handleChange = (event) => {
        setState({
            term: event.target.value
        });
    };

    const handleSubmit = event => {
        event.preventDefault();
        props.handleFormSubmit(state.term);
        setState({
            term: ''
        });
    }

    return(
        <div className='search-bar ui segment'>
            <form onSubmit={handleSubmit} className='ui form'>
                <div className='field'>
                    <label htmlFor="video-search">Adicione um video</label>
                    <input onChange={handleChange} name='video-search' type="text" placeholder='https://www.youtube.com/watch?v=15JCb6P60Vw' value={state.term}/>
                </div>
            </form>
        </div>
    )

}

export default AddVideo