import ButtonLink from '../../common/ButtonLink';
const AboutContent = () => {
    return (
        <div className="w-full flex flex-col justify-center desktop-st:w-2/3">
            <div className="space-y-8">
                <h3 className="text-main">I am AFzal and  I&apos;am a Fullstack Developer</h3>
                <p className="text-gray-700">Highly motivated self-thought developer seeking to launch a career building web application. High level experiance in web design and development Knowledge producing quality work. Familiar with development and deployment process of many web-based technologies such as Python, Django, DRF, JavaScript, JQuery,  Node, React, Redux and Next.js etc..</p>
            </div>
            <div className="mt-8">
                <ButtonLink text="Download CV" href="#" download/>
            </div>
           
        </div>
    )
}

export default AboutContent