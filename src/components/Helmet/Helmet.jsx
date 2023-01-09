const Helmet = ({title, children}) => {
    document.title = `ePizza - ${title}`;
    return <div className='w-100'>{children}</div>;
};

export default Helmet;