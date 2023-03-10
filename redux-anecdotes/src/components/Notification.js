import { connect } from "react-redux"

const Notification = (props) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  if (props.notifications !== null) {
    return <div style ={style}>{props.notifications}</div>
  }
}

const mapStateToProps = (state) => {
  return {
    notifications: state.notifications
  }
}

export default connect(
  mapStateToProps
)(Notification)