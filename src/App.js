import React, { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Loading from './components/loading';
const MyCv = React.lazy(() => import('./components/myCv'));
function App() {
    const isLoadedDes = useSelector((state) => state.api?.description?.isLoaded);
    const isLoadedAva = useSelector((state) => state.api?.info?.isLoaded);
    const isLoadedCon = useSelector((state) => state.api?.contact?.isLoaded);

    const isLoaded = isLoadedAva && isLoadedDes && isLoadedCon;

    useEffect(() => {
        console.log('Loaded: ' + isLoaded);
    }, [isLoaded]);
    return (
        <Suspense fallback={<Loading />}>
            <div className="app">
                <MyCv isLoaded={isLoaded} />
            </div>
        </Suspense>
    );
}
export default App;
