import '../style/AppDetail.css'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import myData from '../data/data'
import { BsFillArrowLeftSquareFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function AppMovieDetail() {

    const { id } = useParams()
    const [name, setName] = useState("")
    const [about, setAbout] = useState("")
    const [year, setYear] = useState("")
    const [language, setLanguage] = useState("")
    const [image, setImage] = useState("")

    useEffect(() => {
        //เริ่มดึงข้อมูล
        const result = myData.find((item) => item.id === parseInt(id))

        setName(result.name)
        setAbout(result.about)
        setYear(result.year)
        setLanguage(result.language)
        setImage(result.image)
    }, [id])

    return (
        <div className='container-detail-movie'>

            <div className='icon-back'>
                <Link to="/" className="link-back">
                    <p><BsFillArrowLeftSquareFill /></p>
                    <p>Back</p>
                </Link>
            </div>

            <div className='movie'>
                <div className='detaile-img'>
                    <img src={image} alt="" />
                </div>

                <div className='detaile-movie'>
                    <p><strong>Name</strong> : {name}</p>
                    <p><strong>About</strong> : {about}</p>
                    <p><strong>Year</strong> : {year}</p>
                    <p><strong>Language</strong> : {language}</p>
                </div>
            </div>
        </div>
    )
}
export default AppMovieDetail