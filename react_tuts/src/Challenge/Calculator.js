import { render } from "@testing-library/react";
import {Add, Sub, Mux, Div} from "./Challenge4";

function Calculator(){
    return(
        <>
            <p>Sum of two no is {Add(8,73)}.</p>
            <p>sub of two no is {Sub(73,8)}.</p>
            <p>Multiplication of two no is {Mux(8,7)}.</p>
            <p>division of two no is {Div(8,4)}.</p>
        </>
    )
}
export default Calculator;