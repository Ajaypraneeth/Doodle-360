// import { useState } from "react";
import React from "react";
import { BsSearch } from "react-icons/bs";
import { Button } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import './Home.css';
import svc from '../images/svc.png'
import Printer from '../images/Printer.png'
import copy from '../images/copy.png'
import MyVerticallyCenteredModal from "./Add";
import Example from "./Edit";



// const[lists,setList]= useState(list)

export default function Home() {
    const [modalShow, setModalShow] = React.useState(false);
    const [modalShow1, setModalShow1] = React.useState(false)

  return (
    <div className="page">
        <div className="container-fluid">
      <span className="main px-5">Asset Management</span>
      <Button
             type="button"
             className="New-user"
             onClick={() => setModalShow(true)}> + Allocate User
           </Button>
           <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      
           
      <nav class="navbar justify-content-between">
         <p className="navbar">Show<select className="option px-2 mx-3">
            <option>10</option>
            <option>9</option>
            <option>8</option>
            <option>7</option>
            <option>6</option>
            <option>5</option>
            <option>4</option></select>Entries</p>
         <input 
          className="parent"
          type="search"
          placeholder="Search"/>
           <img className="copy" src={copy} alt="Button"/>
            <img className ="svc" src={svc} alt="Button"/>
            <img className="Printer" src={Printer} alt="Button"/>
       <i className="child">
        <BsSearch/>
      </i> 
     
</nav>

<table class="container start">
  <thead>
    <tr>
      <th className="dot p-3 border-bottom">S.no</th>
      <th className="dot p-3 border-bottom">Request Date</th>
      <th className="dot p-3 border-bottom">Employee Name</th>
      <th className="dot p-3 border-bottom">Employee id</th>
      <th className="dot p-3 border-bottom">System id</th>
      <th className="dot p-3 border-bottom">Status</th>
      <th className="dot p-3 border-bottom">Action</th>
    </tr>
  </thead>
          <tbody> <tr className="line">
                      <td>1</td>
                      <td>1 Jan 2022</td>
                      <td>AKASH K S</td>
                      <td>DB0367</td>
                      <td>00:17:f2:ca:091a</td>
                      <td>Active</td>
                      <Button
             type="button"
             className="edit"
             onClick={() => setModalShow1(true)}> Edit
           </Button>
           <Example
        show={modalShow1}
        onHide={() => setModalShow1(false)}
      />
                      <button className="delete text-white">Delete</button>
                  </tr> 
                  <tr className="line">
                      <td>2</td>
                      <td>1 Jan 2022</td>
                      <td>SRINIVASAN S</td>
                      <td>DB0367</td>
                      <td>00:17:f2:ca:091a</td>
                      <td>Active</td>
                      <button className="edit text-white"
                      onClick={() => setModalShow1(true)}>Edit</button>
                      <button className="delete text-white">Delete</button>
                  </tr> 
                  <tr className="line">
                      <td>3</td>
                      <td>1 Jan 2022</td>
                      <td>Nishtya chordia</td>
                      <td>DB0367</td>
                      <td>00:17:f2:ca:091a</td>
                      <td>Active</td>
                      <button className="edit text-white"
                      onClick={() => setModalShow1(true)}>Edit</button>
                      <button className="delete text-white">Delete</button>
                  </tr> 
                  <tr className="line">
                      <td>4</td>
                      <td>1 Jan 2022</td>
                      <td>Gayathri</td>
                      <td>DB0367</td>
                      <td>00:17:f2:ca:091a</td>
                      <td>Active</td>
                      <button className="edit text-white"
                      onClick={() => setModalShow1(true)}>Edit</button>
                      <button className="delete text-white">Delete</button>
                  </tr> 
                  <tr className="line">
                      <td>5</td>
                      <td>1 Jan 2022</td>
                      <td>MAGESHWARI</td>
                      <td>DB0367</td>
                      <td>00:17:f2:ca:091a</td>
                      <td>Active</td>
                      <button className="edit text-white"
                      onClick={() => setModalShow1(true)}>Edit</button>
                      <button className="delete text-white">Delete</button>
                  </tr> 
                  <tr className="line">
                      <td>6</td>
                      <td>1 Jan 2022</td>
                      <td>MAGESHWARI</td>
                      <td>DB0367</td>
                      <td>00:17:f2:ca:091a</td>
                      <td>Active</td>
                      <button className="edit text-white"
                      onClick={() => setModalShow1(true)}>Edit</button>
                      <button className="delete text-white">Delete</button>
                  </tr> 
                  <tr className="line">
                      <td>7</td>
                      <td>1 Jan 2022</td>
                      <td>Nishtya chordia</td>
                      <td>DB0367</td>
                      <td>00:17:f2:ca:091a</td>
                      <td>Active</td>
                      <button className="edit text-white"
                      onClick={() => setModalShow1(true)}>Edit</button>
                      <button className="delete text-white">Delete</button>
                  </tr> 
                  <tr className="line">
                      <td>8</td>
                      <td>1 Jan 2022</td>
                      <td>SRINIVASAN S</td>
                      <td>DB0367</td>
                      <td>00:17:f2:ca:091a</td>
                      <td>Active</td>
                      <button className="edit text-white"
                      onClick={() => setModalShow1(true)}>Edit</button>
                      <button className="delete text-white">Delete</button>
                  </tr> 
                  </tbody>
        </table>                                                     
    </div>
    </div>
  )  
}
