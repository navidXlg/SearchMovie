import { useContext } from "react";
import { movieContaxt } from "../context/MovieContext";

export default function  UseMovieContext(){

    return useContext(movieContaxt);
};