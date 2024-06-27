import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getMovieById } from "../../api/movies";
import { message, Input, Divider, Row, Col } from "antd";
import { CalendarOutlined } from "@ant-design/icons";
import moment from "moment";

function SingleMovie() {

  const [movie, setMovie] = useState([]);
  const navigate = useNavigate();
  const params = useParams();
  const [date, setDate] = useState(moment().format("YYYY-MM-DD"));

  const handleDate = (e) => {
    setDate(moment(e.target.value).format("YYYY-MM-DD"));
    navigate(`/movie/${params.id}?date=${e.target.value}`);
  };

  const getData = async () => {
    try {
      const response = await getMovieById(params.id);
      if (response.success) {
        setMovie(response.data);
        console.log(response.data);
      } else {
        message.error(response.message);
      }
    } catch (err) {
      message.error(err.message);
    }
  };

  useEffect(() => {
    getData();
  }, [])


  return (
    <div className="inner-container">
        {movie && (
          <div className="d-flex single-movie-div">
            <div className="flex-Shrink-0 me-3 single-movie-img">
              <img src={movie.poster} width={150} alt="Movie Poster" />
            </div>
            <div className="w-100">
              <h1 className="mt-0">{movie.title}</h1>
              <p className="movie-data">
                Language: <span>{movie.language}</span>
              </p>
              <p className="movie-data">
                Genre: <span>{movie.genre}</span>
              </p>
              <p className="movie-data">
                Release Date:{" "}
                <span>{moment(movie.date).format("MMM Do YYYY")}</span>
              </p>
              <p className="movie-data">
                Duration: <span>{movie.duration} Minutes</span>
              </p>
              <hr />

              <div className="d-flex flex-column-mob align-items-center mt-3">
                <label className="me-3 flex-shrink-0">Choose the date:</label>
                <Input
                  onChange={handleDate}
                  type="date"
                  className="max-width-300 mt-8px-mob"
                  value={date}
                  placeholder="default size"
                  prefix={<CalendarOutlined />}
                />
              </div>
            </div>
          </div>
        )}

    </div>
  )
}

export default SingleMovie;