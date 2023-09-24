
const JobCategory = ({ job }) => {
    const {id,logo,job_title,job_type,salary} = job;
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={logo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl font-bold">{job_title}</h2>
                    <p>{job_type}</p>
                    <p>{salary}</p>
                </div>
            </div>
        </div>
    );
};

export default JobCategory;