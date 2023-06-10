import './style/SearchBar.css'

import {useState} from 'react';

function SearchBar({onSubmit}){

    const[term,setTerm] = useState('');



    const handleFromSubmit =(event)=>{
       event.preventDefault();
       onSubmit(term);
    };

    const handleChange = (event) => {
        setTerm(event.target.value);
    };
    return(
    <div className="search-bar">
        <form onSubmit={handleFromSubmit}>
            <label>Enter Search Term</label><br/>
            <input value={term} onChange={handleChange }/>
        </form>
    </div>
    );
}
export default SearchBar;