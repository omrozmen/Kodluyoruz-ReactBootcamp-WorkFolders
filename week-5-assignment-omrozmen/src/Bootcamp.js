import React, { useMemo, useState, useCallback } from "react"
import Button from "./components/button";

const bgg = window.getComputedStyle(document.body, null).getPropertyValue('background-color');
const bgs = "#104fcd"
const bgd = "#210fcd"
const bga = "#fcd"



function Bootcamp() {
    const [title, setTitle] = useState("Bootcamp ");
    const [text, setText] = useState("");
    const [color, setColor] = useState(bgg)
    const colorMemo = useMemo(() => (color), [color]);

    const memoColor = () => {
        if (color == bgg) {
            setColor(bgd)
        }
        else {
            setColor(bgg)
        }
    };

    const changeTitle = () => {
        setTitle("Bootcamp React");
    }

    const changeText = () => {
        setText(`${text ? "hello world" : "deneme"}`);
    }

    const changeColor = useCallback(() => {

        if (color == bgg) {
            setColor(bgs)
        }
        else {
            setColor(bgg)
        }
    })

    console.log("Function Component Render edildi.")
    console.log("color", color)
    console.log("color", color)


    return (
        <div className="container" style={{ backgroundColor: color }}>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title"> {title} </h3>
                            <div className="container">
                                <p>
                                    <b>
                                        {text}
                                    </b>
                                </p>
                            </div>
                        </div>
                    </div>
                    <hr />

                    <div className="container">
                        <div className="row">
                            <div className="col-md-3"><Button onClick={changeTitle}>Başlık Değiştir.</Button>
                            </div>
                            <div className="col-md-3"><Button onClick={changeText}>
                                Yazıyı Değiştir.
                            </Button></div>
                            <div className="col-md-3"><Button onClick={changeColor}>
                                useCallBack.
                            </Button>
                            </div>
                            <div className="col-md-3"><Button onClick={memoColor}>
                                useMemo.
                            </Button>
                                <h3>
                                    {colorMemo}
                                </h3>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <div className="container">
                <div>
                </div>
            </div>
        </div>
    )

}

class ReactBootcamp extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            title: "Bootcamp React",
            bgColor: bgg
        };
    }
    changeColor = () => {
        this.setState({
            bgColor: bga
        })
    }

    render() {
        console.log("render", this.state)
        return (
            <div className="container" style={{ backgroundColor: this.state.bgColor }}>
                <h3>{this.state.title}</h3>
                <br />
                <Link title={"Link"} />
                <br />
                <Button onClick={this.changeColor}>
                    Renk Değiştir.
                </Button>
                <hr />
                <Bootcamp />
            </div>
        )
    }
}

class Link extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: ""
        }
    }
    // Yeniden render etmedi
    static getDerivedStateFromProps(props) {
        console.log("getDerivedStateFromProps", props)
        return {
            title: props.title
        }
    }
    render() {
        console.log("Link render edildi.")
        return (
            <div className="container">
                <a href="#">
                    {this.state.title}
                </a>
            </div>
        )
    }
}


export default ReactBootcamp
