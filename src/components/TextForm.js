import React,{useState} from 'react'
export default function TextForm(props) {
  const handleOnchange = (event) =>{
    console.log("OnChange");
    setText(event.target.value);
}
    const handleUpClick = () =>{
        let newText=text.toUpperCase();
        setText(newText);
      props.showAlert("Up","success");
    }
  
    const handlelowClick =() =>{
      let newText =text.toLowerCase();
      setText(newText);
      props.showAlert("low","success");

    }
    const copytoClipboard= () =>{
      navigator.clipboard.writeText(text)
      .then(() => {
        alert('Text copied to clipboard!');
      })
    }
    const [text, setText] = useState('')

  return (
    <>
      
    <div className="container" style={{color:props.mode === 'dark'?'white':'black'}}>
 <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnchange} style={{backgroundColor:props.mode === 'dark'?'#042743':'white', color:props.mode === 'dark'?'white':'black'}} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-1" onClick={handlelowClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-1" onClick={copytoClipboard}>Copy to clipboard</button>


    </div>
    <div className="container my-3" style={{color:props.mode === 'dark'?'white':'dark'}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").length} words and {text.length} charecters</p>
      <p><b>{(text.split(" ").length)*0.008}</b> Minutes</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter the text to preview"}</p>
    </div>
    </>
  )
}



