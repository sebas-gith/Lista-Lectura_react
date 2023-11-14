const Header = ({count = 0}) => {
    return <header>
        <h1>{count ? 'Con': 'Sin'} libros en la lista</h1>
    </header>
}

export default Header