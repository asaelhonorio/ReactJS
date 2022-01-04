import Item from "./Item"

function List() {
    return (
        // FORMA NORMAL
        /*<div>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
            </ul>
        </div>*/

        // FRAGMENTS
        <>
            <h3>=============================</h3>
            <h3>Lista normal utilizando Fragments</h3>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
            </ul>
            <h3>Lista utilizando PROPS</h3>
            <ul>
                <Item marca='Toyota' ano_lancamento={1998} />
                <Item marca='Ford' ano_lancamento={1995} />
                <Item marca='Ferrari'/>
                <Item/>
            </ul>
        </>

    )
}
export default List