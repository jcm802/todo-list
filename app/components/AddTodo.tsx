'use client';

import React, { FormEventHandler, useState } from 'react'
import { IoMdAddCircleOutline } from 'react-icons/io';
import Modal from './Modal';
import { addTodo } from '@/todosApi';
import { useRouter } from 'next/navigation';
import { uuid } from 'uuidv4';

export default function AddTask() {
  const router = useRouter();
  const [openModalNew, setOpenModalNew] = useState<boolean>(false);
  const [newTodoValue, setNewTodoValue] = useState<string>('');

  const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = async (e: any) => {
    e.preventDefault();
    await addTodo({
        id: uuid(),
        text: newTodoValue,
    });
    setNewTodoValue('');
    setOpenModalNew(false);
    router.refresh();
  }

  return (
    <div>
        <button onClick={() => setOpenModalNew(true)} className="btn btn-primary w-full">
            Add new task
            <IoMdAddCircleOutline size={20} />
        </button>
        <Modal openModal={openModalNew} setOpenModal={setOpenModalNew}>
            <form onSubmit={handleSubmitNewTodo}>
                <h3 className="font-bold text-lg">Add new task</h3>
                <div className="modal-action">
                  <input
                    value={newTodoValue}
                    onChange={(e) => setNewTodoValue(e.target.value)}
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-full" />
                  <button type="submit" className="btn">Submit</button>
                </div>
            </form>
        </Modal>
    </div>
  )
}
