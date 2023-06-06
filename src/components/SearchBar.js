import {useReact, useState} from 'react';

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
    <div>
        <form onSubmit={handleFromSubmit}>
            <input value={term} onChange={handleChange }/>
        </form>
    </div>
    );
}
export default SearchBar;