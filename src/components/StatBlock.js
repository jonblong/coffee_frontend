function StatBlock(props) {
    return (
      <div className="StatBlock">
          <h2 className="StatNum">{props.num}</h2>
          <h3 className="StatName">{props.name}</h3>
      </div>
    );
  }
  
  export default StatBlock;