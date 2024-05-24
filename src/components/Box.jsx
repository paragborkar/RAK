

const Box = ({name}) => {
   let Data=localStorage.getItem("Test")
  return (
    <div className="mt-20 font-bold">
      <h1>Your Name Is: {Data?Data:" "}</h1>
    </div>
  )
}

export default Box
