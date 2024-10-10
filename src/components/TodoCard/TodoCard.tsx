import Rectangle2 from '../../assets/rectangle2.png'
import { MdDeleteOutline } from "react-icons/md";
import { FaRegCircle } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

import { CiCircleCheck } from "react-icons/ci";
import { useState } from 'react';
import { Options, opetionsTime, opetonsWeek, TodoList } from './TodoCard.types.ts';

const TodoCard = () => {
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = {
        day: 'numeric', 
    };
    const [opetionsTime, setOptionsTime] = useState<opetionsTime>({
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,           
        timeZone: 'Asia/Tbilisi'
    });
    const [opetonsWeek, setOpetonsWeek] = useState<opetonsWeek>({
        weekday: 'long',        
        timeZone: 'Asia/Tbilisi' 
    })
    const [week, setWeek] = useState<string | null>(date.toLocaleDateString('en-US', opetonsWeek));
    const [dayNumber, setDayNumber] = useState<string | null>(date.toLocaleTimeString('en-US', opetionsTime));
    const [day, setDay] = useState<string | null>(date.toLocaleDateString('en-US', options));
    const [inputValue, setInputValue] = useState<string>('');
    const [isEditIndex, setIsEditIndex] = useState<number | null>(null);
    const [editInputValue, setEditInputValue] = useState<string>('');
    const [todoList, setTodoList] = useState<TodoList[]>([

        {
            id: 1,
            title: 'Task 1',
            time: 'Today at 8:00 PM',
            active: true,
        },
        {
            id: 2,
            title: 'Task 2',
            time: 'Today at 8:00 PM',
            active: true,
        },
        {
            id: 3,
            title: 'Task 3',
            time: 'Today at 8:00 PM',
            active: false,
        },
        {
            id: 4,
            title: 'Task 4',
            time: 'Today at 8:00 PM',
            active: true,
        }


    ]);
    const handleAddTask = () => {
        if (!inputValue) return true;
        const newTask = {
            id: todoList.length + 1,
            title: inputValue,
            time: `${day} ${week} ${dayNumber}`,
            active: false,
        }
        todoList.push(newTask);
        setInputValue('');

    }
    const handleDeleteTask = (index: number) => {
        const newTodoList = todoList.filter((item, i) => i !== index);
        setTodoList(newTodoList);3 
    }


    const handleSaveEdit = (index: number) => {
        const newTodoList = todoList.map((item, i) => {
            if (i === index) {
                return {
                    ...item,
                    title: editInputValue
                }
            }
            return item;
        });
        setTodoList(newTodoList);
        setIsEditIndex(null);
        setEditInputValue('');
    }


    const handleActiveTask = (index: number) => {
        const newTodoList = todoList.map((item, i) => {
            if (i === index) {
                return {
                    ...item,
                    active: !item.active
                }
            }
            return item;
        });
        setTodoList(newTodoList);
    }
    return (
        <div className="rounded-xl bg-white w-96">
            <div className="relative">
                <img src={Rectangle2} alt="Rectangle2" className="rounded-t-xl w-full" />
                <div className="absolute bottom-0 right-0 p-2 bg-white bg-opacity-75 rounded-bl-xl">
                    <p className="text-[#0D0D0D] font-inter text-[18px] font-medium leading-normal">{day} {week}, {dayNumber}</p>
                </div>
            </div>
         
            <div className='p-3 mt-6'>
                <div className='flex gap-10 justify-between items-center text-left'>
                    <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} className="p-4 border-b-2 border-gray-200 focus:outline-none" placeholder="Add a new task" />
                    <button className="bg-[#20EEB0] text-white font-boldrounded-md w-20 p-5" onClick={handleAddTask}>+</button>
                </div>
                <div className='mt-6 pb-10'>
                    {
                        todoList.map((item, index) => (
                            <div className='flex justify-between items-center mb-6' key={index}>
                                <div>
                                    <p className='text-[#0D0D0D] font-inter text-[18px] font-medium leading-normal'>
                                        <input type='text' value={isEditIndex == index ? editInputValue : item.title} onChange={(e) => setEditInputValue(e.target.value)} className='border-none outline-none' />

                                    </p>

                                    <p className='text-[#888] font-inter text-[14px] font-normal leading-normal'>{item.time}</p>
                                </div>
                                {isEditIndex === index ? <button className='text-[#FF4C29] font-bold' onClick={() => handleSaveEdit(index)}>Save</button> : null}
                                <div className='flex gap-4 items-center justify-center'>
                                    <button onClick={() => handleActiveTask(index)}>
                                        {item.active ? <CiCircleCheck size={25} /> : <FaRegCircle size={25} />}

                                    </button>
                                    <button className='text-[#FF4C29] font-bold'><MdEdit size={25} onClick={() => setIsEditIndex(index)} /></button>
                                    <button className='text-[#FF4C29] font-bold'><MdDeleteOutline size={25} onClick={() => handleDeleteTask(index)} />
                                    </button>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default TodoCard