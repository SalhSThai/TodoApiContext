function PageLimit(props) {
const {chageLimit,value} = props;
    return <>
        <div className="d-flex gap-2 align-items-center">
            <small className="text-muted">Display</small>
            <select
                className="form-select form-select-sm"
                style={{ width: '5rem' }}
                value={value}
                onChange={(e)=>{chageLimit(Number(e.target.value))}}
            >
                <option value='5'>5</option>
                <option value='10'>10</option>
                <option value='25'>25</option>
            </select>
        </div>
    </>
}
export default PageLimit;