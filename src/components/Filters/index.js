import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { priorityFilterChange, searchFilterChange, statusFilterChange } from '../../redux/actions'

import FiltersSlice from './filtersSlice';
const { Search } = Input;

export default function Filters() {

    const [inputSearch, setInputSearch] = useState('');
    const [filterState, setFilterStatus] = useState('All');
    const [filterPriority, setFilterPriority] = useState([]);
    const dispatch = useDispatch();

    const handleSearchTodo = (e) => {
        setInputSearch(e.target.value);
        dispatch(FiltersSlice.actions.searchFilterChange(e.target.value));
    }

    const handleFilterChange = (e) => {
        setFilterStatus(e.target.value);
        dispatch(FiltersSlice.actions.statusFilterChange(e.target.value));
    }

    const handleSelectChange = (value) => {
        setFilterPriority(value);
        dispatch(FiltersSlice.actions.priorityFilterChange(value));
    }

    return (
        <Row justify='center'>
            <Col span={24}>
                <Typography.Paragraph
                    style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
                >
                    Search
                </Typography.Paragraph>
                <Search placeholder='input search text' value={inputSearch} onChange={handleSearchTodo} />
            </Col>
            <Col sm={24}>
                <Typography.Paragraph
                    style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
                >
                    Filter By Status
                </Typography.Paragraph>
                <Radio.Group value={filterState} onChange={handleFilterChange}>
                    <Radio value='All'>All</Radio>
                    <Radio value='Completed'>Completed</Radio>
                    <Radio value='Todo'>To do</Radio>
                </Radio.Group>
            </Col>
            <Col sm={24}>
                <Typography.Paragraph
                    style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
                >
                    Filter By Priority
                </Typography.Paragraph>
                <Select
                    value={filterPriority}
                    mode='multiple'
                    allowClear
                    placeholder='Please select'
                    style={{ width: '100%' }}
                    onChange={handleSelectChange}
                >
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
            </Col>
        </Row>
    );
}
