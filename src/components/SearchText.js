
function SearchText(props) {
const {onChange,value,onClear} = props;

    return (
        <div className="input-group">
            <input type="text" className="form-control" value={value} onChange={(event)=>onChange(event)}/>
            <button className="btn btn-outline-secondary" onClick={onClear} >
                <i className="fa-solid fa-xmark" />
            </button>
        </div>

    )
}
export default SearchText;