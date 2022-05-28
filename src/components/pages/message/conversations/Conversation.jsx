import React,{useEffect, useState} from 'react'
import { getUser } from '../../../../http/Index';

const Conversation = ({conversation, currentUser, socket}) => {
    const [user, setUser] = useState('');

    useEffect(() => {
        const receiverId = conversation.members.find((m) => m !== currentUser);
        console.log(receiverId, "receiverId");
        try {
            getUser(receiverId).then(res => {
                setUser(res.data.user);
            })
        } catch (error) {
            console.log(error);
        }
    },[currentUser, conversation])

    return (
        <>
            <li class="clearfix">
                <img src="https://bootdey.com/img/Content/avatar/avatar8.png" alt="avatar" />
                <div class="about">
                    <div class="name">@{user.username}</div>
                    <div class="status"> <i class="fa fa-circle online"></i> online </div>
                </div>
            </li>
            <hr />
        </>
    )
}

export default Conversation