import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { follow, setCurrentPage, setIsFeatching, setTotalUsersCount, setUsers, unfollow } from "../../redux/users-reducer";
import Users from "./Users";

import Preloader from "../Prealoader/Preloader";

class UsersContainer extends React.Component{

      
    componentDidMount(){
        this.props.setIsFeatching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage} &count=${this.props.pageSize}`,{withCredentials:true}).then(respons=>{
             
        this.props.setUsers(respons.data.items);
        this.props.setTotalUsersCount(respons.data.totalCount);
        this.props.setIsFeatching(false);
        })
    }

    onChangePages=(pageNumber)=>{
        this.props.setIsFeatching(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber} &count=${this.props.pageSize}`,{withCredentials:true}).then(respons=>{
              
        this.props.setUsers(respons.data.items);
        this.props.setIsFeatching(false);
        })
    }

   
    render(){
        return<> 
        {this.props.isFetching?<Preloader/>:null}
        <Users currentPage={this.props.currentPage}
        onChangePages={this.onChangePages}
        totalUserCount={this.props.totalUserCount}
        pageSize={this.props.pageSize}
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        
        />
        </>
    }
        
}




let mapStateToProps=(state)=>{
    return{
        users:state.usersPage.users,
        pageSize:state.usersPage.pageSize,
        totalUserCount:state.usersPage.totalUserCount,
        currentPage:state.usersPage.currentPage,
        isFetching:state.usersPage.isFetching
    }
}


export default connect(mapStateToProps,{
    follow,unfollow,setUsers,setCurrentPage,setTotalUsersCount,setIsFeatching
})(UsersContainer)