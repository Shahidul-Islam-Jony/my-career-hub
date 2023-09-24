import JobCategory from "../JobCategory/JobCategory";
import PropTypes from 'prop-types'

const JobCategorys = ({ jobs }) => {
    // console.log( jobs);

    return (
        <div>
            <div className="text-center mt-28">
                <h2 className="text-5xl font-extrabold mb-2">Job Category List</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-28 gap-10">
                {
                    jobs.map(job => <JobCategory key={job.id} job={job}></JobCategory>)
                }
            </div>
        </div>
    );
};

JobCategorys.propTypes = {
    jobs: PropTypes.array
}

export default JobCategorys;