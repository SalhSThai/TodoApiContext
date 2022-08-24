function Sort(props) {
    const { isSort } = props;


    return <>
        <div className="d-flex gap-2 align-items-center">
            <small className="text-muted">Sort by</small>
            <select
                className="form-select form-select-sm"
                style={{ width: '8rem' }}
                onChange={(event) => isSort(event.target.value)}
            >
                <option value="">Sort</option>
                <option value="title">Title: A-Z</option>
                <option value="-title">Title: Z-A</option>
            </select>
        </div>

    </>

}
export default Sort