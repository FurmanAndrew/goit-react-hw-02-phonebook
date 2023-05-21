import css from './Filter.module.css'
import PropTypes from 'prop-types';

const Filter = ({search, onChange}) => {
    return(<>
    <label htmlFor='filterContacts' className={css.filerContacts}>Find contacts by name<input type="text" name="filter" value={search} onChange={onChange}/></label>
    </>)
}


Filter.propTypes = {
    search: PropTypes.string,
    onChange: PropTypes.func.isRequired,
}
export default Filter
