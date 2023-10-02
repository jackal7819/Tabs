const BtnContainer = ({ jobs, currentItem, setCurrentItem }) => {
    const handleChangeCompany = (index) => {
        setCurrentItem(index);
    };

    return (
        <div className='btn-container'>
            {jobs.map((job, index) => (
                <button
                    key={job.id}
                    className={
                        index === currentItem ? 'job-btn active-btn' : 'job-btn'
                    }
                    onClick={() => handleChangeCompany(index)}>
                    {job.company}
                </button>
            ))}
        </div>
    );
};

export default BtnContainer;
