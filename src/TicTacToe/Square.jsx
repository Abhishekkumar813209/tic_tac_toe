
function Square({value,onClick}) {
  return (
    <div 
    style={{border:"1px solid",
    height:"100px",
    width:"100px",
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  }}
    className="square"
    onClick={onClick}
    >
      <h4>{value}</h4>
    </div>
  );
}

export default Square;
