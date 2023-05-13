const Filter = ({search, onChange}) => {
    return(<>
    <label>Find contacts by name<input type="text" name="filter" value={search} onChange={onChange}/></label>
    </>)
}

export default Filter