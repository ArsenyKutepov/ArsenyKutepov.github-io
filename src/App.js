import './App.scss';
import HeaderSection from './components/HeaderSection';
import ServiceSection from "./components/ServiceSection";
import Expertiza from './components/Expertiza';
import PlansSection from "./components/PlansSection";
import PartnersSection from './components/PartnersSection';
import Keysi from "./components/Keysi";
import TeamsSection from "./components/TeamsSection";
import SupportSection from './components/SupportSection';
import SliderSection from "./components/SliderSection";
import FormSection from './components/FormSection';

function App() {
    return (
        <>
            <HeaderSection/>
            <ServiceSection/>
            <SupportSection/>
            <Expertiza/>
            <PlansSection />
            <Keysi/>
            <TeamsSection />
            <SliderSection />
            <PartnersSection/>
            <FormSection/>
        </>
    );
}

export default App;