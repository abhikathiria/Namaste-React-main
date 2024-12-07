const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className="flex h-16 mt-14 bg-amber-50 justify-center items-center max-[930px]:fixed max-[930px]:bottom-0 max-[930px]:w-full">
            Created By
            <i className="fa-solid fa-heart text-red-700 px-1"></i>
            <a
                href="https://www.linkedin.com/in/abhikathiriya"
                target="_blank"
                title="Abhi Kathiriya's Linkedin Profile"
                className="font-bold px-1"
            >
                Abhi Kathiriya
            </a>
            <i className="fa-solid fa-copyright px-1"></i>
            {year}
            <a
                href="https://github.com/abhikathiria/Namaste-React-main"
                target="_blank"
                title="Flavor Fusion Github Repository"
                className="px-1"
            >
                <strong>
                    Flavor<span>Fusion</span>
                </strong>
            </a>
        </div>
    );
}

export default Footer