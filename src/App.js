import React, { Suspense } from 'react';
import './App.css';
import Loading from './components/loading';
const MyCv = React.lazy(() => import('./components/myCv'));
function App() {
    return (
        <Suspense fallback={<Loading />}>
            <div className="app">
                <MyCv />
            </div>
        </Suspense>
    );
}
export default App;
