import "./SearchBar.css";
import { useState } from "react";

function SearchBar({onSubmit}) {

    //create a state to save data got from input field
    const [termToSearch, setTermToSearch] = useState('');

    const handleSubmitForm = (event) => {
        event.preventDefault();
        onSubmit(termToSearch);
    };

    const handleInputChange = (event) => {
        // assign event value to a state
        setTermToSearch(event.target.value);
    };

    return (
        <div className="search-bar">
            <form onSubmit={handleSubmitForm}>
                <label>Enter search term</label>
                <input value={termToSearch} onChange={handleInputChange}/>
            </form>     
        </div>
    );
}

export default SearchBar;