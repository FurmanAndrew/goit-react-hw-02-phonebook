import css from './Filter.module.css'

const Filter = ({search, onChange}) => {
    return(<>
    <label htmlFor='filterContacts' className={css.filerContacts}>Find contacts by name<input type="text" name="filter" value={search} onChange={onChange}/></label>
    </>)
}

export default Filter
