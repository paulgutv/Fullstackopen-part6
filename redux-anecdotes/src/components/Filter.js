import { connect } from "react-redux"
import { filteredWord } from '../reducers/filterReducer'

const Filter = (props) => {
  const handleChange = (event) => {
    const content = event.target.value
    props.filteredWord(content)
  }

  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange}/>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    filteredWord: (content) => {
      dispatch(filteredWord(content))
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Filter)