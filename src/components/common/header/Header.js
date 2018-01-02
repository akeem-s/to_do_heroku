import { connect } from 'react-redux';
import React from 'react';

export class HeaderComponent extends React.Component{
  constructor(props){
    super(props)
    this.renderTitle = this.renderTitle.bind(this);
  }

  renderTitle(){
    let listNameHtml
    this.props.listContainerReducer.activeListName ? listNameHtml = (<p id="list_name_header">{this.props.listContainerReducer.activeListName}</p>) : listNameHtml = (<p id="list_name_header">Welcome</p>)
    return listNameHtml
  }

  render(){
    return(
      <div className="header_container" >
        {this.renderTitle()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { headerComponentReducer, listContainerReducer } = state

  return {
    headerComponentReducer,
    listContainerReducer
  }
}

export default connect(mapStateToProps)(HeaderComponent);
