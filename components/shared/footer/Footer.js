const LoginFooter = () => {
    return (
        <div className="login-footer py-1 space-y-1">
            <div className="space-x-6 desktop-st:space-x-12">
                <a
                    href="https://www.facebook.com/GamerZonei5"
                    className="text-white cursor-pointer transition-color duration-200 hover:text-sec-lg"
                    target="_blank"
                    rel="noopener noreferrer">
                    <i className="fab fa-facebook-square text-3xl transition-transform duration-200 hover:scale-125" />
                </a>
                <a
                    href="#afzal"
                    className="text-white cursor-pointer transition-color duration-200 hover:text-sec-lg"
                    target="_blank"
                    rel="noopener noreferrer">
                    <i className="fab fa-twitter-square text-3xl transition-transform duration-200 hover:scale-125"></i>
                </a>
                <a
                    href="https://www.linkedin.com/in/afzal-saiyed-b25004200/"
                    className="text-white cursor-pointer transition-color duration-200 hover:text-sec-lg"
                    target="_blank"
                    rel="noopener noreferrer">
                    <i className="fab fa-linkedin text-3xl transition-transform duration-200 hover:scale-125" />
                </a>
                <a
                    href="https://www.instagram.com/afzal__saiyed/"
                    className="text-white cursor-pointer transition-color duration-200 hover:text-sec-lg"
                    target="_blank"
                    rel="noopener noreferrer">
                    <i className="fab fa-instagram text-3xl transition-transform duration-200 hover:scale-125" />
                </a>
                <a
                    href="https://www.youtube.com/channel/UCqHpah7p2NjkLxywQfG0d-Q"
                    className="text-white cursor-pointer transition-color duration-200 hover:text-sec-lg"
                    target="_blank"
                    rel="noopener noreferrer">
                    <i className="fab fa-youtube text-3xl transition-transform duration-200 hover:scale-125" />
                </a>
                <a
                    href="https://github.com/gmrzone"
                    className="text-white cursor-pointer transition-color duration-200 hover:text-sec-lg"
                    target="_blank"
                    rel="noopener noreferrer">
                    <i className="fab fa-github text-3xl transition-transform duration-200 hover:scale-125" />
                </a>
            </div>
            <div className="text-white text-sm desktop-st:text-md">&#169; 2019-2021 CoreCare Technologies Pvt Ltd</div>
        </div>
    );
};

export default LoginFooter;
