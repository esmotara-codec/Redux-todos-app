import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getAllTodos from '../services/todosActions';

const Todos = () => {
    const {isLoading , todos, error } = useSelector((state) => state);
    const dispatch =useDispatch();
    useEffect(()=> {
        dispatch(getAllTodos());
    },[]);
    return (
        <div className='text-center '>
            <h1 className='font-bold text-3xl'>T_o_d_o_s App</h1>
            {isLoading && <h3>Loading...</h3>}
            {error && <h3>{error.message}</h3>}

            <section className='mt-5 '>
                {todos && todos.map((todo) =>{
                    return <article key={todo}>
                        <h4><span className='font-semibold text-teal-800'>Todo ID :</span> {todo.id}</h4>
                        <h4><span className='text-red-800 font-bold'>Todo Title :</span> {todo.title}</h4>
                    </article>
                } )}

            </section>
        </div>
    );
};

export default Todos;