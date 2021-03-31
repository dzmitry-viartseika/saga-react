import React, { useState } from 'react';
import Alert from '../Main/Alert/Alert';
import {useDispatch, useSelector} from "react-redux";
import {addNewPost, hideAlert, showAlert} from '../../redux/actions';

const PostsForm = () => {

    const [value, setValue] = useState({
        title: '',
        postsList: []
    });

    const alertText = useSelector(state => state.loaders.alert);

    const dispatch = useDispatch();

    const submitHandler = event => {
        event.preventDefault();
        if (!value.title.trim()) {
            dispatch(showAlert('Название не может быть пустым'));
            return
        }
        const newPost = {
            id: Date.now().toString(),
            title: value.title
        };
        setValue(prev => {
            return {
                ...prev,
                title: ''
            }
        })
        dispatch(addNewPost(newPost));
    };

    const changeValueHandler = event => {
        event.persist()
        setValue(prev => {
            return {
                ...prev,
                title: event.target.value
            }
        })
    }

    return (
        <form onSubmit={submitHandler}>
            {
                alertText ? <Alert alertText={alertText}/> : null
            }
            <div className="mb-3">
                <label
                    htmlFor="Title"
                    className="form-label"
                >
                    Заголовок поста
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="title"
                    value={value.title}
                    onChange={changeValueHandler}
                />
            </div>
            <button
                className={'btn btn-success'}
            >
                Добавить
            </button>
        </form>
    )
};

export default PostsForm;