import './footer.css'

function Footer(props) {
  const { autor } = props
  const anoAtual = (new Date()).getFullYear()
  return (
    <footer className='rodape'>
        <p>Dev - {autor} {anoAtual} </p>
    </footer>
  )
}

export default Footer
