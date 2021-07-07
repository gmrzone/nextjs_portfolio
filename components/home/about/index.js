import AboutPhoto from './AboutPhoto';
import AboutContent from './AboutContent'
const About = () => {
    return (
        <div className="mt-6 desktop-st:mt-12">
            <div className="container">
                <h2 className="text-main text-center">About</h2>
                <div className="flex flex-col text-center mt-6 desktop-st:mt-10 desktop-st:flex-row desktop-st:text-left">
                    <AboutPhoto />
                    <AboutContent />
                </div>
            </div>
        </div>
    )
}

export default About