import React, { Component } from 'react'
import './Calculator.css'
import Button from '../components/Buttton'
import Display from '../components/Display'
export default class Calculator extends Component {
    constructor(props){
        super(props)
        this.clearMemory = this.cleanMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)
    }
    cleanMemory(){
        console.log("Limpar memória")
    }
    setOperation(op){
        console.log(op)
    }
    addDigit(dig){
        console.log(dig)
    }
    render() {
        const setOperation = op =>{this.setOperation(op)};
        const addDigit = dig =>{this.addDigit(dig)};

        return (
            <div className="calculator">
                <Display  value={100}/>
                <Button label="AC" click={this.cleanMemory} triple/>
                <Button label="/" click={this.setOperation} operation/>
                <Button label="7" click={this.addDigit}/>
                <Button label="8" click={this.addDigit}/>
                <Button label="9" click={this.addDigit}/>
                <Button label="*" click={this.setOperation} operation/>
                <Button label="4" click={this.addDigit}/>
                <Button label="5" click={this.addDigit}/>
                <Button label="6" click={this.addDigit}/>
                <Button label="-" click={this.setOperation} operation/>
                <Button label="1" click={this.addDigit}/>
                <Button label="2" click={this.addDigit}/>
                <Button label="3" click={this.addDigit}/>
                <Button label="+" click={this.setOperation} operation/>
                <Button label="0" click={this.addDigit} double/>
                <Button label="." click={this.addDigit}/>
                <Button label="=" click={this.setOperation} operation/>
            </div>
        )
    }
}