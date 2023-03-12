import React from 'react'
import '../style/about.css'

export default function About(props) {

  return (
    <div className="about" id={props.mode}>
    <div   className="aboutBox" style={props.mode === "light"? {border: "2px solid black"} : {border: "2px solid white"}}>
      <div className="box" style={props.mode === "light"? {border: "2px solid black"} : {border: "2px solid white"}}>
        <h1 style={props.mode === "light"? {backgroundColor: "rgb(236, 242, 255)", color: "blue"} : {backgroundColor: "rgb(0, 7, 72)", color: "white"}} >First box</h1>
        <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nemo itaque repellendus dicta repellat, quisquam est odit. Consequatur ipsa illo perspiciatis. Consequuntur esse magni delectus inventore id doloribus omnis asperiores veniam! Delectus tempora minus ducimus minima aperiam perspiciatis quae possimus culpa perferendis! Voluptatum aliquam consectetur temporibus ad! Illo placeat ullam nesciunt quis repudiandae quo ut quasi perspiciatis porro nam quod adipisci hic, molestias libero totam temporibus atque eligendi! Nesciunt, dignissimos sint provident nisi, officia molestiae voluptatum repellat quidem illum tenetur fuga rerum eveniet sapiente fugit ab modi ullam perspiciatis alias.</p>
      </div>
      <div className="box" style={props.mode === "light"? {border: "2px solid black"} : {border: "2px solid white"}}>
        <h1 style={props.mode === "light"? {backgroundColor: "rgb(236, 242, 255)", color: "blue"} : {backgroundColor: "rgb(0, 7, 72)", color: "white"}} > Second box</h1>
        <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nemo itaque repellendus dicta repellat, quisquam est odit. Consequatur ipsa illo perspiciatis. Consequuntur esse magni delectus inventore id doloribus omnis asperiores veniam! Delectus tempora minus ducimus minima aperiam perspiciatis quae possimus culpa perferendis! Voluptatum aliquam consectetur temporibus ad! Illo placeat ullam nesciunt quis repudiandae quo ut quasi perspiciatis porro nam quod adipisci hic, molestias libero totam temporibus atque eligendi! Nesciunt, dignissimos sint provident nisi, officia molestiae voluptatum repellat quidem illum tenetur fuga rerum eveniet sapiente fugit ab modi ullam perspiciatis alias.</p>
      </div>
      <div className="box" style={props.mode === "light"? {border: "2px solid black"} : {border: "2px solid white"}}>
        <h1 style={props.mode === "light"? {backgroundColor: "rgb(236, 242, 255)", color: "blue"} : {backgroundColor: "rgb(0, 7, 72)", color: "white"}} >Third box</h1>
        <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nemo itaque repellendus dicta repellat, quisquam est odit. Consequatur ipsa illo perspiciatis. Consequuntur esse magni delectus inventore id doloribus omnis asperiores veniam! Delectus tempora minus ducimus minima aperiam perspiciatis quae possimus culpa perferendis! Voluptatum aliquam consectetur temporibus ad! Illo placeat ullam nesciunt quis repudiandae quo ut quasi perspiciatis porro nam quod adipisci hic,  officia molestiae voluptatum repellat quidem illum tenetur fuga rerum eveniet sapiente fugit ab modi ullam perspiciatis alias.</p>
      </div>
    </div>
    </div>
  )
}
