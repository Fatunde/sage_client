import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import { Contexts } from "./context";


const People = ({sn, name, mass, skin_color, data}) =>{
  const {set_favourite} = Contexts()

    return(
  
         <>
            <th scope="row">{sn}</th>
            <td>{name}</td>
            <td>{mass}</td>
            <td>{skin_color}</td>
            <td><Link className="btn btn-primary" to={`character?id=${sn}`}>View</Link></td>
            <td><Button  color="secondary" onClick={e => {e.preventDefault(); set_favourite(data, "add")}}>Add to Favourite</Button></td>
          </>
    )
} 

export default People