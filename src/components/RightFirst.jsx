import React from 'react'
// import './RightFirst.css'

function RightFirst() {
    const styles={
        container:{
            backgroundColor: "rgb(28, 29, 32) !important",
            height: "58vh",
            borderRadius: "20px",
            margin: "10px 100px",
            width: "25%",
            alignItems: "center",
            justifyContent: "center",
            fontSize:"20px",
            textAlign:"center",
        },
        h1:{
            fontSize:"40px",
            backgroundColor:"rgb(28, 29, 32)"
        }
    }
  return (
      <div  style={styles.container}>
        <div style={{backgroundColor:"rgb(28, 29, 32)"}}>
        <svg viewBox="10 -15 100 100" xmlns="http://www.w3.org/2000/svg" style={{height:"310px", width:"440px", backgroundColor:"rgb(28, 29, 32)", borderRadius:"10px"}}>
             {/* Using g to inherit presentation attributes  */}
            <g fill="rgb(33, 35, 41)" >
                <rect x="0" y="0" width="20" height="20" rx={4} ry={4} />
                <rect x="25" y="0" width="20" height="20" rx={4} ry={4}/>
                <rect x="50" y="0" width="20" height="20" rx={4} ry={4}/>
                <rect x="75" y="0" width="20" height="20" rx={4} ry={4}/>
                <rect x="100" y="0" width="20" height="20" rx={4} ry={4}/>

                <rect x="0" y="25" width="20" height="20" rx={4} ry={4} />
                <rect x="25" y="25" width="20" height="20" rx={4} ry={4}/>
                <rect x="50" y="25" width="20" height="20" rx={4} ry={4}/>
                <rect x="75" y="25" width="20" height="20" rx={4} ry={4}/>
                <rect x="100" y="25" width="20" height="20" rx={4} ry={4}/>

                <rect x="0" y="50" width="20" height="20" rx={4} ry={4} />
                <rect x="25" y="50" width="20" height="20" rx={4} ry={4}/>
                <rect x="50" y="50" width="20" height="20" rx={4} ry={4}/>
                <rect x="75" y="50" width="20" height="20" rx={4} ry={4}/>
                <rect x="100" y="50" width="20" height="20" rx={4} ry={4}/>

                {/* <rect x="0" y="75" width="20" height="20" rx={4} ry={4} />
                <rect x="25" y="75" width="20" height="20" rx={4} ry={4}/>
                <rect x="50" y="75" width="20" height="20" rx={4} ry={4}/>
                <rect x="75" y="75" width="20" height="20" rx={4} ry={4}/>
                <rect x="100" y="75" width="20" height="20" rx={4} ry={4}/> */}
            </g>
            </svg>
        <h1 style={styles.h1}>A keyboard <br /> first experience</h1> <br />
        <p style={{backgroundColor:"rgb(28, 29, 32)"}}>Powerful shortcuts and a keyboard-first <br /> workflow means you will get to your finish line <br /> in no time</p>
        </div>
    </div>
  )
}

export default RightFirst