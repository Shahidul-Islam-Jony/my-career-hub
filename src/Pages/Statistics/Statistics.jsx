import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import JobCategorys from "../../components/JobCategorys/JobCategorys";


const Statistics = () => {
    const jobs = useLoaderData();
    // console.log(Array.isArray( jobs));
    return (
        <>
            <div className="gradient">
                <div className=" max-w-[1350px] mx-auto">
                    <Banner></Banner>
                </div>
            </div>
            <div>
               <JobCategorys jobs={jobs}></JobCategorys>
            </div>
        </>
    );
};

export default Statistics;