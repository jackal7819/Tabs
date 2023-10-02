import { useEffect, useState } from 'react';

const URL_TABS = 'https://course-api.com/react-tabs-project';

const App = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [jobs, setJobs] = useState([]);

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
    return <h2>Tabs Starter</h2>;
};
export default App;
