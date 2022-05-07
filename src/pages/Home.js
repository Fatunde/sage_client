import React from "react";
import { Contexts } from "../component/context";
import People from "../component/People";
import { Table, Container } from "reactstrap"


const Home = () =>{
    const { state } = Contexts()

    return(
     <Container>
        <Table>
        <thead>
          <tr>
            <th>S/N</th>
            <th>Name</th>
            <th>Mass</th>
            <th>Skin Color</th>
            <th>View</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {state.people.map((item, index) => (<tr key={index}>
           <People name={item.name} sn={index+1} skin_color={item.skin_color} mass={item.mass} data={item}/>
          </tr>))}
        </tbody>
      </Table>
      </Container>
    )
} 

export default Home