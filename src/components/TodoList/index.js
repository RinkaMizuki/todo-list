import { Col, Row, Input, Space, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
// import { addToDoAction } from '../../redux/actions'
import TodoSlice from './todoSlice';
import { v4 as uuidv4 } from 'uuid'
import { todosRemaining } from '../../redux/selectors';

export default function TodoList() {

    const [inputText, setInputText] = useState("");
    const [selectPriority, setSelectPriority] = useState("Medium");
    const dispatch = useDispatch();
    const todoList = useSelector(todosRemaining);

    const handleChoosePriority = (value) => {
        setSelectPriority(value);
    }

    const handleAddToDo = () => {
        dispatch(TodoSlice.actions.addToDoAction({
            id: uuidv4(),
            name: inputText,
            completed: false,
            priority: selectPriority,
        }))
        setInputText('');
        setSelectPriority('Medium');
    }
    const handleChangeText = (e) => {
        setInputText(e.target.value);
    }

    return (
        <Row style={{ height: 'calc(100% - 40px)' }}>
            <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
                {todoList.map((todo) => (
                    <Todo key={todo.id} id={todo.id} name={todo.name} priority={todo.priority} completed={todo.completed} />
                ))}
            </Col>
            <Col span={24}>
                <Space.Compact style={{ display: 'flex' }} >
                    <Input value={inputText} onChange={handleChangeText} />
                    <Select value={selectPriority} onChange={handleChoosePriority}>
                        <Select.Option value='High' label='High'>
                            <Tag color='red'>High</Tag>
                        </Select.Option>
                        <Select.Option value='Medium' label='Medium'>
                            <Tag color='blue'>Medium</Tag>
                        </Select.Option>
                        <Select.Option value='Low' label='Low'>
                            <Tag color='gray'>Low</Tag>
                        </Select.Option>
                    </Select>
                    <Button type='primary' onClick={handleAddToDo}>
                        Add
                    </Button>
                </Space.Compact>
            </Col>
        </Row>
    );
}
