import { Link } from "react-router-dom"
import "../styles/home.css"

const Home = () => {
    return (
        <div className="home-container">
            <h2>MultiProyectos Con TypeScript</h2>

            <div className="home-links">
                <Link to={`/memotest`} >
                    MemoTest
                </Link>
                <Link to={`/pokemon`} >
                    Pokemon
                </Link>
                <Link to={`/wpm`} >
                    Words Per Minute
                </Link>
            </div>
        </div>
    )
}

export default Home