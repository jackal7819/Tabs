import { useEffect, useState } from 'react';

import BtnContainer from './BtnContainer';
import JobInfo from './JobInfo';

const URL_TABS = 'https://course-api.com/react-tabs-project';

const App = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [jobs, setJobs] = useState([]);
    const [currentItem, setCurrentItem] = useState(0);

    const fetchJobs = async () => {
        try {
            setIsLoading(true);
            const response = await fetch(URL_TABS);
            const newJobs = await response.json();
            setJobs(newJobs);
        } catch (error) {
            console.log(error);
        }
        setIsLoading(false);
    };

    useEffect(() => {
        fetchJobs();
    }, []);

    if (isLoading) {
        return (
            <section className='jobs-center'>
                <div className='loading'></div>
            </section>
        );
    }

    return (
        <section className='jobs-center'>
            <BtnContainer
                jobs={jobs}
                currentItem={currentItem}
                setCurrentItem={setCurrentItem}
            />
            <JobInfo jobs={jobs} currentItem={currentItem} />
        </section>
    );
};

export default App;
