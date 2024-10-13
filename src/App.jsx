import Header from "./layout/Header.tsx";
import MainComponent from "./components/mainComponent.tsx";
import {JobProvider} from "./context/JobContext.tsx";
import Footer from "./layout/Footer.tsx";


export default function App() {
    return (
        <>
            <Header />
            <JobProvider>
                <MainComponent />
            </JobProvider>

            <Footer />
        </>
    );
}
