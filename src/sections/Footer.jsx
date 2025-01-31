const Footer = () => {
    return (
        <section className="c-space pt-7 pb-3 border-t border-black-300 flex justify-end items-center flex-wrap gap-5">
            <div className="flex gap-3">
                <div className="social-icon">
                    <a href="https://www.linkedin.com/in/ashwin1596/">
                        <img src="/myassets/linkedin_logo.png" alt="linkedin" className="p-2.5" />
                    </a>
                </div>
                <div className="social-icon">
                    <a href="https://github.com/ashwin1596">
                        <img src="/myassets/github_logo.svg" alt="github" className="w-8 h-8" />
                    </a>
                </div>
                <div className="social-icon">
                    <img src="/assets/twitter.svg" alt="twitter" className="w-1/2 h-1/2" />
                </div>
            </div>
        </section>
    )
}
export default Footer
