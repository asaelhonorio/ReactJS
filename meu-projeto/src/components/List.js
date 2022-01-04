import Item from "./Item"

function List(){
    return(
        // FORMA NORMAL
        /*<div>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
            </ul>
        </div>*/

        // FRAGMENTS
        <>
            <h3>Lista normal utilizando Fragments</h3>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
            </ul>
            <h3>Lista utilizando PROPS</h3>
            <ul>
                <Item marca='Toyota'/>
            </ul>
        </>

    )
}
export default List