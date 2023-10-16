'use client'
import React, { FormEventHandler, useState } from 'react';
import { ITodo } from '@/types/todos'
import { HiOutlinePencil, HiOutlineTrash } from 'react-icons/hi';
import Modal from './Modal';
import { useRouter } from 'next/navigation';
import { deleteTodo, editTodo } from '@/todosApi';

interface TaskProps {
    task: ITodo;
}

export default function Task({ task }: TaskProps ): JSX.Element {
    const router = useRouter();
    const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
    const [openModalDelete, setOpenModalDelete] = useState<boolean>(false);
    const [todoToEdit, setTodoToEdit] = useState<string>(task.text);

    const handleSubmitEditTodo: FormEventHandler<HTMLFormElement> = async (e: any) => {
        e.preventDefault();
        await editTodo({
            id: task.id,
            text: todoToEdit,
        });
        setOpenModalEdit(false);
        router.refresh();
      }

    const handleDeleteTodo = async (id: string) => {
        await deleteTodo(id);
        setOpenModalDelete(false);
        router.refresh();
    }
  return (
    <tr key={task.id}>
        <td className='w-full'>{task.text}</td>
        <td className='flex gap-5'>
            <HiOutlinePencil onClick={(() => setOpenModalEdit(true))} cursor='pointer' size={20} />
            <Modal openModal={openModalEdit} setOpenModal={setOpenModalEdit}>
            <form onSubmit={handleSubmitEditTodo}>
                <h3 className="font-bold text-lg">Edit todo</h3>
                <div className="modal-action">
                  <input
                    value={todoToEdit}
                    onChange={(e) => setTodoToEdit(e.target.value)}
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-full" />
                  <button type="submit" className="btn">Submit</button>
                </div>
            </form>
        </Modal>
            <HiOutlineTrash onClick={() => setOpenModalDelete(true)} cursor='pointer' className='text-red-500' size={20} />
            <Modal openModal={openModalDelete} setOpenModal={setOpenModalDelete}>
                <h3 className='text-lg'>Are you sure you want to delete this todo?</h3>
                <div className="modal-action">
                    <button onClick={() => handleDeleteTodo(task.id)}>
                        Yes
                    </button>
                </div>
            </Modal>
        </td>
      </tr>
  )
}
