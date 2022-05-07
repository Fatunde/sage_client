import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Contexts } from "../component/context";
import { Container, Card, Button } from "reactstrap"


const Character = () =>{
    const location = useLocation();
    const navigate = useNavigate()
    const id = new URLSearchParams(location.search).get("id");
    const { state, getCharacter } = Contexts()

    useEffect(() => {
        if(id){
            getCharacter(id)
        }
    }, [id])

    return(
     <Container className="">
    <Button onClick={e => {e.preventDefault(); navigate(-1)}}>Go Back</Button>
     <Card className="character-container text-center w-50 m-auto">
        <div className="mt-3">
         <h3>Full name</h3>
         <p>{state.character.name || ""}</p>
         </div>
         <div className="mt-3">
         <h3>Mass</h3>
         <p>{state.character.mass || ""}</p>
         </div>
         <div className="mt-3">
         <h3>Birth Year</h3>
         <p>{state.character.birth_year || ""}</p>
         <div className="mt-3">
         <h3>Skin Color</h3>
         <p>{state.character.skin_color || ""}</p>
         <div className="mt-3">
         <h3>Eye Color</h3>
         <p>{state.character.eye_color || ""}</p>
         </div>
         </div>
         </div>
     </Card>
      </Container>
    )
} 

export default Character