
import { useEffect, useState } from "react";
import { getAllMovies } from "../../api/movies";
import { Table } from "antd";

function MovieList() {
  const [movies, setMovies] = useState([]);

  const getData = async () => {
    const response = await getAllMovies();
    const allMovies = response.data;
    setMovies(
      allMovies.map(function (item) {
        return { ...item, key: `movie${item._id}` };
      })
    );
  }

  useEffect(() => {
    getData();
  })

  const tableHeadings = [
    {
      title: "Poster",
      dataIndex: "poster",
      render: (text, data) => {
        return (
          <img src={data.poster} width="75" height="115" />
        )
      },
    },
    {
      title: "Movie Name",
      dataIndex: "title",
    },
    {
      title: "Description",
      dataIndex: "descriprion",
    },
    {
      title: "Duration",
      dataIndex: "duration",
    },
    {
      title: "Genre",
      dataIndex: "genre",
    },
    {
      title: "Release Date",
      dataIndex: "releaseDate",
      render: (text) => {
        let newDate = new Date(text);
        const formattedDate = newDate.toDateString();
        return (
          <span>{formattedDate}</span>
        )
      }
    },
    {
      title: "Language",
      dataIndex: "language",
    },
  ]

  return (
    <Table columns={tableHeadings} dataSource={movies} />
  )

}


export default MovieList;