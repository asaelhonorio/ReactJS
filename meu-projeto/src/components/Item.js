import PropTypes from 'prop-types'

function Item({ marca, ano_lancamento }) {
    return (
        <>
            <li>
                {marca} - {ano_lancamento}
            </li>
        </>
    )
}

Item.propTypes={
    marca: PropTypes.string.isRequired,
    ano_lancamento: PropTypes.number.isRequired
}

// Utilizando PropType default
Item.defaultProps={
    marca: 'Adicione uma marca',
    ano_lancamento: 0
}

export default Item