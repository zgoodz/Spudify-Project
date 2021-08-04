import { useState} from 'react'

function SearchBar({ setSubmittedData}) {
    const [ dropDown, setDropDown ] = useState({dropDown:'Title'})
    const [formData, setFormData]=useState({
        search:''
    })

   
    function manageFormData(e){
        let name = e.target.name
        let value = e.target.value
        setFormData({ 
            [name]: value
        })
    }
    
    function manageDropData(e){
        let name = e.target.name
        let value = e.target.value
        setDropDown({
            [name]:value
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(e.target)
        const newFormData= {...dropDown, ...formData}
        setSubmittedData(newFormData)
        
      
      }
 

    return (
        <>
            <form onSubmit={handleSubmit} >
                <label htmlFor="search">Search by Category</label>
                <select name="dropDown" onChange={manageDropData} >
                    <option value="Title">Title</option>
                    <option value ="Artist">Artist</option>
                </select>
                <input type="text" placeholder="Search Here" name="search" value ={formData.search}onChange={manageFormData}/>
                <button>Search</button>
            </form>
        </>

    )
}

export default SearchBar