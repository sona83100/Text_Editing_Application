import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UPPERCASE!", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };

  const handleSentanceCase = () => {
    let newText = text.charAt(0).toUpperCase() + text.substr(1);
    setText(newText);
    props.showAlert("Converted to Sentencecase!", "success");
  };

  const handleAltCaseClick = () => {
    let newText = text.toLowerCase().split("");
    for (let i = 0; i < newText.length; i += 2) {
      newText[i] = newText[i].toUpperCase();
    }
    setText(newText.join(""));
    props.showAlert("Converted to Alternatecase!", "success");

  };

  const handleClearClick = () => {
    // console.log("Clear Text was clicked" + text);
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared!", "success");
  };

  const handleCopy = () => {
    // console.log("Text Copied");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard!", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  };

  const handleReverseText = () => {
    let newText = text.split('').reverse().join('');
    setText(newText);
    props.showAlert("Text Reversed!", "success");

  };

  const handleVowelCheck = () => {
    const count = text.match(/[aeiou]/gi).length;
    setText("You have " + count + " no of vowels");
    props.showAlert("Vowels Checked!", "success");

  };

  const handleItalicFont = () => {
    var element = document.getElementById("myBox");
    element.style.fontStyle = "italic";
    props.showAlert("Font changed to Italic!", "success");

  };

  const handleRepeatClick = () => {
    let newText = text.repeat(4);
    setText(newText);
    props.showAlert("Text repeated!", "success");
  };

  const downloadTxtFile = () => {
    const element = document.createElement("a");
    const file = new Blob([text], {
      type: "text/plain"
    });
    element.href = URL.createObjectURL(file);
    element.download = "myFile.txt";
    element.click();
    props.showAlert("Text Downloaded!", "success");
  };

  const handleSPerLineClick = () => {
    let newText = text.replaceAll('.', "\n");
    setText(newText);
    props.showAlert("Sentence per lines added!", "success");
  };

  const handleOnChange = (event) => {
    // console.log("OnChange");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  // setText("new text");

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743", }}
      >
        <h1 style={{ fontFamily: 'Josefin Sans' }}> {props.heading}</h1>
        <h6 style={{ fontFamily: 'Poppins' }}>Simply enter your text and choose the case you want to convert it to</h6>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
          ></textarea>
        </div>
        <div style={{ fontFamily: 'Poppins' }}>
          <button className="btn btn-primary m-2" onClick={handleUpClick}>
            Convert to UPPERCASE
          </button>
          <button className="btn btn-primary m-2" onClick={handleLoClick}>
            Convert to lowercase
          </button>
          <button className="btn btn-primary m-2" onClick={handleSentanceCase}>
            Convert to Sentencecase
          </button>
          <button className="btn btn-primary m-2" onClick={handleAltCaseClick}>
            Convert to AlTeEnAtEcAsE
          </button>
          <button className="btn btn-primary m-2" onClick={handleClearClick}>
            Clear Text
          </button>
          <button className="btn btn-primary m-2" onClick={handleCopy}>
            Copy Text
          </button>
          <button className="btn btn-primary m-2" onClick={handleExtraSpaces}>
            Remove Extra Spaces
          </button>
          <button className="btn btn-primary m-2" onClick={handleReverseText}>
            Reverse Text
          </button>
          <button className="btn btn-primary m-2" onClick={handleVowelCheck}>
            Vowel Check
          </button>
          <button className="btn btn-primary m-2" onClick={handleItalicFont}>
            Italic Font
          </button>
          <button className="btn btn-primary m-2" onClick={handleRepeatClick}>
            Repeat Text
          </button>
          <button className="btn btn-primary m-2" onClick={downloadTxtFile}>
            Download Text
          </button>
          <button className="btn btn-primary m-2" onClick={handleSPerLineClick}>
            Sentence Per Line
          </button>
        </div>

      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h3 style={{ fontFamily: 'Josefin Sans' }}>Text summary</h3>
        <p style={{ fontFamily: 'Poppins' }}>
          Words: {text.trim() === '' ? 0 : text.split(" ").length}  | Characters: {text.length}
        </p>
        <p style={{ fontFamily: 'Poppins' }}>{0.008 * text.split(" ").length} : Minutes to read</p>
        <h3 style={{ fontFamily: 'Josefin Sans' }}>Preview</h3>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox above to preview here..."}
        </p>
      </div>

    </>
  );
}
