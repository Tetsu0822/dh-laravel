import React from 'react';
import { Container, Table, Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function XoopsUsers({ users }) {
    return (
        <Container className="py-5">
            <h2 className="mb-4">
                雲端 XOOPS 使用者清單 <Badge bg="info">Live Data</Badge>
            </h2>
            <Table striped bordered hover responsive shadow>
                <thead className="table-dark">
                    <tr>
                        <th>UID</th>
                        <th>帳號 (uname)</th>
                        <th>Email</th>
                        <th>註冊時間</th>
                    </tr>
                </thead>
                <tbody>
                    {users.length > 0 ? users.map(user => (
                        <tr key={user.uid}>
                            <td>{user.uid}</td>
                            <td>{user.uname}</td>
                            <td>{user.email}</td>
                            <td>{new Date(user.user_regdate * 1000).toLocaleDateString()}</td>
                        </tr>
                    )) : (
                        <tr><td colSpan="4" className="text-center">查無資料</td></tr>
                    )}
                </tbody>
            </Table>
        </Container>
    );
}