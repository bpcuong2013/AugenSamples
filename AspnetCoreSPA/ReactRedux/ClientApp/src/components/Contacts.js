import React from 'react';
import { connect } from 'react-redux';
import config from './../config/base';
import Pagination from "react-js-pagination";
import {Table} from 'reactstrap';
import Actions from '../actions/creators';
import './style.css';

class Contacts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchKey: "",
      pageIndex: 1,
      contacts: []
    };
    
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
  }
    
  componentWillMount() {    
    this.ensureContactFetched(1)
  }
  
  componentDidMount() {    
    this.ensureContactFetched(1);
  }
  
  handleKeyPress(event) {    
    this.setState({pageIndex: 1, searchKey: event.target.value});      
    this.ensureContactFetched(1);
  }

  handlePageChange(pageNumber) {    
    this.setState({pageIndex: pageNumber});    
    this.ensureContactFetched(pageNumber);
  }
  
  ensureContactFetched(pageIndex) {
    this.setState({pageIndex: pageIndex});  
    let searchParam = ({
          PageIndex: pageIndex,
          PageSize: config.pageSize,
          SearchKey: this.state.searchKey
        });

      this.props.requestContacts(searchParam);
  }
  
  render() {  
    var headerItems = ["First","Last","Email","Phone 1"];
    return (
      <div>          
         <div className="centerContainer">
            <div className="centerInner">
                <input className="searchControl form-control" type="search" placeholder="Search contact" onKeyUp={this.handleKeyPress}  />
            </div>
         </div>    

          <div className="innerContainer">            
            <Table hover>
              <thead>
                <tr>
                {headerItems.map((column, i) => (
                  <th key={i}>
                    {column}
                  </th>
                ))}
                </tr>
              </thead>
              
              <tbody>
              {
                  this.props.data.contacts.map(item => (
                      <tr key={item.email} >            
                        <td>{item.firstName} </td>
                        <td>{item.lastName} </td>
                        <td>{item.email} </td>
                        <td>{item.phone1} </td>            
                      </tr>
                    ))
                }
              </tbody>
            </Table>
        </div>
      
        <div className="centerContainer">
            <div className="centerInner">
                <Pagination
                  activePage={this.state.pageIndex}
                  itemsCountPerPage={config.pageSize}
                  totalItemsCount={this.props.data.itemTotal}
                  pageRangeDisplayed={config.pageRangeDisplayed}
                  onChange={this.handlePageChange}
                />    
            </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({  
  requestContacts: searchParam => dispatch(Actions.requestContacts(searchParam))
});

const mapStateToProps = state => ({
  data: state.contacts,
  pageTotal: state.pageTotal,
  itemTotal: state.itemTotal
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);