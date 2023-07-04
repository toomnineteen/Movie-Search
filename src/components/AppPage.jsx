import '../data/data'
import myData from '../data/data'
import '../style/AppPage.css'
import { Link } from "react-router-dom"
import { useState } from 'react'

function AppPage() {

    const [search, setSearch] = useState("")

    //ตัวแปรเก็บการค้นหา เก็บ result ลง setFiltermyData
    //const [filtermyData, setFiltermyData] = useState([])
    //useEffect(() => {
    //กรองชื่อหนัง ค้นหาหนัง
    //const result = myData.filter((item) => item.name.includes(search))
    //setFiltermyData(result)
    //}, [search])

    return (
        <div className='container-app'>

            <div className="search">
                <input
                    type="search"
                    placeholder='Search'
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <div className='all-movie'>
                {myData
                    .filter((item) => {
                        return search.toLowerCase() === ''
                            ? item
                            : item.name.toLowerCase().includes(search);
                    })
                    .map((item => (

                        <Link to={`/Movie-Detaile/${item.id}`} key={item.id}>
                            <div className="body-movie">
                                <div className='movie-img'>
                                    <img src={item.image} alt="img" />
                                </div>
                                <div className='movie-info'>
                                    <p>{item.name}</p>
                                </div>
                            </div>
                        </Link>
                    )))}
            </div>
        </div>
    )
}
export default AppPage